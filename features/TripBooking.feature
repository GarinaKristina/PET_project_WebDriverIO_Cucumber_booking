Feature: Booking the trip

  Scenario Outline: As a user, I can fill the fields and see list with hotels

    Given Open www.booking.com website
    When Click on "Accept cookie" button
    Then Check the title contains "Booking.com"
    When Type "<country>" in "Where you want to move" field
    And Click on "Submit" button
    Then Check the title contains "<country>"

    Examples:
    | country   |
    | Barcelona |
    | Lithuania |
    | Drezden   |