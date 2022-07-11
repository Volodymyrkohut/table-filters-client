# table-filters-client

table-filters-client is React.js library for responsive filtering  tables

Here you could find server part of these filters, by AND48
https://github.com/AND48/table-filters

## Installation

```bash
 yarn install table-filters-client
```

or

```bash
 npm install table-filters-client
```

## Usage


```javascript
import {TableFiltersClient, FilterResponseItem, InitialUILParseData} from 'table-filters-client'

const FiltersTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filters, setFilters] = useState<Array<FilterResponseItem>>([]);

  useEffect(() => {
    fetch('/reservation')
      .then((response) => response.json())
      .then((data) => {
        setFilters(data.meta.filters);
      });
  }, []);

  const onLoadSourceOptions = (filterId: string) => {
    return async (inputValue, prevOptions, { page }) => {
      const response = await fetch(`/filters/${filterId}/source-data?query=${inputValue}&page=${page}`);
      const options = await response.json(); // [{ value, label }]
      const hasMore = transformed.length > prevOptions.length + 10;
      
      return {
        options,
        hasMore,
        additional: {
          page: page + 1,
        },
      };
    };
  };

  // receive filters from url
  const initialFilters = parseUrl<InitialUILParseData>(location.search.slice(1));

  // save filters to url
  const submitForm = (data: InitialUILParseData) => {
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
    />
  );
};
```

## Contributing
