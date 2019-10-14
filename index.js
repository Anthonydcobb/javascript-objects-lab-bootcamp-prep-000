var recipes = {};

var updateObjectWithKeyAndValue = (object, key, value) => {
  var object = Object.assign({}, {[key]: value})
  return object;
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object
}

var deleteFromObjectByKey = (object, key) => {
  var newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}

var destructivelyDeleteFromObjectByKey = (object, key) => {
  delete object[key]
  return object
}
