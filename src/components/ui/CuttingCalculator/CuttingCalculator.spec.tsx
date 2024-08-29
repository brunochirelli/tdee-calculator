import { render, screen } from "@testing-library/react";
import CuttingCalculator from "./CuttingCalculator";

describe("CuttingCalculator", () => {
  it("Should render without errors", () => {
    render(<CuttingCalculator calories={2000} currentWeight={80} />);

    expect(screen.getByText(/Daily calories/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Weight goal/)).toBeInTheDocument();
  });
});
