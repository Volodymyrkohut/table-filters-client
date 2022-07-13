import { FilterResponseItem, FilterTransformedItem, InitialFiltersWithoutExtraData, InitialValues } from '../types/filter';
export declare const fillSavedFilterRowWithExtraData: (initialSavedFilters: InitialFiltersWithoutExtraData, filtersData: Array<FilterTransformedItem>) => InitialValues;
export declare const transformResponseFilters: (filters: Array<FilterResponseItem>) => Array<FilterTransformedItem>;
export declare const transformWithoutUselessData: (formikData: InitialValues) => InitialFiltersWithoutExtraData;
