import { render, screen } from "@testing-library/react";
import BmiTable from "./BmiTable";

describe("BmiTable", () => {
  it("Should render without errors", () => {
    render(<BmiTable bmi={29} />);

    expect(screen.getByText("Overweight")).toBeInTheDocument();
  });
});
