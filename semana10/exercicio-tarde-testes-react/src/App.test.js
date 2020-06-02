import React from "react";
import { render, fireEvent, getByText, getAllByPlaceholderText } from "@testing-library/react";
import App from "./App";


describe('', () => {
   
    test('Ao criar um post ele deve aparecer na pagina', () => {
        const { getByPlaceholderText, getAllByText } = render( <input /> );

        const input = getByPlaceholderText("Novo post")
        
        fireEvent.change(input, {
            input: {
                value: "post teste"
            }
        });

        const button = getByText(/Adicionar/i)

        fireEvent.click(button)

        expect(getByText('post teste')).toBeInTheDocument();



        

    });
});