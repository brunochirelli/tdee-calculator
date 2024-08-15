import { render, screen } from "@testing-library/react";
import BMRForm from "./BMRForm";

describe("BMRForm", () => {
  it("Should render without errors", () => {
    render(<BMRForm />);

    expect(
      screen.getByRole("button", { name: "Calculate" }),
    ).toBeInTheDocument();
  });
});
