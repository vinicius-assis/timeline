export const getDateContent = (items, monthIndex) => {
  const result = items.filter(({ start }) => {
    const formattedDate = start.split("-")[2];
    const normalizeIndex = Number(formattedDate) - 1;
    return normalizeIndex === monthIndex;
  });
  return result;
};
