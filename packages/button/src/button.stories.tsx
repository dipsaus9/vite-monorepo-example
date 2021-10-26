import type { ReactNode } from "react"

import type { Meta, Story } from "@storybook/react"

import { Button as ButtonComponent } from "./Button"

export default {
  title: "Button",
} as Meta

const Template: Story<{ children: ReactNode }> = (args) => (
  <ButtonComponent {...args}>Example button</ButtonComponent>
)

export const Button = Template.bind({})
