import {render, screen} from "@testing-library/react";
import { act } from 'react';
import Contact from "./Contact"

test("It should load the contact component", ()=>{
    render(<Contact />);
    const value = screen.getByRole("paragraph");
    expect(value).toBeInTheDocument();


})