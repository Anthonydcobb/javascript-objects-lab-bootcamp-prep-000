var recipes = {};

var updateObjectWithKeyAndValue = (object, key, value) => {
  var newObject = Object.assign(newObject, {[key]: value})
  return newObject;
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object
}

var deleteFromObjectByKey = (object, key) => {
  var newObj = Object.assign(newObj, object)
  delete newObj[key]
  return newObj
}
