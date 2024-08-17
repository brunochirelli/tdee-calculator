import { render, screen } from "@testing-library/react";
import { TestClientProvider } from "@/providers/TestProvider";
import { TdeeResultForm } from "./TdeeResultForm";

describe("TdeeResultForm", () => {
  it("Should render without errors", () => {
    render(<TdeeResultForm />, { wrapper: TestClientProvider });

    expect(screen.getByText(/173/)).toBeInTheDocument();
  });
});
