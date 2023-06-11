type dataURLType = string;

const getData = async <T>(url: dataURLType): Promise<T> => {
  const data = await fetch(url);

  const response = await data.json();

  return response;
};

export default getData;
