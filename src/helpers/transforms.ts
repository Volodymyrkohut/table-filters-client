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
          operator: initial.operator || null,
        };
      })
    : [];

  return {
    // @ts-ignore
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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return { filters: forSerialization };
};
