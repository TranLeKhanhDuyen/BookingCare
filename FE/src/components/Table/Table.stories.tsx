import { Meta, StoryObj } from '@storybook/react'
import Table from "./Table";

export default {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    title: {
      type: {
        name: 'string',
        required: true,
      }
    },
    subsTitle: {
      defaultValue: '',
      description: 'Change title of the navbar item',
    },
  }
} as Meta

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    data: {
      rows: [
        { firstname: "John", lastname: "Doe", email: "john@example.com", address: "123 Main St" },
        { firstname: "Jane", lastname: "Smith", email: "jane@example.com", address: "456 Elm St" },
        { firstname: "Sara", lastname: "Smith", email: "jane@example.com", address: "456 Elm St" },
        { firstname: "John", lastname: "Doe", email: "john@example.com", address: "123 Main St" },

      ]
    },
    columnTitles: {
      firstname: "First Name",
      lastname: "Last Name",
      email: "Email",
      address: "Address"
    }
  }
}
