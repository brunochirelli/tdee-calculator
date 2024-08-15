import { render, screen } from "@testing-library/react";
import Macronutrients from "./Macronutrients";

describe("Macronutrients", () => {
  it("Should render without errors", () => {
    render(<Macronutrients calories={2000} />);

    expect(screen.getByText("Macronutrients")).toBeInTheDocument();
  });
});
