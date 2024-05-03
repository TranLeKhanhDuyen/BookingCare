import Header from './Header';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    header: {
      control: {
        type: 'string',
      },
    },
    title: {
      defaultValue: '',
      description: 'Change title of the navbar item',
    },
    subsTitle: {
      defaultValue: '',
      description: 'Change title of the navbar item',
    },
  },
} as Meta;

type StoryType = Story<typeof Header>;

export const Default: StoryType = (args) => <Header {...args} />;

Default.args = {
  items: [
    {
      id: '1',
      title: 'Specialist',
      subsTitle: 'Find doctors by specialty',
    },
    {
      id: '2',
      title: 'Health facilities',
      subsTitle: 'Choose a hospital or clinic',
    },
    {
      id: '3',
      title: 'Doctor',
      subsTitle: 'Choose a doctor',
    },
    {
      id: '4',
      title: 'Examination package',
      subsTitle: 'General examination',
    },
  ]
};
