import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { TableFiltersClient, FilterResponseItem, LoadOptionsType, InitialUILParseData } from '../../dist';
import { TableFiltersClient } from '../components';
import { InitialFiltersWithoutExtraData, FilterResponseItem, LoadOptionsType } from '../types/filter';
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
      'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmRldi5icm9udWkuY29tXC9hZG1pblwvYXV0aFwvbG9naW4iLCJpYXQiOjE2Njc5MjUyMDIsImV4cCI6MTY5OTQ2MTIwMiwibmJmIjoxNjY3OTI1MjAyLCJqdGkiOiJlSzhNMm1LSjk0MWxhYlp3Iiwic3ViIjoxLCJwcnYiOiJhMjNiNTczZGM3M2E0MDdlOGRlNTNiNDg2ZjM2ODg2YWRmNzBjNDgzIn0.5a4jd1AMWBC-eQMLGSfVT_cXB4sJpHz0CCIofPzdjxg',
  },
};
const queryString = '?filters%5B0%5D%5Bvalues%5D%5B0%5D%5Bvalue%5D=1&filters%5B0%5D%5Bvalues%5D%5B0%5D%5Blabel%5D=Koch-Bradtke%20Hotel-84542&filters%5B0%5D%5Boperator%5D=%3D&filters%5B0%5D%5Bid%5D%5Blabel%5D=Готель&filters%5B0%5D%5Bid%5D%5Bvalue%5D=13&filters%5B1%5D%5Bvalues%5D%5B0%5D%5Bvalue%5D=5&filters%5B1%5D%5Bvalues%5D%5B0%5D%5Blabel%5D=comp%205&filters%5B1%5D%5Boperator%5D=%21%3D&filters%5B1%5D%5Bid%5D%5Blabel%5D=Компанія&filters%5B1%5D%5Bid%5D%5Bvalue%5D=14'
const FiltersTablePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [filters, setFilters] = useState<Array<FilterResponseItem>>([]);

  const onLoadSourceOptions = (filterId: string): LoadOptionsType => {
    return async (inputValue, prevOptions, additional = { page: 1 }) => {
      const response = await fetch(
        `https://api.dev.bronui.com/admin/filters/${filterId}/source-data?query=${inputValue}&page=${additional.page}`,
        requestOptions
      );

      const data: ResponseSource = await response.json();
      const options = data.data.map((item: { id: number; name: string }) => ({ value: String(item.id), label: item.name }));

      return {
        options,
        hasMore: data.meta.loadMore,
        additional: {
          page: additional.page + 1,
        },
      };
    };
  };

  useEffect(() => {
    fetch('https://api.dev.bronui.com/admin/hotels', requestOptions)
      .then((response) => response.json())
      .then((data: Response) => {
        setFilters(data.meta.filters);
      });
  }, []);

  // receive filters from url
  const initialFilters = parseUrl<InitialFiltersWithoutExtraData>(queryString.slice(1));

  // save filters to url
  const submitForm = (data: InitialFiltersWithoutExtraData) => {
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
      onLoadSourceOptions={onLoadSourceOptions}
      onSubmitFilterForm={submitForm} /*  after submit */
      initialFilters={initialFilters} /* from url or localstorage */
      filtersTypesList={filters} /* list from server */
      idLabelText="Field"
      operatorLabelText="Operator"
      valuesLabelText="Values"
      addFilterButtonText="+ Add filter"
      submitFilterButtonText="Apply"
      validationMessages={{
        required: 'required',
        date: 'Should be date',
        string: 'should be string',
        number: 'should be number',
      }}
    />
  );
};

export default FiltersTablePage;
