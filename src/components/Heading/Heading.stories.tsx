import { Story, Meta } from '@storybook/react/types-6-0';

import Heading from './';
import { IHeadingProps } from './interfaces';

export default {
  title: 'Text/Heading',
  component: Heading,
} as Meta;

export const Default: Story<IHeadingProps> = args => <Heading {...args} />;

Default.args = {
  children: 'Heading level 1',
};
