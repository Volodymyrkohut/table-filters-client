import { FilterResponseItem, InitialFilterValues, InitialValues } from '../types/filter';
export declare const fillSavedFilterRowWithExtraData: (initialSavedFilters: InitialFilterValues, filtersData: Array<FilterResponseItem>) => InitialValues;
export declare const transformWithoutUselessData: (formikData: InitialValues) => InitialFilterValues;
