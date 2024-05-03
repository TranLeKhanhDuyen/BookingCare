import { Meta, StoryObj } from '@storybook/react'
import './ItemLink.css'
import ItemLink from './ItemLink';
import choray from '@assets/facilities/cho-ray.jpg';

export default {
  title: 'Components/ItemLink',
  component: ItemLink,
  tags: ['autodocs'],
  argTypes: {
    title: {
      type: {
        name: 'string',
        required: true,
      }
    },
    size: {
      defaultValue: 'small',
      description: 'Change size of the item link',
    },
    variant: {
      defaultValue: 'primary',
      description: 'Change color of the item link',
    },
    description: {
      defaultValue: '',
      description: 'Change description of the item link',
    },
    image: {
      defaultValue: '',
      description: 'Image URL for the item link',
    },
  },
} as Meta

type Story = StoryObj<typeof ItemLink>;

export const Default: Story = {
  args: {
    title: 'D',
    description: 'D',
    image: choray
  }
}

export const Small: Story = {
  args: {
    ...Default.args,
    type: 'media',
  }
}

export const Medium: Story = {
  args: {
    ...Default.args,
    type: 'service',
  }
}

export const Large: Story = {
  args: {
    ...Default.args,
    type: 'handbook',
  }
}

