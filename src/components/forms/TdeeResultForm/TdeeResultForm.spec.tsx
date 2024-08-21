import { render, screen } from "@testing-library/react";
import { TestClientProvider } from "@/providers/TestProvider";
import { TdeeResultForm } from "./TdeeResultForm";
import userEvent from "@testing-library/user-event";

describe("TdeeResultForm", () => {
  it("Should render and modify current values without errors", async () => {
    render(<TdeeResultForm />, { wrapper: TestClientProvider });

    const user = userEvent.setup();

    const matcher =
      /You're a \d+ year old \d who is \d+cm tall and weights \d+kg while doing \w+ activity/im;
    expect(screen.getByText(matcher)).toBeInTheDocument();
  });
});
