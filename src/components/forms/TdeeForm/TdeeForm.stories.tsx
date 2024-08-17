import { Meta, StoryObj } from "@storybook/react";
import TdeeForm from "./TdeeForm";

const meta = {
  title: "Component/TdeeForm",
  component: TdeeForm,
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
} satisfies Meta<typeof TdeeForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
