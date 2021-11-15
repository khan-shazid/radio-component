import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import { Radio } from './radio';

afterEach(cleanup);

const STATION = {
  id: 1,
  name: 'Putin FM',
  count: '666',
  imageUrl: ''
};
let handleSelection = jest.fn();
const getComponent = (isSelected = false) => {
  const baseProps = {
    item: STATION,
    isSelected,
    handleSelection
  };
  return <Radio {...baseProps}/>
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(getComponent(), div);
});

it('renders radio title correctly', () => {
    const {getByTestId} = render(getComponent());
    expect(getByTestId('radio-title-name')).toHaveTextContent('Putin FM');
    expect(getByTestId('radio-title-count')).toHaveTextContent('66,6');
});

it('matches with snapshot without selection', () => {
    const tree = renderer.create(getComponent()).toJSON();
    expect(tree).toMatchSnapshot();
});

it('matches with snapshot with selection', () => {
    const tree = renderer.create(getComponent(true)).toJSON();
    expect(tree).toMatchSnapshot();
});

it('calls radio onClick listener', () => {
    const {getByTestId} = render(getComponent());
    fireEvent(
      getByTestId('radio'),
      new MouseEvent('click', {
        bubbles: true,
      }),
    );
    expect(handleSelection).toHaveBeenCalledTimes(1);
    expect(handleSelection).toHaveBeenCalledWith(STATION);
});
