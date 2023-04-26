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
    values: any;
  };
  RemoveFilterButton?: React.FC;
  fieldId: any;
}

const FiltersRow: React.FC<IFiltersRow> = (props) => {
  const { loadOptions, filterType, onRemove, onChangeField, index, options, RemoveFilterButton, fieldId } = props;

  function operatorTransform(o = []) {
    const items = o.map((item) => ({ name: item, id: item }));

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
          getOptionLabel={(option: ReactSelectOption) => option.name}
          getOptionValue={(option: ReactSelectOption) => String(option.id)}
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
          getNewOptionData={(inputValue: string, optionLabel: string) => {
            return {
              id: optionLabel,
              name: inputValue,
              __isNew__: true,
            };
          }}
          type={filterType}
          valueOptions={options.values}
          loadOptions={loadOptions}
          key={fieldId}
        />
      </div>

      <div className="filter-row__field filter-row__remove" onClick={() => onRemove(index)}>
        {RemoveFilterButton ? <RemoveFilterButton /> : <RemoveButton />}
      </div>
    </div>
  );
};
export default FiltersRow;
