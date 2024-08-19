import { Meta, StoryObj } from "@storybook/react";
import { TdeeResultForm } from "./TdeeResultForm";

const meta = {
  title: "Component/TdeeResultForm",
  component: TdeeResultForm,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/results",
        query: {
          sex: "1",
          age: "29",
          height: "173",
          weight: "87",
          activity: "1.2",
        },
      },
    },
  },
} satisfies Meta<typeof TdeeResultForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
