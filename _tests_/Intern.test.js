const { default: test } = require("node:test");
const Intern = require("../lib/Intern");
const intern = new Intern(
  "Riwa",
  "573983",
  "sherpariwa@gmail.com",
  "Los Angeles"
);

test("test if we can get the constructor values for the engineer object", () => {
  expect(intern.name).toBe("Riwa");
  expect(intern.id).toBe("573983");
  expect(intern.email).toBe("sherpariwa@gmail.com");
  expect(intern.school).toBe("Los Angeles");
});

test("test if we can get the name from the getName() method", () => {
  expect(intern.getId()).toBe("573983");
});

test("test if we can get the email from the getEmail() method", () => {
  expect(intern.getEmail()).toBe("sherpariwa@gmail.com");
});

test("test if we can get the school name from the getSchool() method", () => {
  expect(intern.getSchool()).toBe("Los Angeles");
});

test("test if we can get the role from the getRole() method", () => {
  expect(intern.getRole()).toBe("Intern");
});
