import type { Meta, StoryObj } from '@storybook/angular';
import { Header } from './header';

const meta: Meta<Header> = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<Header>;

export const Default: Story = {
  render: (args) => ({
    props: args,
  }),
  args: {
    // Add @Input() values here if needed
  },
};
