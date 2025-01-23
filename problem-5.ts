function getProperty<Obj, property extends keyof Obj>(
  obj: Obj,
  key: property
): Obj[property] {
  return obj[key];
}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
