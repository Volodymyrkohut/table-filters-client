import * as Yup from 'yup';

const filterSchema = Yup.object().shape({
  filters: Yup.array().of(
    Yup.object().shape({
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

export default filterSchema;
