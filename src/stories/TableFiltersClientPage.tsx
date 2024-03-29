import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TableFiltersClient } from '../components';
import { InitialFilterValues, FilterResponseItem } from '../types/filter';
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

interface RequestOptions {
  headers: {
    Authorization: string;
  };
}
const requestOptions: RequestOptions = {
  headers: {
    Authorization:
      'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmRldi5icm9udWkuY29tXC9leHRyYW5ldFwvYXV0aFwvbG9naW4iLCJpYXQiOjE2ODE4MjYzNzMsImV4cCI6MTcxMzM2MjM3MywibmJmIjoxNjgxODI2MzczLCJqdGkiOiJmeEJqQWN0Zk9FdWxSRTBHIiwic3ViIjoxLCJwcnYiOiI2NDNkOGEwNGY0ZDI2ZjUyNTlmMDI4MjkzNjM4NDk1NzEyNzA0OThmIn0.KHLcYucKvtqwBBhgcDf_jpyhP-3oRD9A5tpH5Qm3DgE',
  },
};
// const queryString = '?filters%5B0%5D%5Bvalues%5D=true&filters%5B0%5D%5Boperator%5D%5Blabel%5D=%21%3D&filters%5B0%5D%5Boperator%5D%5Bvalue%5D=%21%3D&filters%5B0%5D%5Bid%5D%5Bcaption%5D=%D0%90%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%B8%D0%B9&filters%5B0%5D%5Bid%5D%5Bid%5D=15&filters%5B1%5D%5Bvalues%5D=false&filters%5B1%5D%5Boperator%5D%5Blabel%5D=%3D&filters%5B1%5D%5Boperator%5D%5Bvalue%5D=%3D&filters%5B1%5D%5Bid%5D%5Bcaption%5D=%D0%90%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%B8%D0%B9&filters%5B1%5D%5Bid%5D%5Bid%5D=15&filters%5B2%5D%5Boperator%5D%5Blabel%5D=%21%3D&filters%5B2%5D%5Boperator%5D%5Bvalue%5D=%21%3D&filters%5B2%5D%5Bvalues%5D%5B0%5D%5Bid%5D=4&filters%5B2%5D%5Bvalues%5D%5B0%5D%5Bname%5D=%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D1%96%D1%8F%204&filters%5B2%5D%5Bvalues%5D%5B1%5D%5Bid%5D=6&filters%5B2%5D%5Bvalues%5D%5B1%5D%5Bname%5D=comp%206&filters%5B2%5D%5Bid%5D%5Bcaption%5D=%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D1%96%D1%8F&filters%5B2%5D%5Bid%5D%5Bid%5D=14&filters%5B3%5D%5Boperator%5D%5Blabel%5D=%21%3D&filters%5B3%5D%5Boperator%5D%5Bvalue%5D=%21%3D&filters%5B3%5D%5Bvalues%5D%5B0%5D%5Bid%5D=1&filters%5B3%5D%5Bvalues%5D%5B0%5D%5Bname%5D=Koch-Bradtke%20Hotel-84542&filters%5B3%5D%5Bvalues%5D%5B1%5D%5Bid%5D=16&filters%5B3%5D%5Bvalues%5D%5B1%5D%5Bname%5D=Hackett-Hackett%20Hotel-26858&filters%5B3%5D%5Bid%5D%5Bcaption%5D=%D0%93%D0%BE%D1%82%D0%B5%D0%BB%D1%8C&filters%5B3%5D%5Bid%5D%5Bid%5D=13'
const queryString = ''
const FiltersTablePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filters, setFilters] = useState<Array<FilterResponseItem>>([]);

  const onLoadSourceOptions = (filterId: string): any => {
    return async (inputValue: any, prevOptions: any, additional = { page: 1 }) => {
      const response = await fetch(
        `https://api.dev.bronui.com/extranet/hotels/nadiya-hotel/filters/${filterId}/source-data?query=${inputValue}&page=${additional.page}`,
        requestOptions
      );

      const data: ResponseSource = await response.json();

      return {
        options: data.data,
        hasMore: data.meta.loadMore,
        additional: {
          page: additional.page + 1,
        },
      };
    };
  };

  useEffect(() => {
    // @ts
    fetch('https://api.dev.bronui.com/extranet/hotels/nadiya-hotel/reservations', requestOptions)
      .then((response) => response.json())
      .then((data: Response) => {
        setFilters(data.meta.filters);
      });
  }, []);

  // receive filters from url
  const initialFilters = parseUrl<InitialFilterValues>(queryString.slice(1));

  // save filters to url
  const submitForm = (data: InitialFilterValues) => {
    navigate(`?${stringifyUrl(data)}`);
  };

  return (
    <TableFiltersClient
      onAddFilter={() => {
        /* do something after new filter has been added */
      }}
      onRemoveFilter={() => {
        /* do something after some filter has been deleted */
      }}
      // @ts-ignore
      onLoadSourceOptions={onLoadSourceOptions}
      onSubmitFilterForm={submitForm} /*  after submit */
      initialFilters={initialFilters} /* from url or localstorage */
      filtersTypesList={filters} /* list from server */
      idLabelText="Field"
      operatorLabelText="Operator"
      valuesLabelText="Values"
      addFilterButtonText="+ Add filter"
      submitFilterButtonText="Apply"
      // RemoveFilterButton={() => <button type="button">Remove this</button>}
      AddFilterButton={() => <button type="button">Add Filter</button>}
      SaveFilterButton={() => <button type="submit">Save Filter</button>}
      validationMessages={{
        required: 'Required',
        date: 'Should be date',
        string: 'should be string',
        number: 'should be number',
      }}
    />
  );
};

export default FiltersTablePage;
