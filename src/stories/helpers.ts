import { IParseOptions, IStringifyOptions, stringify, parse } from 'qs';

export const stringifyUrl = function <T>(obj: T, options?: IStringifyOptions): string {
  return stringify(obj, options);
};

export const parseUrl = function <R>(queryParams: string, options?: IParseOptions & { decoder?: never | undefined }): R {
  return parse(queryParams, {
    decoder(str, decoder, charset) {
      const keywords = {
        true: true,
        false: false,
        null: null,
        undefined,
      }

      if (str in keywords) {
        return keywords[str]
      }

      // utf-8
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
  }) as unknown as R;
};
