//A hashTable class, in pseudoclassical style:

/*
var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index) {
    checkLimit(index);
    return storage[index];
  };

  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };
  limitedArray.each = function(callback) {
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

*/

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let arrayValue = this._storage.get(index);



  if (this._storage.get(index)) {
    let arrayValue = this._storage.get(index) // [k, v], [k, v]

    for (let i = 0; i < arrayValue.length; i++) {
      if (arrayValue[i][0] === k) {
        arrayValue[i][1] = v;
        return this._storage.set(index, arrayValue);
      }
    }

    arrayValue.push([k, v]); // [k,v]
    return this._storage.set(index, arrayValue);

  } else {
    return this._storage.set(index, [[k, v]]);
  }



  // this._storage.set(index, [k, v]);

  // this._storage.get(index);

  // this._storage.set(index, [temp, v]);

  // this._storage.get(index); // [k, v];



  // // check if index is not unique number (if current bucket is not empty)
  // if (this._storage.get(index) !== undefined) {
  //   let temp = this._storage.get(index); // old value // old key
  //   // if key === value
  //   if (k === v){
  //     this._storage.set(index, [temp, k]);
  //   } else {
  //     this._storage.set(index, v);
  //   }
  // } else {
  //   this._storage.set(index, v);
  // }
  //   // check if there's something already at the not unique index




  // return this._storage
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);


  let arrayValue = this._storage.get(index);

  for (let i = 0; i < arrayValue.length; i++) {
    if (arrayValue[i][0] === k) {
      return arrayValue[i][1];
    }
  }

  return undefined;



  // var index = getIndexBelowMaxForKey(k, this._limit);
  // let tempVal = this._storage.get(index);
  // if (Array.isArray(tempVal)) {
  //   for (var i = 0; i < tempVal.length; i++) {
  //     if (tempVal[i] === k) {
  //       return tempVal[i];
  //     }
  //   }
  // }
  // return tempVal;


};

HashTable.prototype.remove = function(k) {
  /*
  hashTable.insert('Steven', 'Tyler');
  hashTable.remove('Steven');
  expect(hashTable.retrieve('Steven')).to.equal(undefined);
  */
  var index = getIndexBelowMaxForKey(k, this._limit);
  let arrayValue = this._storage.get(index);

  for (let i = 0; i < arrayValue.length; i++) {
    if (arrayValue[i][0] === k) {
      arrayValue.splice(i, 1);

      return this._storage.set(index, arrayValue);
    }
  }

  /*
    var v1 = 'val1';
    var v2 = 'val2';
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    v1, v2
    expect(hashTable.retrieve(v1)).to.equal(v1);
    expect(hashTable.retrieve(v2)).to.equal(v2);
    window.getIndexBelowMaxForKey = oldHashFunction;

  */

  // var test = this._storage.get(index);
  // test = undefined;
  // return test;

  // console.log('test \t ', test);

  // this._storage.each(function(item) {
  //     if (item !== undefined) {
  //       this._storage.get(item);

  //     }
  //  });

};




/*
 * Complexity: What is the time complexity of the above functions?
 */


