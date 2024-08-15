import { render, screen } from "@testing-library/react";
import Calories from "./Calories";

describe("Calories", () => {
  it("Should render without errors", () => {
    render(<Calories calories={2000} />);

    expect(screen.getByText(/2000/)).toBeInTheDocument();
  });
});
