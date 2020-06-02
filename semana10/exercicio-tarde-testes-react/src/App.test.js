import React from "react";
import { render, fireEvent, getByText, getAllByPlaceholderText } from "@testing-library/react";
import App from "./App";


describe('', () => {
    test('', () => {
        const { getByText, getByPlaceholderText } = render(<App />)

        const input = getByPlaceholderText(/post/)

        fireEvent.change(input, {
            target: {
                value: "post teste"
            }
        });

        const button = getByText(/Adicionar/i);

        fireEvent.click(button);

        expect(getByText('post teste')).toBeInTheDocument();

    });
});