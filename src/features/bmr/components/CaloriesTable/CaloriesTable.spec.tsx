import { render, screen } from "@testing-library/react";
import CaloriesTable from "./CaloriesTable";

describe("CaloriesTable", () => {
  it("Should render without errors", () => {
    render(<CaloriesTable bmr={2000} activityLevel={"1.2"} />);

    expect(screen.getByText(/2400/)).toBeInTheDocument();
  });
});
