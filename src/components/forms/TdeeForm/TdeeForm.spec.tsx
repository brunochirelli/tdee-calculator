import { render, screen } from "@testing-library/react";
import TdeeForm from "./TdeeForm";
import { TestClientProvider } from "@/providers/TestProvider";

describe("BMRForm", () => {
  it("Should render without errors", () => {
    render(<TdeeForm />, { wrapper: TestClientProvider });

    expect(
      screen.getByRole("button", { name: "Calculate" }),
    ).toBeInTheDocument();
  });
});
