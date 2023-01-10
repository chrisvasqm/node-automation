Feature: API test
  As a developer
  I want to test the REST API
  So that I can ensure it is working correctly

  Scenario: Get name of character
    Given I send a "GET" request to "https://rickandmortyapi.com/api/character/2"
    Then the response status code should be 200
    And the character name should be "Morty Smith"
