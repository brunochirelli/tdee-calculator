import { Meta, StoryObj } from "@storybook/react";
import BMI from "./Bmi";

const meta = {
  title: "Component/BMI",
  component: BMI,
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
} satisfies Meta<typeof BMI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bmi: 29,
  },
};
