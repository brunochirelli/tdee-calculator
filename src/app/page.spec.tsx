import { render, screen } from "@testing-library/react";
import Home from "./page";
import { TestClientProvider } from "@/providers/TestProvider";

describe("page.spec", () => {
  it("should work", () => {
    render(<Home />, { wrapper: TestClientProvider });
    expect(screen.getByText(/Home/)).toBeDefined();
  });
});
