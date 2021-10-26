import type { ButtonHTMLAttributes } from "react"

import type { Meta, Story } from "@storybook/react"

import { Button as ButtonComponent } from "./Button"

export default {
  title: "Button",
} as Meta<ButtonHTMLAttributes<HTMLButtonElement>>

const Template: Story<ButtonHTMLAttributes<HTMLButtonElement>> = (args) => (
  <ButtonComponent {...args}>Example button</ButtonComponent>
)

export const Button = Template.bind({})
