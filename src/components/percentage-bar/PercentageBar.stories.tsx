import { ComponentStory, ComponentMeta } from '@storybook/react';
import PercentageBar from './PercentageBar';

export default {
	title: 'Common/PercentageBar',
	component: PercentageBar,
} as ComponentMeta<typeof PercentageBar>;

const Template: ComponentStory<typeof PercentageBar> = args => (
	<div className='max-w-xs'>
		<PercentageBar {...args} />
	</div>
);

export const Primary = Template.bind({});
Primary.args = {
	backgroundColor: 'bg-[#B1B1B1]',
	fillColor: 'bg-blue-500',
	percentage: 0.5,
};
