import { Meta, StoryObj } from "@storybook/react";
import Calories from "./Calories";

const meta = {
  title: "Component/Calories",
  component: Calories,
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
} satisfies Meta<typeof Calories>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    calories: 2000,
  },
};
