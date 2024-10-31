class SortedList {
  constructor(items = []) {
    this.items = items 
    this.length = this.items.length;
    
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;6
  }

   get(pos) {
    if (pos < 0 || pos >= this.items.length) {
      throw new Error("OutOfBounds");
    }else{
  
      return this.items[pos]
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}


module.exports = SortedList;
