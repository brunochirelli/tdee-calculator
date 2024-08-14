import { Meta, StoryObj } from "@storybook/react";
import Home from "./page";
import MainLayout from "@/shared/layouts/MainLayout/MainLayout";

const meta = {
  title: "Page/Home",
  component: Home,
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
  decorators: (Story) => (
    <MainLayout>
      <Story />
    </MainLayout>
  ),
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
