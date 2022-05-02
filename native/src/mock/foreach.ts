function forEach(items: number[], callback: (item: number) => number) {
  for (let index = 0; index < items.length; index++) {
    return callback(items[index]);
  }
}

module.exports = forEach;
