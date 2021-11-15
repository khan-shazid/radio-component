import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import Footer from './station-footer';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer name='Test'/>, div);
})

it('renders footer correctly', () => {
    const {getByTestId} = render(<Footer name='FM data'/>);
    expect(getByTestId('footer-static')).toHaveTextContent('NOW PLAYING');
    expect(getByTestId('footer-props')).toHaveTextContent('FM data');
})

it('renders footer correctly', () => {
    const {getByTestId} = render(<Footer name=''/>);
    expect(getByTestId('footer-props')).toHaveTextContent('');
})

it('matches snapshot', () => {
    const tree = renderer.create(<Footer name='Fm Data'/>).toJSON();
    expect(tree).toMatchSnapshot();
})
