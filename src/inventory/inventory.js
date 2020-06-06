import barbells from "./barbells_inventory";
import plates from "./plates_inventory";
import bodyweight from "./bodyweight_inventory";
import aerobic from "./agility_aerobic_inventory";
import collars from "./collars_inventory";
import outfitting from "./outfitting_inventory";
import jumpBoxes from "./jumpBoxes_inventory";
import kettlebells from "./kettlebell_inventory";
import mobility from "./mobility_inventory";
import strengthEquipment from "./strengthEquipment_inventory";
import weightliftingGear from "./weightliftingGear_inventory";

const products = [
  ...barbells,
  ...plates,
  ...bodyweight,
  ...aerobic,
  ...collars,
  ...outfitting,
  ...jumpBoxes,
  ...kettlebells,
  ...mobility,
  ...strengthEquipment,
  ...weightliftingGear,
];

export function getProducts(category) {
  return products.filter((product) => product.categories === category);
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}

export function getAllProducts() {
  return products;
}

export function getSubsetProduct(categoryId, productId) {
  const category = products.find((product) => product.id === categoryId).data;
  return category.find((product) => product.id === productId);
}

export function searchProducts(searchValue) {
  const regex = new RegExp(searchValue.replace(/"/g, ""), "i");
  return products.filter((product) => regex.test(product.name));
}
