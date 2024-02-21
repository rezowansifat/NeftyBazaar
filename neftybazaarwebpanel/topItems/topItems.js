export const getTopItems = (items) => {
  const topItems = [];

  const groupedItems = items.reduce((index, currentItem) => {
    (index[currentItem.tokenId] = index[currentItem.tokenId] || []).push(
      currentItem
    );
    return index;
  }, {});

  Object.entries(groupedItems).forEach(([tokenId, itemList]) => {
    const totalEarnings = itemList.reduce(
      (total, item) => total + parseFloat(item.price),
      0
    );
    topItems.push({
      tokenId: parseInt(tokenId),
      totalEarnings,
      item: itemList[0],
    });
  });

  topItems.sort((a, b) => b.totalEarnings - a.totalEarnings);

  return topItems.slice(0, 7);
};
