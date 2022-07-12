import * as Yup from 'yup';
import { FilterType, ReactSelectOption } from '../../../types/filter';

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
          is: (object: { type: FilterType }) => object.type === 'number',
          then: Yup.array()
            .transform((value: Array<ReactSelectOption>) => arrayOfObjectsToArrayOfStrings(value))
            .of(Yup.number().typeError(messages.number))
            .required(messages.required),
        })
        .when('id', {
          is: (object: { type: FilterType }) => object.type === 'date',
          then: Yup.array()
            .transform((value: Array<ReactSelectOption>) => arrayOfObjectsToArrayOfStrings(value))
            .of(Yup.date().typeError(messages.date))
            .required(messages.required),
        })
        .when('id', {
          is: (object: { type: FilterType }) => object.type !== 'date' && object.type !== 'number',
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
// Yup.object().when('filterType', {
//   is: 'number',
//   then: Yup.object().shape({
//     label: Yup.string().required('Це поле є обовязковим для заповнення 1'),
//     value: Yup.string().required('Це поле є обовязковим для заповнення 1'),
//   }),
// })

// .transform(function (value, originalvalue) {
//   return value?.map((item) => item.value);
// })
// .of(
//   Yup.number().typeError('Поле повинно бути числом')
// Yup.object().when(
//   'id',
//   {
//     is: (d) => {
//       console.log(d);
//       return d;
//     },
//     then: Yup.number().typeError('Поле повинно бути числом'),
//   }
// {
//   is: 'number',
//   then: Yup.number().typeError('Поле повинно бути числом'),
//   otherwise: Yup.string().typeError('Поле повинно бути строкоюю'),
// }
// )
// )
// .required('Поле є обовязковим'),
// values: Yup.array()
//   .of(
//     Yup.mixed()
//       // .shape({
//       //   label: Yup.string().required('Це поле є обовязковим для заповнення'),
//       //   value: Yup.string().required('Це поле є обовязковим для заповнення'),
//       // })
//       .transform(function (value, originalvalue) {
//         // this.isValid()
//
//         console.log(value);
//
//         return Yup.number(value.label).required('asdasda asda asd s sad sad s')
//         // return this.isType(value.label) && value.label !== null ? value : '';
//       }).required('asdasda asd asd')
//   ),
// .nullable()
// .min(1, 'Це поле є обовязковим для заповнення')
// .required('Це поле є обовязковим для заповнення'), // these constraints take precedence
export default filterSchema;
