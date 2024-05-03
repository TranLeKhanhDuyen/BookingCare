import { Meta, StoryObj } from '@storybook/react'
import './Input.css'
import Input from './Input';

export default {
  title: 'Commons/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    title: {
      type: {
        name: 'string',
        required: true,
      }
    },
    type: {
      defaultValue: '',
      description: 'Change type of the input item',
    },
    placeholder: {
      defaultValue: '',
      description: 'Change placeholder of the input item',
    }
  },
} as Meta

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter your email'
  }
}
