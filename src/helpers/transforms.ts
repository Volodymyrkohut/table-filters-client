// transform data for formik
import { FilterResponseItem, FilterTransformedItem, InitialUILParseData, InitialValues } from '../types/filter';

export const fillSavedFilterRowWithExtraData = (
  initialSavedFilters: InitialUILParseData,
  filtersData: Array<FilterTransformedItem>
): InitialValues => {
  const inputFilterItems = initialSavedFilters.filters?.length
    ? initialSavedFilters.filters.map((initial) => {
      const row = filtersData.find((item) => initial.id.value === item.value);

      return {
        values: initial.values, // || [],
        operator: initial.operator,
        id: row as FilterTransformedItem,
      };
    })
    : [];

  return {
    filters: inputFilterItems,
  };
};

export const transformResponseFilters = (filters: Array<FilterResponseItem>): Array<FilterTransformedItem> => {
  return filters.map((item) => {
    const { caption, id, values, operators, ...rest } = item;

    // якщо існує масив тоді робимо для нього потрібний формат для зручнішої роботи з react-select
    let transformedValue;
    if (Array.isArray(values)) {
      transformedValue = values.map((val) => {
        return {
          label: val.name,
          value: String(val.id),
        };
      });
    } else {
      transformedValue = values;
    }

    // для зручної роботи з select (formik control wrapper)
    const transformedOperators = operators.map((operator: string) => ({ key: operator, value: operator }));

    return {
      label: caption,
      value: String(id),
      values: transformedValue,
      operators: [{ key: 'Виберіть оператор', value: '' }, ...transformedOperators],
      ...rest,
    };
  }) as Array<FilterTransformedItem>;
};