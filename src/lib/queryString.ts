type QueryStringObj = {
  [key: string]: boolean | string | number | undefined | null;
};

const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error(`Invalid value type: ${typeof value}`);
  }
  return `${key}=${value}`;
};

export const queryString = (obj: QueryStringObj) => {
  return Object.entries(obj).map(keyValueToString).join('&');
};

export const parse = (qs: string): QueryStringObj => {
  const params = qs.split('&').map((item) => {
    const [key, value] = item.split('=');
    if (value.indexOf(',') > -1) {
      return [key, value.split(',')];
    } else {
      return [key, value];
    }
  });
  return Object.fromEntries(params);
};
