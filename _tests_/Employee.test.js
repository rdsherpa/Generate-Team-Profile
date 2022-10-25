const { default: test } = require("node:test");
const Employee = require("../lib/Employee");
const employee = new Employee("Riwa", "543384", "sherpariwa@gmail.com");

test("test if we can get the constructor value for the employee object", () => {
  expect(employee.name).toBe("joelle");
  expect(employee.id).toBe("543384");
  expect(employee.email).toBe("sherpariwa@gmail.com");
});

test("test if we can get the name from the getName() method", () => {
  expect(employee.getName()).toBe("Riwa");
});

test("test if we can get the id from the getId() method", () => {
  expect(employee.getId()).toBe("543384");
});

test("test if we can get the email from the getEmail() method", () => {
  expect(employee.getEmail()).toBe("sherpariwa@gmail.com");
});

test("test if we can get the role from the getRole() method", () => {
  expect(employee.getRole()).toBe("Employee");
});
