type QueryStringObj = {
  [key: string]: boolean | string | number | undefined | null;
};

const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error(`Invalid value type: ${typeof value}`);
  }
  return `${key}=${value}`;
};

export default function queryString(obj: QueryStringObj) {
  return Object.entries(obj).map(keyValueToString).join('&');
}
