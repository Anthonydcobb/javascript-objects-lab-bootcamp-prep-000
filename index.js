var recipes = {};

var updateObjectWithKeyAndValue = (object, key, value) => {
  var newObject = Object.assign(object, {[key]: value})
  return newObject;
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object
}
