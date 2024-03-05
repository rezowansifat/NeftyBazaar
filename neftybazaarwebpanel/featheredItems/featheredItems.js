export const getFeatheredItems = (items) => {
  const shuffledItems = shuffle(items);
  const featheredItems = shuffledItems.slice(0, 10);

  return featheredItems;
};

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
