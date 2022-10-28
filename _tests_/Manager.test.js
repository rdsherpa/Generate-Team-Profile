const Manager = require("../lib/Manager");
const manager = new Manager("sherpa", "573983", "sherpariwa@gmail.com", "231");

test("test if we can get the constructor values for the manager object", () => {
  expect(manager.name).toBe("Riwa");
  expect(manager.id).toBe("573983");
  expect(manager.email).toBe("sherpariwa@gmail.com");
  expect(manager.officeNumber).toBe("2313");
});

test("test if we can grab name from getName()", () => {
  expect(manager.getName()).toBe("Riwa Sherpa");
});

test("test if we are able to grab Id from getId()", () => {
  expect(manager.getId()).toBe("28282");
});

test("test if were can grab email from getEmail()", () => {
  expect(manager.getofficeNumber()).toBe("18");
});

test("test if can grab role from getRole()", () => {
  expect(manager.getRole()).toBe("Manager");
});
