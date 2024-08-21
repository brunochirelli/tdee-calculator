import { render, screen } from "@testing-library/react";
import Calories from "./Calories";

describe("Calories", () => {
  it("Should render without errors", () => {
    render(<Calories />);

    expect(screen.getByText(/1974/)).toBeInTheDocument();
  });
});
