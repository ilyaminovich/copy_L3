Feature: Login tests

  Scenario: Check Log in to RP Success test
    When Open Report Portal
    And Log In to RP as Admin
    Then Check that dashboards section is present
    When Log Out

  Scenario: Check Log out to RP Failed test
    When Open Report Portal
    And Log In to RP as Admin
    Then Check that filters section is present
