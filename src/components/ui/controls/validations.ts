import * as Yup from 'yup';

const filterSchema = Yup.object().shape({
  filters: Yup.array().of(
    Yup.object().shape({
      // filterType: Yup.string().required(),
      id: Yup.object()
        .shape({
          label: Yup.string().required('Це поле є обовязковим для заповнення'),
          value: Yup.string().required('Це поле є обовязковим для заповнення'),
        })
        .nullable()
        .required('Це поле є обовязковим для заповнення'),
      values: Yup.array()
        .of(
          Yup.object().shape({
            label: Yup.string().required('Це поле є обовязковим для заповнення'),
            value: Yup.string().required('Це поле є обовязковим для заповнення'),
          })
        )
        .nullable()
        .min(1, 'Це поле є обовязковим для заповнення')
        .required('Це поле є обовязковим для заповнення'), // these constraints take precedence
      operator: Yup.string().nullable().required('Це поле є обовязковим для заповнення'), // these constraints take precedence
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
export default filterSchema;
