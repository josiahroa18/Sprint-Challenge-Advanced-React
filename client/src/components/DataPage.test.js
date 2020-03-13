import React from "react";
import { render } from "@testing-library/react";
import DataPage from "./DataPage";

test('component renders', () => {
    render(<DataPage/>);
})

test('graph renders', async() => {
    const { findByTestId } = render(<DataPage/>);
    await findByTestId('graph');
})

test('table renders', async() => {
    const { findByTestId} = render(<DataPage/>);
    await findByTestId('table');
})