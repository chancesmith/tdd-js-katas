function getKthLargestElement(elements, kth) {
  return elements.sort((a, b) => b - a)[kth - 1];
}

module.exports = getKthLargestElement;
