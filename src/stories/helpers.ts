import { IParseOptions, IStringifyOptions, stringify, parse } from 'qs';

export const stringifyUrl = function <T>(obj: T, options?: IStringifyOptions): string {
  return stringify(obj, options);
};

export const parseUrl = function <R>(queryParams: string, options?: IParseOptions & { decoder?: never | undefined }): R {
  return parse(queryParams, options) as unknown as R;
};
