function removeSpaces(str) {
  return str.replace(/\s/g, ""); // Remove all spaces
}

export function findCommonStrings(inputA, inputB) {
  // Get values from input fields

  // Split strings into arrays
  var arrayA = inputA.split("\n");
  var arrayB = inputB.split("\n");

  // Remove spaces and split strings into arrays
  // Remove spaces only when comparing
  var arrayAWithoutSpaces = arrayA.map((str) =>
    removeSpaces(str).toLowerCase()
  );
  var arrayBWithoutSpaces = arrayB.map((str) =>
    removeSpaces(str).toLowerCase()
  );

  // Find common strings
  var commonStringsWithoutSpaces = arrayAWithoutSpaces.filter((value) =>
    arrayBWithoutSpaces.includes(value)
  );

  // Display result

  // Display result
  return commonStringsWithoutSpaces
    .map((value) => {
      var originalIndex = arrayAWithoutSpaces.indexOf(value);
      return arrayA[originalIndex];
    })
    .join("\n");
}

export function findOnlyInA(inputA, inputB) {
  // Get values from input fields
  // Remove spaces and split strings into arrays

  // Split strings into arrays
  var arrayA = inputA.split("\n");
  var arrayB = inputB.split("\n");

  // Remove spaces only when comparing
  var arrayAWithoutSpaces = arrayA.map((str) =>
    removeSpaces(str).toLowerCase()
  );
  var arrayBWithoutSpaces = arrayB.map((str) =>
    removeSpaces(str).toLowerCase()
  );

  // Find unique in A
  var onlyInA = arrayAWithoutSpaces.filter(
    (value) => !arrayBWithoutSpaces.includes(value)
  );

  // Display result with original formatting
  return onlyInA
    ?.map((value) => arrayA[arrayAWithoutSpaces.indexOf(value)])
    .join("\n");
}
export function findOnlyInB(inputA, inputB) {
  // Get values from input fields
  // Remove spaces and split strings into arrays
  var arrayA = inputA.split("\n");
  var arrayB = inputB.split("\n");

  // Remove spaces only when comparing
  var arrayAWithoutSpaces = arrayA.map((str) =>
    removeSpaces(str).toLowerCase()
  );
  var arrayBWithoutSpaces = arrayB.map((str) =>
    removeSpaces(str).toLowerCase()
  );
  var onlyInB = arrayBWithoutSpaces.filter(
    (value) => !arrayAWithoutSpaces.includes(value)
  );

  // Display result with original formatting
  return onlyInB
    ?.map((value) => arrayB[arrayBWithoutSpaces.indexOf(value)])
    .join("\n");
}
