Feature: Posobolity open the website

  Scenario: As a user, I can open the website and see the main page

    Given Open www.booking.com website
    When Click on "Accept cookie" button
    Then Check the title contains "Booking.com"