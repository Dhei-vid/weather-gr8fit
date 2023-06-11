type dataURLType = string;

export const getData = async <T>(url: dataURLType): Promise<T> => {
  const data = await fetch(url);

  const response = await data.json();

  return response;
};
