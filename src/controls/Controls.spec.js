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