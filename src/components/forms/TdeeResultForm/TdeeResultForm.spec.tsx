import { render, screen } from "@testing-library/react";
import TdeeResultForm from "./TdeeResultForm";
import { TestClientProvider } from "@/providers/TestProvider";

describe("TdeeResultForm", () => {
  it("Should render without errors", () => {
    render(<TdeeResultForm />, { wrapper: TestClientProvider });

    expect(screen.getByText(/173/)).toBeInTheDocument();
  });
});
