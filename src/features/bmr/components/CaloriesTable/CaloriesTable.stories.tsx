import { Meta, StoryObj } from "@storybook/react";
import CaloriesTable from "./CaloriesTable";

const meta = {
  title: "Component/CaloriesTable",
  component: CaloriesTable,
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
} satisfies Meta<typeof CaloriesTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bmr: 2000,
    activityLevel: "1.2",
  },
};
