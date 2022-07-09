import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {TableFiltersClient} from "../components";

export default {
  title: 'Example/TableFiltersClient',
  component: TableFiltersClient,
  argTypes: {
    initialFilters: {filters:[]},
    filtersTypesList: [],
    onSubmitFilterForm: () => {}
  },
} as ComponentMeta<typeof TableFiltersClient>;

const Template: ComponentStory<typeof TableFiltersClient> = (args) => <TableFiltersClient {...args} />;

export const TableFiltersClientExample = Template.bind({});
TableFiltersClientExample.args = {
  initialFilters: {filters:[]},
  filtersTypesList: [],
  onSubmitFilterForm: () => {}
};