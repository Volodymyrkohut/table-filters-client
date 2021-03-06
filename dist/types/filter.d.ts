import { AsyncPaginateProps, LoadOptions } from 'react-select-async-paginate';
import { TYPE_BOOLEAN, TYPE_DATE, TYPE_ENUM, TYPE_NUMBER, TYPE_SOURCE, TYPE_STRING } from '../const/filters-const';
export declare type FilterType = typeof TYPE_NUMBER | typeof TYPE_STRING | typeof TYPE_BOOLEAN | typeof TYPE_DATE | typeof TYPE_ENUM | typeof TYPE_SOURCE;
export declare type Operators = '<' | '<=' | '>' | '>=' | '=' | '!=' | string;
export declare type ReactSelectOption = {
    value: string;
    label: string;
};
export declare type OperatorOptions = Array<{
    key: Operators;
    value: Operators;
}>;
export interface Additional {
    page: number;
}
export interface FilterResponseItem {
    caption: string;
    id: number;
    values: null | Array<{
        id: number;
        name: string;
    }>;
    operators: Array<Operators>;
    type: FilterType;
}
export interface FilterTransformedItem {
    value: string;
    label: string;
    values: null | Array<ReactSelectOption>;
    operators: OperatorOptions;
    type: FilterType;
}
export interface InitialFiltersWithoutExtraData {
    filters: Array<{
        id: ReactSelectOption;
        values: Array<ReactSelectOption>;
        operator: Operators;
    }>;
}
export interface InitialValuesItem {
    id: FilterTransformedItem;
    values: Array<ReactSelectOption>;
    operator: Operators;
}
export interface InitialValues {
    filters: Array<InitialValuesItem>;
}
interface GroupBase<Option> {
    readonly options: readonly Option[];
    readonly label?: string;
}
declare type Base = GroupBase<ReactSelectOption>;
export declare type AsyncPaginateType = AsyncPaginateProps<ReactSelectOption, Base, Additional, boolean>;
export declare type LoadOptionsType = LoadOptions<ReactSelectOption, Base, Additional>;
export interface ValidationMessage {
    required: string;
    date: string;
    string: string;
    number: string;
}
export {};
