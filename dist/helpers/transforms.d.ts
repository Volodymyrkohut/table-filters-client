import { FilterResponseItem, FilterTransformedItem, InitialUILParseData, InitialValues } from '../types/filter';
export declare const fillSavedFilterRowWithExtraData: (initialSavedFilters: InitialUILParseData, filtersData: Array<FilterTransformedItem>) => InitialValues;
export declare const transformResponseFilters: (filters: Array<FilterResponseItem>) => Array<FilterTransformedItem>;
export declare const transformWithoutUselessData: (formikData: InitialValues) => InitialUILParseData;
