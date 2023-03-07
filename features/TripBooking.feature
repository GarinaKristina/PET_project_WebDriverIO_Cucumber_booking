Feature: Booking the trip

  Scenario: As a user, I can fill the fields and see list with hotels

    Given Open www.booking.com website
    When Click on "Accept cookie button" on "Main Page"
    Then Check the title contains "Booking.com"
    When Type "Барселона" on Main Page in "Where you want to move field"
    Then Check the title contains "Барселона"