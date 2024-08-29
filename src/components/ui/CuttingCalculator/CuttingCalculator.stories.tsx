import { Meta, StoryObj } from "@storybook/react";
import CuttingCalculator from "./CuttingCalculator";

const meta = {
  title: "Component/CuttingCalculator",
  component: CuttingCalculator,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      router: {
        basePath: "/",
      },
    },
  },
} satisfies Meta<typeof CuttingCalculator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    calories: 2000,
    currentWeight: 80,
  },
};
