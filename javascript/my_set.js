class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {
    if (typeof(iterable) == "string" ||
      Array.isArray(iterable) ||
      iterable === undefined) {
      this.data = {};
    } else {
      throw new Error ("Need to be a string, array or nothing")
    }

    //copy from solution
    if (iterable) {
      for (const el of iterable) {
        this.data[el] = true;
      }
    }
  }

  

  // return number of elements in MySet
  size() {
    return Object.keys(this.data).length
  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    if (!Object.keys(this.data).includes(item)) {
      this.data[item] = true
    }
    return this
    // this is refer to the instance itself (not this.data)

  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if (Object.keys(this.data).includes(item)) {
      delete this.data[item]
      return true
    } else {
      return false
    }
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    return Object.keys(this.data).includes(item)

  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    return Object.keys(this.data)

  }
}

if (require.main === module) {
  // add your own tests in here
  my_set = new MySet('cooowwmoo')
  my_set.add('caaaat')
  console.log(my_set)
  console.log(my_set.size())
  console.log(my_set.delete('cat'))
  console.log(my_set.delete('caaaat'))
  console.log(my_set)
  console.log(my_set.has("caaaat"))
  console.log(my_set.has('c'))
  console.log(my_set.entries())

}

module.exports = MySet;

