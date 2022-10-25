const inquirer = require("inquirer");
const Manager = require("./Team-Profile/Manager");
const Engineer = require("./Team-Profile/Engineer");
const Intern = require("./Team-Profile/Intern");
const generateTeamProfile = require("./generate-team-profile");
const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "index.html");
const teamMembers = [];

const promptManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeId",
      message: "Enter your employee ID",
      validate: (employee) => {
        if (employeeId) {
          return true;
        } else {
          console.log("Please enter your employee ID!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter your eamil address!");
          return false;
        }
      },
    },
    {},
  ]);
};
