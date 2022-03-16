type QueryStringObj = {
  [key: string]: boolean | string | number | undefined | null;
};

export default function queryString(obj: QueryStringObj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}
