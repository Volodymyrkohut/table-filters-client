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
export type ReactSelectOption = { value: string; label: string };
export type OperatorOptions = Array<{ key: Operators; value: Operators }>;

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

// transformed for usage with select2
export interface FilterTransformedItem {
  value: string;
  label: string;
  values: null | Array<ReactSelectOption>;
  operators: OperatorOptions;
  type: FilterType;
}

// from url
export interface InitialUILParseData {
  filters: Array<{
    id: ReactSelectOption;
    values: Array<ReactSelectOption>;
    operator: Operators;
  }>;
}

// with extra info
export interface InitialValuesItem {
  id: FilterTransformedItem;
  values: Array<ReactSelectOption>;
  operator: Operators;
}

// for formik functionality
export interface InitialValues {
  filters: Array<InitialValuesItem>;
}

// react-select paginate types
interface GroupBase<Option> {
  readonly options: readonly Option[];
  readonly label?: string;
}

type Base = GroupBase<ReactSelectOption>;
export type AsyncPaginateType = AsyncPaginateProps<ReactSelectOption, Base, Additional, boolean>;

export type LoadOptionsType = LoadOptions<ReactSelectOption, Base, Additional>;
