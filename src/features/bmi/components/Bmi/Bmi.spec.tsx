import { render, screen } from "@testing-library/react";
import BMI from "./Bmi";

describe("Bmi", () => {
  it("Should render without errors", () => {
    render(<BMI bmi={29} />);

    expect(screen.getByText(/BMI Score/)).toBeInTheDocument();
  });
});
