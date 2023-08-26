const categoriesItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((element) => {
  const categoryName = element.firstElementChild.textContent;
  const itemsCount = element.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemsCount}`);
});
