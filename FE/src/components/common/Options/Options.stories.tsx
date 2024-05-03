import { Meta, StoryObj } from '@storybook/react'
import OptionList from './Options';

export default {
  title: 'Commons/Option',
  component: OptionList,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: {
        type: 'array'
      }
    }
  }
} as Meta

type Story = StoryObj<typeof OptionList>;

export const Default: Story = {
  args: {
    items: [
      {
        id: '1',
        value: 'doctor'
      },
      {
        id: '2',
        value: 'admin'
      },
    ]
  }
}
