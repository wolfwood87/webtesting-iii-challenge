// Test away

import React from 'react';
import * as rtl from "react-testing-library";
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';

test('renders controls', () => {
    const wrapper = rtl.render(<Dashboard />);
    const element = wrapper.getByTestId('controls')
    expect(element).toBeVisible();
});

test('renders Display', () => {
    const wrapper = rtl.render(<Dashboard />);
    const element = wrapper.getByTestId('display')
    expect(element).toBeVisible();
});

