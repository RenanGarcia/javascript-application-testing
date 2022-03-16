type QueryStringObj = {
  [key: string]: boolean | string | number | undefined | null;
};

export default function queryString(obj: QueryStringObj) {
  const entries = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
  return entries.join('&');
}
