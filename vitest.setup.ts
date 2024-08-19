import "@testing-library/jest-dom/vitest";
import ResizeObserver from "resize-observer-polyfill";

global.ResizeObserver = ResizeObserver;

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
