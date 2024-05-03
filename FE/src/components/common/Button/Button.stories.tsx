import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Button from './Button'
import './Button.css'

export default {
  title: 'Commons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    title: {
      type: {
        name: 'string',
        required: true,
      }
    },
    variant: {
      defaultValue: 'primary',
      description: 'Change color of the button',
    },
  },
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    title: 'Xem thêm',
    onClick: fn()
  }
}

export const Primary: Story = {
  args: {
    ...Default,
    variant: 'primary',
  }
}

export const secondary: Story = {
  args: {
    ...Default,
    variant: 'secondary',
  }
}
