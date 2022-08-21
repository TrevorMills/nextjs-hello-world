import React from 'react';
import Foo, { IFooProps } from './';

export default {
	title: 'Components/Foo',
	component: Foo,
	argTypes: {},
};

const Template = (args:any) => <Foo {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.viewportWidth = 999;

export const SimpleOne = Template.bind({});
// @ts-ignore
SimpleOne.args = {
	bar: 'simple'
} as IFooProps;
