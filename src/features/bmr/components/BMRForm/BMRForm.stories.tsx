import { Meta, StoryObj } from "@storybook/react";
import BMRForm from "./BMRForm";

const meta = {
  title: "Component/BMRForm",
  component: BMRForm,
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
} satisfies Meta<typeof BMRForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "id",
  },
};
