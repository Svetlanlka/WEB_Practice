import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MyButton from "../components/MyButton/MyButton";

export default {
  title: 'Example/MyButton',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MyButton>;

const Template: ComponentStory<typeof MyButton> = (args) => <MyButton {...args} />;

export const MyButtonRed = Template.bind({});
MyButtonRed.args = {
  color: "red",
  children: "Кнопка",
};

export const MyButtonBlue = Template.bind({});
MyButtonBlue.args = {
  color: "blue",
  children: "Кнопка",
};

export const MyButtonBigBlue = Template.bind({});
MyButtonBigBlue.args = {
  color: "blue",
  children: "Кнопка",
  big: true,
};