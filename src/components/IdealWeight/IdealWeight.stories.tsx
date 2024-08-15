import { Meta, StoryObj } from "@storybook/react";
import IdealWeight from "./IdealWeight";

const meta = {
  title: "Components/IdealWeight",
  component: IdealWeight,
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
} satisfies Meta<typeof IdealWeight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: 173,
    sex: "1",
  },
};
