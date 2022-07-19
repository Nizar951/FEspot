import { render, screen } from "@testing-library/react";

import Isi from "./cardmusic";

test('all elements are rendered', ()=> {
    render(<Isi/>)
    const ada = screen.getAllByTestId("custom-element");

    expect(ada).toBeInTheDocument;
});