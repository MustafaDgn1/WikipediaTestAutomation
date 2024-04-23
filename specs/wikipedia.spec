# Specification Heading

This is an executable specification file. This file follows markdown syntax.
Every heading in this file denotes a scenario. Every bulleted point denotes a step.

To execute this specification, run

    gauge specs

## LGN01 Scenario: Logging in to Wikipedia with a valid email address and password.

* Open "https://en.wikipedia.org/wiki/Main_Page" Page
* Click navbar Log in button
* Enter username "MustafaDgn"
* Enter password "Deneme1234"
* Click Log in button
* Verifying homepage loading after login

## Scenario: Searching for 'Mustafa Kemal Atatürk' on Wikipedia and setting the language option to Turkish.

* Open "https://en.wikipedia.org/wiki/Main_Page" Page
* Click on the search bar and typing "Mustafa Kemal Ataturk"
* Click on the search button
* Verifying the Atatürk search results
* Clicking on the languages button
* Selecting Turkish language
* Verify Turkish language selection