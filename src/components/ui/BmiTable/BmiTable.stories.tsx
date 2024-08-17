import { Meta, StoryObj } from "@storybook/react";
import BmiTable from "./BmiTable";

const meta = {
  title: "Component/BmiTable",
  component: BmiTable,
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
} satisfies Meta<typeof BmiTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bmi: 29,
  },
};
