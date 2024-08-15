import "@testing-library/jest-dom/vitest";

const mockQuery = {
  sex: "1",
  age: "29",
  height: "173",
  weight: "87",
  activity: "1.2",
};

vi.mock("next/navigation", () => ({
  ...require("next-router-mock"),
  useSearchParams: vi.fn(() => new URLSearchParams(mockQuery)),
}));
