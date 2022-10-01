import { render, screen } from "@testing-library/react";
import Calculate from "./Calculate";
import '@testing-library/jest-dom';
import App from "../App";

test( 'calculate correctly', () => {
    render( <Calculate/> );
    const headerEl = screen.getByText(/select tip/i);
    expect(headerEl).toBeInTheDocument()
});

test( 'reset button works correctly', () => {
    render( <App/> );
    const resetButton = screen.getAllByText(/reset/i);
    console.log(resetButton)
})
