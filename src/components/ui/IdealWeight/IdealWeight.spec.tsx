import { render, screen } from "@testing-library/react";
import { Sex } from "@/types";
import IdealWeight from "./IdealWeight";

describe("IdealWeight", () => {
  it("Should render without errors", () => {
    render(<IdealWeight height={173} sex={Sex.MALE} />);

    expect(
      screen.getByText("Your ideal body weight is estimated to be 86"),
    ).toBeInTheDocument();
  });
});
