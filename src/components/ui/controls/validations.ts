import * as Yup from 'yup';

const defaultValidationMessages = {
  required: 'Required',
  date: 'Should be valid date format',
  string: 'Should be valid string',
  number: 'Should be valid number',
};

export default function filterSchemaHOF(validationMessage = defaultValidationMessages) {
  return Yup.object().shape({
    filters: Yup.array().of(
      Yup.object().shape({
        id: Yup.object().nullable().required(validationMessage.required),
        values: Yup.lazy((values: any, params: any) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          const type = params && params.parent && params.parent.id && params.parent.id.type ? params.parent.id.type : '';
          console.log(values);
          if (type === 'number') {
            return Yup.array()
              .of(Yup.string().matches(/^[0-9]/, validationMessage.number))
              .required(validationMessage.required);
          }
          if (type === 'date') {
            return Yup.array()
              .of(
                Yup.string().matches(/(0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20)\d\d/, validationMessage.date)
              )
              .required(validationMessage.required);
          }
          if (type === 'boolean') {
            return Yup.boolean();
          }
          return Yup.array().of(Yup.string().typeError(validationMessage.string)).required(validationMessage.required);
        }),

        operator: Yup.object().nullable().required(validationMessage.required),
      })
    ),
  });
}
