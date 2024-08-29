import { render, screen } from "@testing-library/react";
import Home from "./page";
import { TestClientProvider } from "@/providers/TestProvider";

class ResizeObserver {
  observe() {}
  unobserve() {}
}

describe("page.spec", () => {
  if (window) {
    // @ts-ignore
    window.ResizeObserver = ResizeObserver;
  }

  it("should work", () => {
    render(<Home />, { wrapper: TestClientProvider });
    expect(
      screen.getByRole("button", { name: "Calculate" }),
    ).toBeInTheDocument();
  });
});
