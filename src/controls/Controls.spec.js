// Test away!
import React from 'react';
import * as rtl from "react-testing-library";
import 'jest-dom/extend-expect';
import Controls from './Controls';

test('cannot be opened if it is locked', () => {
    const wrapper = rtl.render(<Controls locked={true} closed={true} />)
    const openButton = wrapper.getByTestId(/open-button/i);
    expect(openButton).not.toBeEnabled();
})

test('buttons for locked state rendered', () => {
    const wrapper = rtl.render(<Controls />)
    const element = wrapper.getByTestId(/lock-button/i);
    expect(element).toBeVisible();
})

test('buttons for closed state rendered', () => {
    const wrapper = rtl.render(<Controls />)
    const element = wrapper.getByTestId(/open-button/i);
    expect(element).toBeVisible();
})

test('close button text changes if clicked', async () => {
    const wrapper = rtl.render(<Controls/>)
    const close = wrapper.getByText(/Close Gate/i);
    
    await wrapper.getByTestId(/open-button/i);
    rtl.act(() => {
        rtl.fireEvent.click(close);
    });
    const open = wrapper.getByText(/Open Gate/i)
    expect(wrapper.getByTestId(/open-button/i)).toBe(open);
})

test('locked button text changes if clicked', async () => {
    const wrapper = rtl.render(<Controls closed={true} locked = {false}/>)
    const lock = wrapper.getByText(/Lock Gate/i);
    const unlock = wrapper.getByText(/Unlock Gate/i)
    await wrapper.getByTestId(/lock-button/i);
    rtl.act(() => {
        rtl.fireEvent.click(lock);
    });
    
    expect(wrapper.getByTestId(/lock-button/i)).toBe(unlock);
})
