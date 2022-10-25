const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Jared", "544354", "jared@gmail.com", "spmfd");

// So, for example, testing that you can correctly instantiate from the class Employee would look like so:
it("Should create an instance of the class Employee", () => {
  // Act
  const newEmp = new Employee();
  // Assert
  expect(typeof newEmp).toEqual("object");
});

// Testing that you can correctly set, for example, the name property, of an employee instance would look like so:
it("Should set name via constructor arguments", () => {
  // Arrange
  const testValue = "Riwa";
  // Act
  const newEmp = new Employee(testValue);
  // Assert
  expect(newEmp.name).toEqual(testValue);
});

// Testing, for example, that you can get the correct output from the getName() method of an employee instance would look like so:
it("Should get name via getName()", () => {
  // Arrange
  const testValue = "Riwa";
  const newEmp = new Employee(testValue);
  // Act
  const empName = newEmp.getName();
  // Assert
  expect(empName).toEqual(testValue);
});
