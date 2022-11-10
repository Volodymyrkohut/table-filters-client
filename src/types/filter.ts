import { AsyncPaginateProps, LoadOptions } from 'react-select-async-paginate';
import { TYPE_BOOLEAN, TYPE_DATE, TYPE_ENUM, TYPE_NUMBER, TYPE_SOURCE, TYPE_STRING } from '../const/filters-const';

export type FilterType =
  | typeof TYPE_NUMBER
  | typeof TYPE_STRING
  | typeof TYPE_BOOLEAN
  | typeof TYPE_DATE
  | typeof TYPE_ENUM
  | typeof TYPE_SOURCE;

export type Operators = '<' | '<=' | '>' | '>=' | '=' | '!=' | string;
export type ReactSelectOption = { id: string; name: string };
export type OperatorOptions = Array<{ value: Operators; label: Operators }>;

export interface Additional {
  page: number;
}

export interface FilterResponseItem {
  caption: string;
  id: number;
  values: null | Array<{ id: number; name: string }>;
  operators: Array<Operators>;
  type: FilterType;
}

// from store as search params or localstorage
export interface InitialFilterValues {
  filters: Array<{
    id: { id: string; caption: string };
    values: Array<ReactSelectOption> | boolean | null;
    operator: Operators;
  }>;
}

// with extra info
export interface InitialFilterValuePopulated {
  id: FilterResponseItem;
  values: Array<ReactSelectOption> | boolean | null;
  operator: Operators;
}

// for formik functionality
export interface InitialValues {
  filters: Array<InitialFilterValuePopulated>;
}

// react-select paginate types
interface GroupBase<Option> {
  readonly options: readonly Option[];
  readonly label?: string;
}

type Base = GroupBase<ReactSelectOption>;
export type AsyncPaginateType = AsyncPaginateProps<ReactSelectOption, Base, Additional, boolean>;

export type LoadOptionsType = LoadOptions<ReactSelectOption, Base, Additional>;

// validation messages
export interface ValidationMessage {
  required: string;
  date: string;
  string: string;
  number: string;
}
