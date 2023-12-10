function removeSpaces(str) {
  return str.replace(/\s/g, ""); // Remove all spaces
}

export function findCommonStrings(inputA, inputB) {
  // Get values from input fields

  // Split strings into arrays
  var arrayA = inputA.split("\n").map((str) => removeSpaces(str).toLowerCase());
  var arrayB = inputB.split("\n").map((str) => removeSpaces(str).toLowerCase());

  // Find common strings
  var commonStrings = arrayA.filter((value) => arrayB.includes(value));

  // Display result
  return commonStrings?.join("\n");
}

export function findOnlyInA(inputA, inputB) {
  // Get values from input fields
  // Remove spaces and split strings into arrays
  var arrayA = inputA.split("\n").map((str) => removeSpaces(str).toLowerCase());
  var arrayB = inputB.split("\n").map((str) => removeSpaces(str).toLowerCase());

  // Find unique strings in A
  var uniqueStringInA = arrayA.filter(
    (value) => !arrayB.includes(removeSpaces(value))
  );

  return uniqueStringInA?.join("\n");
}
export function findOnlyInB(inputA, inputB) {
  // Get values from input fields
  // Remove spaces and split strings into arrays
  var arrayA = inputA.split("\n").map((str) => removeSpaces(str).toLowerCase());
  var arrayB = inputB.split("\n").map((str) => removeSpaces(str).toLowerCase());

  // Find unique strings in A
  var uniqueStringInB = arrayB.filter(
    (value) => !arrayA.includes(removeSpaces(value))
  );

  return uniqueStringInB?.join("\n");
}
