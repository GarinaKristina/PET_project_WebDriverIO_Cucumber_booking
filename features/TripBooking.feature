Feature: Booking the trip

# Background: 
#     Given Open www.booking.com website
#     When Click on "accept" button
#     Then Check the title contains "Booking.com"

  Scenario: As a user, I can fill the fields and see list with hotels

    Given Open www.booking.com website
    When Click on "Accept cookie" button
    Then Check the title contains "Booking.com"
    When Type "Barcelona" in "Where you want to move" field