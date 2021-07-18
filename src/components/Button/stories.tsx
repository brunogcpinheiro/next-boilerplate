import { Story, Meta } from '@storybook/react/types-6-0'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    text: 'Submit'
  }
} as Meta

export const Basic: Story = (args) => <Button text="Submit" {...args} />
