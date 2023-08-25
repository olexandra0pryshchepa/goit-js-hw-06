const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const array = [];
ingredients.forEach(ingredient => {
  const ingredientsItems = document.createElement("li");
  ingredientsItems.textContent = ingredient;
  ingredientsItems.classList.add("item");
  array.push(ingredientsItems);
});
ingredientsList.append(...array);
