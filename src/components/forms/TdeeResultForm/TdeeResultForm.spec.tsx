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

    const ageInput = screen.getByPlaceholderText("Age");
    const heightInput = screen.getByPlaceholderText("cm");
    const weightInput = screen.getByPlaceholderText("kg");

    user.clear(ageInput);
    user.clear(heightInput);
    user.clear(weightInput);

    await userEvent.type(ageInput, "25");
    await userEvent.type(heightInput, "177");
    await userEvent.type(weightInput, "90");

    const newMatcher =
      /You're a 25 year old \d who is 177cm tall and weights 90kg while doing \w+ activity/im;

    expect(screen.getByText(newMatcher)).toBeInTheDocument();
  });
});
