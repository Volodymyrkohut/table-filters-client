import { AsyncPaginateProps, LoadOptions } from 'react-select-async-paginate';
import { TYPE_BOOLEAN, TYPE_DATE, TYPE_ENUM, TYPE_NUMBER, TYPE_SOURCE, TYPE_STRING } from '../const/filters-const';
export declare type FilterType = typeof TYPE_NUMBER | typeof TYPE_STRING | typeof TYPE_BOOLEAN | typeof TYPE_DATE | typeof TYPE_ENUM | typeof TYPE_SOURCE;
export declare type Operators = '<' | '<=' | '>' | '>=' | '=' | '!=' | string;
export declare type ReactSelectOption = {
    id: string;
    name: string;
};
export declare type OperatorOptions = Array<{
    value: Operators;
    label: Operators;
}>;
export interface Additional {
    page: number;
}
export interface FilterResponseItem {
    caption: string;
    id: number;
    values: null | {
        data: Array<ReactSelectOption>;
    };
    operators: Array<Operators>;
    type: FilterType;
}
export interface InitialFilterValues {
    filters: Array<{
        id: {
            id: string;
            caption: string;
        };
        values: Array<ReactSelectOption> | boolean | null;
        operator: Operators;
    }>;
}
export interface InitialFilterValuePopulated {
    id: FilterResponseItem;
    values: Array<ReactSelectOption> | boolean | null;
    operator: Operators;
}
export interface InitialValues {
    filters: Array<InitialFilterValuePopulated>;
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
