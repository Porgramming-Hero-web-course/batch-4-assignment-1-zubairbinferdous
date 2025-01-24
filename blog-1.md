The significance of union and intersection types in Typescript.
#######################################################

union type = (|)

union type is a type create by multiple type , like you have a value it will be string and number.

function data(value: string | number) {
if (typeof value === "string") {
console.log(value);
} else {
console.log(value + 10);
}
}

in our function there have one parameter it will be string and number , so when you have use multi type you should use union type .

#######################################################

Intersection (&)
Intersection use as a type add multiple type together and use it..

type Person = { name: string };
type Employee = { phone: number };
type EmployeeDetails = Person & Employee;
const employee: EmployeeDetails = {
name: "zubair",
phone: 01924495997,
};

like have a type person and employee now i have to make another type by add both of 
this type it all intersection ..


#######################################################
