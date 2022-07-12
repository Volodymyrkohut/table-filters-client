# table-filters-client

table-filters-client is React.js library for responsive filtering tables

Here you could find server part of these filters, by AND48
https://github.com/AND48/table-filters

## Installation

```bash
 yarn add table-filters-client
```

or

```bash
 npm install table-filters-client
```

## Usage

```typescript jsx
import { TableFiltersClient, FilterResponseItem, InitialUILParseData } from 'table-filters-client';
import { stringifyUrl, parseUrl } from './helpers';

interface Response {
  meta: {
    filters: Array<FilterResponseItem>;
    data: Array<any>;
  };
}

interface ResponseSource {
  data: Array<{
    id: number;
    name: string;
  }>;
  meta: {
    loadMore: boolean;
  };
}

const FiltersTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filters, setFilters] = useState<Array<FilterResponseItem>>([]);

  useEffect(() => {
    fetch('/reservation')
      .then((response) => response.json())
      .then((data: Response) => {
        setFilters(data.meta.filters);
      });
  }, []);

  // pagination and search when type === 'source'
  const onLoadSourceOptions = (filterId: string) => {
    return async (inputValue, prevOptions, { page }) => {
      const response = await fetch(`/filters/${filterId}/source-data?query=${inputValue}&page=${page}`);
      const data = await response.json();

      return {
        options: data.options, // [{ value, label }]
        hasMore: data.hasMore,
        additional: {
          page: page + 1,
        },
      };
    };
  };

  // receive filters from url
  const initialFilters = parseUrl<InitialUILParseData>(queryString.slice(1));


  const submitForm = (data: InitialUILParseData) => {
    // to send the filter to the server, you can use the transform for the data here
    
    // save filters to url
    navigate(`?${stringifyUrl(data)}`);
  };

  return (
    <TableFiltersClient
      onAddFilter={() => {
        /* do something after new filter will has added */
      }}
      onRemoveFilter={() => {
        /* do something after some filter will has deleted */
      }}
      onSubmitFilterForm={submitForm} /*  submit */
      initialFilters={initialFilters} /* from url or localstorage */
      filtersTypesList={filters} /* list from server */
      onLoadSourceOptions={onLoadSourceOptions}
      idLabelText="Field"
      operatorLabelText="Operator"
      valuesLabelText="Values"
      addFilterButtonText="+ Add filter"
      submitFilterButtonText="Apply"
    />
  );
};
```



if you use https://github.com/AND48/table-filters package

data.meta.filters in useEffect will return data as below

```javascript
[
  {
    caption: 'ID',
    id: 1,
    operators: ['<', '<=', '>', '>=', '=', '!='],
    type: 'number', // number, string, source, date, enum,
    values: null, // null or [{ id: '', name: '' }]
  },
];
```

if `type === 'enum'` then values will return array of objects  as below
```javascript
[
  { id: '1', name: 'Approved' },
  { id: '2', name: 'Reject' },
];
```

if `type === 'source'` then when click to 'values' select it would call `onLoadSourceOptions` where we would get array dynamically 


if `type === 'string' && type === 'number' && type === 'date'` we would get `null` and we will be able to fill in the field ourselves


`onSubmitFilterForm` return values as below. And `initialFilters` object looks the same
```javascript
{
  filters: [
    {
      id: {
        label: 'ID',
        value: '1',
      },
      values: [
        {
          value: '2022-08-10',
          label: '2022-08-10',
        },
        {
          label: 'Approved',
          value: '1',
        },
      ],
      operator: '=',
    },
  ];
}
```

you could save this data as query string or in localStorage
I use https://www.npmjs.com/package/qs package for save it

```./helper.ts```
```typescript
import { IParseOptions, IStringifyOptions, stringify, parse } from 'qs';

export const stringifyUrl = function <T>(obj: T, options?: IStringifyOptions): string {
  return stringify(obj, options);
};

export const parseUrl = function <R>(queryParams: string, options?: IParseOptions & { decoder?: never | undefined }): R {
  return parse(queryParams, options) as unknown as R;
};
```

## Contributing
