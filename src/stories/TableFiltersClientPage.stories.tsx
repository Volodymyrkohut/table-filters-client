// @ts-ignore
import React from 'react';
import { ComponentStory, ComponentMeta, DecoratorFn } from '@storybook/react';
import TableFiltersClientPage from './TableFiltersClientPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

const reactRouterDecorator: DecoratorFn = (Story) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};

export default {
  decorators: [reactRouterDecorator],
} as ComponentMeta<typeof TableFiltersClientPage>;

// @ts-ignore
const Template: ComponentStory<typeof TableFiltersClientPage> = (args) => <TableFiltersClientPage {...args} />;

export const Default = Template.bind({});
