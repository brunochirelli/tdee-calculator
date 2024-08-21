import { render, screen } from "@testing-library/react";
import CaloriesTable from "./CaloriesTable";
import React from "react";

describe("CaloriesTable", () => {
  it("Should render without errors", () => {
    render(<CaloriesTable />);

    expect(screen.getByText(/1974/)).toBeInTheDocument();
  });
});
