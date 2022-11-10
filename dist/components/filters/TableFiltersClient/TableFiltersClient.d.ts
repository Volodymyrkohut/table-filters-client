import * as React from 'react';
import { FC } from "react";
import { FieldArrayRenderProps } from 'formik';
import { FilterResponseItem, InitialFiltersWithoutExtraData, LoadOptionsType, ValidationMessage } from '../../../types/filter';
import '../../../assets/index.scss';
export interface ITableFiltersClient {
    onLoadSourceOptions: (filterId: string) => LoadOptionsType;
    onSubmitFilterForm: (outputData: InitialFiltersWithoutExtraData) => void;
    onRemoveFilter?: (index: number) => void;
    onAddFilter?: (fieldArrayProps: FieldArrayRenderProps) => void;
    initialFilters: InitialFiltersWithoutExtraData;
    filtersTypesList: Array<FilterResponseItem>;
    addFilterButtonText?: string;
    submitFilterButtonText?: string;
    idLabelText?: string;
    operatorLabelText?: string;
    valuesLabelText?: string;
    validationMessages?: ValidationMessage;
    RemoveFilterButton?: FC;
    AddFilterButton?: FC;
    SaveFilterButton?: FC;
}
declare const TableFiltersClient: React.FC<ITableFiltersClient>;
export default TableFiltersClient;
