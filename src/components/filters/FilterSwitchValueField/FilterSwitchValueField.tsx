import * as React from 'react';
import { TYPE_BOOLEAN, TYPE_DATE, TYPE_ENUM, TYPE_NUMBER, TYPE_SOURCE, TYPE_STRING } from '../../../const/filters-const';
import AppReactSelectPaginateControl from '../../ui/controls/AppReactSelectPaginateControl';
import AppReactSelectControl from '../../ui/controls/AppReactSelectControl';
import { FilterType, LoadOptionsType, ReactSelectOption } from '../../../types/filter';

export interface FilterSwitchValueFieldProps {
  type: FilterType;
  name: string;
  valueOptions: Array<ReactSelectOption> | null;
  loadOptions: LoadOptionsType;
  classNamePrefix?: string;
}

const FilterSwitchValueField: React.FC<FilterSwitchValueFieldProps> = ({
  type,
  name,
  valueOptions,
  loadOptions,
  classNamePrefix,
}) => {
  switch (type) {
    case TYPE_SOURCE:
      return <AppReactSelectPaginateControl name={name} isMulti loadOptions={loadOptions} classNamePrefix={classNamePrefix} />;
    case TYPE_STRING || TYPE_BOOLEAN || TYPE_DATE || TYPE_ENUM || TYPE_NUMBER:
      return <AppReactSelectControl name={name} isMulti classNamePrefix={classNamePrefix} />;
    case TYPE_ENUM:
      return <AppReactSelectControl name={name} options={valueOptions} isMulti classNamePrefix={classNamePrefix} />;
    default:
      return <AppReactSelectControl name={name} isMulti classNamePrefix={classNamePrefix} />;
  }
};

export default FilterSwitchValueField;
