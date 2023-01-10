const { Given, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");

Given("I send a {string} request to {string}", async (method, url) => {
  this.response = await fetch(url, { method: method });
  this.body = await this.response.json();
});

Then("the response status code should be {int}", status => {
  expect(this.response.status).to.be.equal(status);
});

Then("the character name should be {string}", name => {
  expect(this.body.name).to.be.equal(name);
});
