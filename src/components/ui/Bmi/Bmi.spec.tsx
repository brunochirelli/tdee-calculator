import { render, screen } from "@testing-library/react";
import BMI from "./Bmi";

describe("Bmi", () => {
  it("Should highlight the proper BMI range", () => {
    render(<BMI bmi={29} />);

    expect(
      screen.getByText(/your is , which means you are classified as \.\.\./i),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("row", { name: "18.5 or less Underweight" }),
    ).not.toHaveClass("font-bold");
    expect(
      screen.getByRole("row", { name: "18.5 – 24.99 Normal" }),
    ).not.toHaveClass("font-bold");
    expect(
      screen.getByRole("row", { name: "25 – 29.99 Overweight" }),
    ).toHaveClass("font-bold");
    expect(screen.getByRole("row", { name: "30+ Obese" })).not.toHaveClass(
      "font-bold",
    );
  });
});
