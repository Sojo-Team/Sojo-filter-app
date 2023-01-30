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
  return arr;
};

export const getNamesFromA = (listA, listB) => {
  let arr = listA.filter((item) => !listB.includes(item));
  return arr;
};

export const getNamesFromB = (listA, listB) => {
  let arr = listB.filter((item) => !listA.includes(item));
  return arr;
};
