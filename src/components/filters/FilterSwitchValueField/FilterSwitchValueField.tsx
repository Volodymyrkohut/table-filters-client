import React, { FC } from 'react';
import { LoadOptions } from 'react-select-async-paginate';
import { TYPE_BOOLEAN, TYPE_DATE, TYPE_ENUM, TYPE_NUMBER, TYPE_SOURCE, TYPE_STRING } from '../../../const/filters-const';
import AppReactSelectPaginateControl from '../../ui/controls/AppReactSelectPaginateControl';
import AppReactSelectControl from '../../ui/controls/AppReactSelectControl';
import { FilterType } from '../../../types/filter';
import { IReactSelectOption } from '../FiltersRow/FiltersRow';

interface IFilterSwitchValueField {
  type: FilterType;
  name: string;
  valueOptions: Array<IReactSelectOption> | null;
  loadOptions: LoadOptions<any, any, any>;
}

const FilterSwitchValueField: FC<IFilterSwitchValueField> = ({ type, name, valueOptions, loadOptions }) => {
  switch (type) {
    case TYPE_SOURCE:
      return <AppReactSelectPaginateControl name={name} isMulti loadOptions={loadOptions} />;
    case TYPE_STRING || TYPE_BOOLEAN || TYPE_DATE || TYPE_ENUM || TYPE_NUMBER:
      return <AppReactSelectControl name={name} isMulti />;
    case TYPE_ENUM:
      return <AppReactSelectControl name={name} options={valueOptions} isMulti />;
    default:
      return <AppReactSelectControl name={name} isMulti />;
  }
};

export default FilterSwitchValueField;
