import { render, screen } from "@testing-library/react";
import MacrosCard from "./MacroCard";

describe("MacroCard", () => {
  it("Should render without errors", () => {
    render(
      <MacrosCard
        info="Moderate Carb (30/35/35)"
        carbs={218}
        fats={97}
        proteins={187}
      />,
    );

    expect(screen.getByText("Moderate Carb (30/35/35)")).toBeInTheDocument();
  });
});
