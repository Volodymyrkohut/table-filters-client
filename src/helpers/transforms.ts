// transform data for formik
import { FilterResponseItem, InitialFilterValues, InitialValues } from '../types/filter';

export const fillSavedFilterRowWithExtraData = (
  initialSavedFilters: InitialFilterValues,
  filtersData: Array<FilterResponseItem>
): InitialValues => {
  const inputFilterItems = initialSavedFilters.filters?.length
    ? initialSavedFilters.filters.map((initial) => {
        const row = filtersData.find((item) => initial.id.id === String(item.id));

        return {
          id: row as unknown as FilterResponseItem,
          values: initial.values, // || [],
          operator: initial.operator,
        };
      })
    : [];

  return {
    filters: inputFilterItems,
  };
};

export const transformWithoutUselessData = (formikData: InitialValues): InitialFilterValues => {
  const forSerialization = formikData.filters.map((item) => {
    const { id, ...rest } = item;

    return {
      ...rest,
      id: {
        caption: id.caption,
        id: id.id,
      },
    };
  });

  return { filters: forSerialization };
};

// export const transformResponseFilters = (filters: Array<FilterResponseItem>): Array<FilterTransformedItem> => {
//   return filters.map((item) => {
//     const { caption, id, values, operators, ...rest } = item;
//
//     // якщо існує масив тоді робимо для нього потрібний формат для зручнішої роботи з react-select
//     let transformedValue;
//     if (Array.isArray(values)) {
//       transformedValue = values.map((val) => {
//         return {
//           label: val.name,
//           value: String(val.id),
//         };
//       });
//     } else {
//       transformedValue = values;
//     }
//
//     // для зручної роботи з select (formik control wrapper)
//     const transformedOperators = operators.map((operator: string) => ({ key: operator, value: operator }));
//
//     return {
//       label: caption,
//       value: String(id),
//       values: transformedValue,
//       operators: [{ key: '', value: '' }, ...transformedOperators],
//       ...rest,
//     };
//   }) as Array<FilterTransformedItem>;
// };


