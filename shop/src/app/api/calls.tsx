export interface objectOfApi {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export const getAllElements = async (): Promise<objectOfApi[]> => {
  const call = await fetch("https://fakestoreapi.com/products");
  const jsonFile = call.json();

  return jsonFile;
};

export const getAllElementsOfCategorie = async (categorie: string): Promise<objectOfApi[]> => {
  const call = await fetch(
    `https://fakestoreapi.com/products/category/${categorie}`
  );
  const jsonFile = call.json();

  return jsonFile;
};
