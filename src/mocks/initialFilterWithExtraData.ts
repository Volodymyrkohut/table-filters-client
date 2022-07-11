import { InitialValues } from '../types/filter';

const initialFilterWithExtraData: InitialValues = {
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
        values: null,
        operators: [
          {
            key: 'Виберіть оператор',
            value: '',
          },
          {
            key: '<',
            value: '<',
          },
          {
            key: '<=',
            value: '<=',
          },
          {
            key: '>',
            value: '>',
          },
          {
            key: '>=',
            value: '>=',
          },
          {
            key: '=',
            value: '=',
          },
          {
            key: '!=',
            value: '!=',
          },
        ],
        type: 'number',
      },
    },
    {
      values: [
        {
          label: '300',
          value: '300',
        },
      ],
      operator: '<=',
      id: {
        label: 'Сума',
        value: '3',
        values: null,
        operators: [
          {
            key: 'Виберіть оператор',
            value: '',
          },
          {
            key: '<',
            value: '<',
          },
          {
            key: '<=',
            value: '<=',
          },
          {
            key: '>',
            value: '>',
          },
          {
            key: '>=',
            value: '>=',
          },
          {
            key: '=',
            value: '=',
          },
          {
            key: '!=',
            value: '!=',
          },
        ],
        type: 'number',
      },
    },
    {
      values: [
        {
          label: 'Підтверджено',
          value: '1',
        },
      ],
      operator: '=',
      id: {
        label: 'Статус',
        value: '13',
        values: [
          {
            label: 'Підтверджено',
            value: '1',
          },
          {
            label: 'Гарантовано',
            value: '2',
          },
          {
            label: 'Поселено',
            value: '3',
          },
          {
            label: 'Виселено',
            value: '4',
          },
          {
            label: 'Не заїзд',
            value: '5',
          },
          {
            label: 'Скасовано',
            value: '6',
          },
        ],
        operators: [
          {
            key: 'Виберіть оператор',
            value: '',
          },
          {
            key: '=',
            value: '=',
          },
          {
            key: '!=',
            value: '!=',
          },
        ],
        type: 'enum',
      },
    },
  ],
};

export default initialFilterWithExtraData;
