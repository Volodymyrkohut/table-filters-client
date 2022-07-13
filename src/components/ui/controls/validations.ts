import * as Yup from 'yup';
import { FilterTransformedItem, ReactSelectOption } from '../../../types/filter';

const arrayOfObjectsToArrayOfStrings = (value: Array<ReactSelectOption>) => {
  return value?.map((item) => item.value);
};

const messages = {
  required: 'Required',
  date: 'Should be valid date format',
  string: 'Should be valid string',
  number: 'Should be valid number',
};

const filterSchema = Yup.object().shape({
  filters: Yup.array().of(
    Yup.object().shape({
      id: Yup.object()
        .shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
          type: Yup.string().required(),
        })
        .nullable()
        .required(messages.required),
      values: Yup.array()
        .when('id', {
          is: (object: FilterTransformedItem) => {
            if (object && object.type) {
              return object.type === 'number';
            }
            return false;
          },
          then: Yup.array()
            .transform((value: Array<ReactSelectOption>) => arrayOfObjectsToArrayOfStrings(value))
            .of(Yup.number().typeError(messages.number))
            .required(messages.required),
        })
        .when('id', {
          is: (object: FilterTransformedItem) => {
            if (object && object.type) {
              return object.type === 'date';
            }
            return false;
          },
          then: Yup.array()
            .transform((value: Array<ReactSelectOption>) => arrayOfObjectsToArrayOfStrings(value))
            .of(Yup.date().typeError(messages.date))
            .required(messages.required),
        })
        .when('id', {
          is: (object: FilterTransformedItem) => {
            if (object && object.type) {
              return object.type !== 'date' && object.type !== 'number';
            }
            return false;
          },
          then: Yup.array()
            .transform((value: Array<ReactSelectOption>) => arrayOfObjectsToArrayOfStrings(value))
            .of(Yup.number().typeError(messages.string))
            .required(messages.required),
        }),

      operator: Yup.string().nullable().required(messages.required), // these constraints take precedence
    })
  ),
  // .required('Добавте фільтр') // these constraints are shown if and only if inner constraints are satisfied
  // .min(3, 'Мінімальна кількість фільтрів - 3'),
});

export default filterSchema;
