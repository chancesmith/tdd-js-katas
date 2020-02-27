// Kata: Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder = function(iterable) {
  // iterable can be a string or an array
  const itersSplit = Array.isArray(iterable) ? iterable : iterable.split("");

  let noDupes = [];

  for (let i = 0; i < itersSplit.length; i++) {
    const curr = itersSplit[i];

    if (i === 0) noDupes.push(curr);
    else {
      const prev = itersSplit[i - 1];

      if (curr !== prev) noDupes.push(curr);
    }
  }

  return noDupes;
};

module.exports = {
  uniqueInOrder
};
