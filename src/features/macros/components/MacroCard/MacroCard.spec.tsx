import { render, screen } from "@testing-library/react";
import MacroCard from "./MacroCard";

describe("MacroCard", () => {
  it("Should render without errors", () => {
    render(
      <MacroCard
        info="Moderate Carb (30/35/35)"
        carbs={218}
        fats={97}
        proteins={187}
      />,
    );

    expect(screen.getByText("Moderate Carb (30/35/35)")).toBeInTheDocument();
  });
});
