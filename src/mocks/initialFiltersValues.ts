import { InitialFilterValues } from '../types/filter';

const initialFilterValues: InitialFilterValues = {
  filters: [
    {
      values: [
        {
          label: '2',
          value: '2',
        },
      ],
      operator: '<=',
      id: {
        label: 'ID',
        value: '1',
      },
    },
    {
      operator: '<=',
      values: [
        {
          label: '300',
          value: '300',
        },
      ],
      id: {
        label: 'Сума',
        value: '3',
      },
    },
    {
      operator: '=',
      values: [
        {
          label: 'Підтверджено',
          value: '1',
        },
      ],
      id: {
        label: 'Статус',
        value: '13',
      },
    },
  ],
};

export default initialFilterValues;
