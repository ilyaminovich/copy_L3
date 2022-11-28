Feature: test with different input-types

  Scenario: Check main feature icons
    When Open Report Portal
    And Log In to RP as Admin
    Then Check that feature icons are present
      | feature    |
      | dashboard  |
      | launches   |
      | filters    |
    When Log Out

  Scenario: Verify that test run contains expected data
    When Open Report Portal
    And Log In to RP as Admin
    Then Verify that test run contains expected data {"testNumber": "1"}
    When Log Out

  Scenario: Get name of existed projects
    When Open Report Portal
    And Log In to RP as Admin
    Then Check that name of existed Projects are
    """
    hometask_project
    superadmin_personal
    """
    When Log Out

  Scenario: Create, update and remove dashboard via API
    Given Create dashboard via API {"description": "test_description", "name": "part", "share": true}
    Then Check that "part" dashboard is created
    Given Update "part" dashboard via API {"name": "changed_part"}
    Then Check that "changed_part" dashboard is created
    When Remove "changed_part" dashboard via API
    Then Check that "changed_part" dashboard is not created

  Scenario: Create, update and remove widget via API
    Given Create widget via API with "first" name
    Then Check that "first" widget is created
    Given Update "first" widget with "second" name via API
    Then Check that "second" widget is created
    Given Create dashboard via API {"description": "test_description", "name": "test_widgets_dashboard", "share": true}
    When Add "second" widget on "test_widgets_dashboard" dashboard
    Then Check that "second" widget is appeared on "test_widgets_dashboard" dashboard
    When Delete "second" widget on "test_widgets_dashboard" dashboard
    Then Check that "second" widget is not appeared on "test_widgets_dashboard" dashboard
    When Remove "test_widgets_dashboard" dashboard via API
