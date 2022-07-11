import { FilterResponseItem } from '../types/filter';

const filterResponse: FilterResponseItem[] = [
  {
    id: 1,
    type: 'number',
    caption: 'ID',
    operators: ['<', '<=', '>', '>=', '=', '!='],
    values: null,
  },
  {
    id: 2,
    type: 'number',
    caption: 'Замовлення',
    operators: ['<', '<=', '>', '>=', '=', '!='],
    values: null,
  },
  {
    id: 3,
    type: 'number',
    caption: 'Сума',
    operators: ['<', '<=', '>', '>=', '=', '!='],
    values: null,
  },
  {
    id: 4,
    type: 'number',
    caption: 'Знижка',
    operators: ['<', '<=', '>', '>=', '=', '!='],
    values: null,
  },
  {
    id: 5,
    type: 'source',
    caption: 'Готель',
    operators: ['=', '!='],
    values: null,
  },
  {
    id: 7,
    type: 'source',
    caption: 'Тариф',
    operators: ['=', '!='],
    values: null,
  },
  {
    id: 8,
    type: 'date',
    caption: 'Дата заїзду',
    operators: ['<', '<=', '>', '>=', '=', '!='],
    values: null,
  },
  {
    id: 9,
    type: 'date',
    caption: 'Дата виїзду',
    operators: ['<', '<=', '>', '>=', '=', '!='],
    values: null,
  },
  {
    id: 10,
    type: 'number',
    caption: 'Дорослі',
    operators: ['<', '<=', '>', '>=', '=', '!='],
    values: null,
  },
  {
    id: 11,
    type: 'number',
    caption: 'Діти',
    operators: ['<', '<=', '>', '>=', '=', '!='],
    values: null,
  },
  {
    id: 12,
    type: 'number',
    caption: 'Немовлята',
    operators: ['<', '<=', '>', '>=', '=', '!='],
    values: null,
  },
  {
    id: 13,
    type: 'enum',
    caption: 'Статус',
    operators: ['=', '!='],
    values: [
      {
        id: 1,
        name: 'Підтверджено',
      },
      {
        id: 2,
        name: 'Гарантовано',
      },
      {
        id: 3,
        name: 'Поселено',
      },
      {
        id: 4,
        name: 'Виселено',
      },
      {
        id: 5,
        name: 'Не заїзд',
      },
      {
        id: 6,
        name: 'Скасовано',
      },
    ],
  },
  {
    id: 6,
    type: 'source',
    caption: 'Тип номера',
    operators: ['=', '!='],
    values: null,
  },
];

export default filterResponse;
