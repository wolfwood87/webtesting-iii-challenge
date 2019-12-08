// Test away!

import React from 'react';
import * as rtl from "react-testing-library";
import 'jest-dom/extend-expect';
import Display from './Display';

test('displays if gate is locked/unlocked', () => {
    const wrapper = rtl.render(<Display />);
    const element = wrapper.getByTestId('locked');
    expect(element).toBeVisible();
});

test('displays if gate is opened/closed', () => {
    const wrapper = rtl.render(<Display />);
    const element = wrapper.getByTestId('closed');
    expect(element).toBeVisible();
});

test('displays closed if closed prop is true', () => {
    const wrapper = rtl.render(<Display closed={true}/>);
    const element = wrapper.getByText(/Closed/i);
    expect(element).toBeVisible();
});

test('displays locked if locked prop is true', () => {
    const wrapper = rtl.render(<Display locked={true}/>);
    const element = wrapper.getByText("Locked");
    expect(element).toBeVisible();
});

test('when locked use red-led class', () => {
    const wrapper = rtl.render(<Display locked={true}/>);
    const element = wrapper.getByText("Locked");
    expect(element).toHaveClass('red-led');
});

test('when closed use red-led class', () => {
    const wrapper = rtl.render(<Display closed={true}/>);
    const element = wrapper.getByText("Closed");
    expect(element).toHaveClass('red-led');
});

test('when unlocked use green-led class', () => {
    const wrapper = rtl.render(<Display locked={false}/>);
    const element = wrapper.getByText("Unlocked");
    expect(element).toHaveClass('green-led');
});

test('when open use green-led class', () => {
    const wrapper = rtl.render(<Display closed={false}/>);
    const element = wrapper.getByText("Open");
    expect(element).toHaveClass('green-led');
});