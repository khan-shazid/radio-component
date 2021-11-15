import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import { SAMPLE_DATA } from '../../constants';
import Station from './station';

afterEach(cleanup);

const getComponent = () => {
  const baseProps = {
    stations: SAMPLE_DATA,
  };
  return <Station {...baseProps}/>
}

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(getComponent(), div);
});

it('matches with snapshot', () => {
    const tree = renderer.create(getComponent()).toJSON();
    expect(tree).toMatchSnapshot();
});
