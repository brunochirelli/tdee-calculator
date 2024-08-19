import { MOCK_QUERY } from "@/types/consts";
import "@testing-library/jest-dom/vitest";
import ResizeObserver from "resize-observer-polyfill";

global.ResizeObserver = ResizeObserver;

vi.mock("next/navigation", () => ({
  ...require("next-router-mock"),
  useSearchParams: vi.fn(() => new URLSearchParams(MOCK_QUERY)),
  usePathname: vi.fn(() => "/results"),
}));
