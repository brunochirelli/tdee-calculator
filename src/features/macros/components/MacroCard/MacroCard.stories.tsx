import { Meta, StoryObj } from "@storybook/react";
import MacroCard from "./MacroCard";

const meta = {
  title: "Components/MacroCard",
  component: MacroCard,
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
} satisfies Meta<typeof MacroCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    info: "Moderate Carb (30/35/35)",
    carbs: 100,
    fats: 100,
    proteins: 100,
  },
};
