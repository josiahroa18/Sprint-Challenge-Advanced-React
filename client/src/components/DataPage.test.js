import React from "react";
import { render } from "@testing-library/react";
import DataPage from "./DataPage";
import Table from './Table';

test('component renders', () => {
    render(<DataPage/>);
})

test('graph renders', async() => {
    const { findByTestId } = render(<DataPage/>);
    await findByTestId('graph');
})

test('table renders', async() => {
    const { findByTestId } = render(<DataPage/>);
    await findByTestId('table');
})
