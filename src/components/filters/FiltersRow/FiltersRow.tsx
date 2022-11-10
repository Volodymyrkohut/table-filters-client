import * as React from 'react';
import { FilterResponseItem, FilterType, LoadOptionsType, ReactSelectOption } from '../../../types/filter';
import FilterSwitchValueField from '../FilterSwitchValueField/FilterSwitchValueField';
import AppReactSelectControl from '../../ui/controls/AppReactSelectControl';
import RemoveButton from '../../ui/buttons/RemoveButton/RemoveButton';

export interface IFiltersRow {
  loadOptions: LoadOptionsType;
  onRemove: (index: number) => void;
  onChangeField: (value: any) => void;
  index: number;
  filterType: FilterType;
  options: {
    fields: Array<FilterResponseItem>;
    operators: Array<string>;
    values: Array<ReactSelectOption> | boolean | null;
  };
  RemoveFilterButton?: React.FC;
}

const FiltersRow: React.FC<IFiltersRow> = (props) => {
  const { loadOptions, filterType, onRemove, onChangeField, index, options, RemoveFilterButton } = props;

  function operatorTransform(o = []) {
    const items = o.map((item) => ({ label: item, value: item }));

    return items;
  }

  return (
    <div className="filter-row">
      <div className="filter-row__field filter-row__field__id">
        <AppReactSelectControl
          classNamePrefix="select-id"
          name={`filters[${index}].id`}
          options={options.fields}
          getOptionLabel={(option: FilterResponseItem) => option.caption}
          getOptionValue={(option: FilterResponseItem) => String(option.id)}
          onChange={onChangeField}
        />
      </div>
      <div className="filter-row__field filter-row__field__operator">
        <AppReactSelectControl
          classNamePrefix="select-id"
          name={`filters[${index}].operator`}
          options={operatorTransform(options?.operators)}
          onChange={onChangeField}
        />
      </div>
      <div className="filter-row__field filter-row__field__values">
        <FilterSwitchValueField
          classNamePrefix="select-values"
          name={`filters[${index}].values`}
          getOptionLabel={(option: ReactSelectOption) => option.name}
          getOptionValue={(option: ReactSelectOption) => String(option.id)}
          type={filterType}
          valueOptions={options.values}
          loadOptions={loadOptions}
        />
      </div>

      <div className="filter-row__field filter-row__remove" onClick={() => onRemove(index)}>
        {RemoveFilterButton ? <RemoveFilterButton /> : <RemoveButton />}
      </div>
    </div>
  );
};
export default FiltersRow;
