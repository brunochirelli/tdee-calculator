import { Meta, StoryObj } from "@storybook/react";
import Macronutrients from "./Macronutrients";

const meta = {
  title: "Components/Macronutrients",
  component: Macronutrients,
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
} satisfies Meta<typeof Macronutrients>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    calories: 2000,
  },
};
