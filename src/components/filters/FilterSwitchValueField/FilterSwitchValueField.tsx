import * as React from 'react';
import { TYPE_BOOLEAN, TYPE_DATE, TYPE_ENUM, TYPE_NUMBER, TYPE_SOURCE, TYPE_STRING } from '../../../const/filters-const';
import AppReactSelectPaginateControl from '../../ui/controls/AppReactSelectPaginateControl';
import AppReactSelectControl from '../../ui/controls/AppReactSelectControl';
import { FilterType, LoadOptionsType, ReactSelectOption } from '../../../types/filter';
import AppSwitcher from '../../ui/controls/AppSwitcher';

export interface FilterSwitchValueFieldProps {
  type: FilterType;
  name: string;
  valueOptions: Array<ReactSelectOption> | null | boolean;
  loadOptions: LoadOptionsType;
  classNamePrefix?: string;
}

const FilterSwitchValueField: React.FC<FilterSwitchValueFieldProps> = ({
  type,
  name,
  valueOptions,
  loadOptions,
  classNamePrefix,
  ...rest
}) => {
  switch (type) {
    case TYPE_SOURCE:
      return (
        <AppReactSelectPaginateControl
          name={name}
          isMulti
          loadOptions={loadOptions}
          classNamePrefix={classNamePrefix}
          placeholder=""
          {...rest}
        />
      );
    case TYPE_BOOLEAN:
      return <AppSwitcher name={name} placeholder="" />;
    case TYPE_STRING || TYPE_DATE || TYPE_ENUM || TYPE_NUMBER:
      return <AppReactSelectControl name={name} isMulti classNamePrefix={classNamePrefix} placeholder="" {...rest} />;
    case TYPE_ENUM:
      return (
        <AppReactSelectControl
          name={name}
          options={valueOptions}
          isMulti
          classNamePrefix={classNamePrefix}
          placeholder=""
          {...rest}
        />
      );
    default:
      return <AppReactSelectControl name={name} isMulti classNamePrefix={classNamePrefix} placeholder="" {...rest} />;
  }
};

export default FilterSwitchValueField;
