export const getDuplicatingValues = (listA, listB) => {
  let arr = [];
  for (let i = 0; i < listA.length; i++) {
    listA[i] = listA[i].trim().toLowerCase();
    for (let j = 0; j < listB.length; j++) {
      listB[j] = listB[j].trim().toLowerCase();
      if (listA[i] === listB[j]) {
        arr.push(listA[i]);
      }
    }
  }
  return [...new Set(arr)];
};

export const getNamesFromA = (listA, listB) => {
  const newArrA = listA.map((item) => {
    return (item = item.trim().toLowerCase());
  });

  const newArrB = listB.map((item) => {
    return (item = item.trim().toLowerCase());
  });

  let arr = newArrA.filter((item) => !newArrB.includes(item));
  return arr;
};

export const getNamesFromB = (listA, listB) => {
  const newArrA = listA.map((item) => {
    return (item = item.trim().toLowerCase());
  });

  const newArrB = listB.map((item) => {
    return (item = item.trim().toLowerCase());
  });

  let arr = newArrB.filter((item) => !newArrA.includes(item));
  return arr;
};
