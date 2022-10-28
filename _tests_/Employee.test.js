const Employee = require("../lib/Employee");
const employee = new Employee("thomas", "92928", "thomsa@gmail.com"); // act
// test("Should create an instance of class Employee", () => {
//not sure if I need to use test or it?
// const employee = new Employee(); // act
// expect(typeof employee).toBe("object"); // expect used here is a "jest function", instead of
// });

test("test if we can get the constructor values for the employee object", () => {
  expect(employee.name).toBe("thomas");
  expect(employee.id).toBe("92928");
  expect(employee.email).toBe("thomas@gmail.com");
});

test("test if we can get the name from the getName() method", () => {
  expect(employee.getName()).toBe("thomas");
});

test("test if we can get the id from the getId() method", () => {
  expect(employee.getId()).toBe("92928");
});

test("test if we can get the email from the getEmail() method", () => {
  expect(employee.getEmail()).toBe("thomas@gmail.com");
});

test("test if we can get the role from the getRole() method", () => {
  expect(employee.getRole()).toBe("Employee");
});
