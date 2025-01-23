The significance of union and intersection types in Typescript.
#######################################################

union type = (|)

union type are use to as a condition way like there is a two type
string and number now when i use a function there is a one agrgument it will be
string or number then i use this union type .

function data(value: string | number) {
if (typeof value === "string") {
console.log(value);
} else {
console.log(value + 10);
}
}

#######################################################

Intersection (&)
Intersection use as a type add multiple type ..
like if i need a type string and number now i combine both and make a new
type .

type Person = { name: string };
type Employee = { phone: number };
type EmployeeDetails = Person & Employee;
const employee: EmployeeDetails = {
name: "zubair",
phone: 01924495997,
};

#######################################################
