## Move Planner App
An app that takes a street address and city submitted by the user and returns New York Times articles and relevant Wikipedia links about the place. This project is an exercise part of the Udacity Frontend Developer track curriculum. To take the course, Intro to Ajax, click [here](http://www.udacity.com).

#### How to Use
1. This program will not work without an API key from the New York Times.  To request one, please go [here](http://developer.nytimes.com). Enter your API key in the _nytimesUrl_ variable on line 42 in the script.js file.
2. Users must enter full street address in the _Street_ input box and an unabrieviated city in the _City_ input box on the form. The more accurate the address, the more accurate the Wikipedia Links
3. For now, he New York Times articles returned will only search for articles relevant to the city. I'm working on refining this search to make the articles more accurate.

#### Dependencies and Libraries
This project uses jQuery as the library and to make AJAX calls. The project also makes use of the Google Streetview Image API, Wikipedia API, and the New York Times API as the main data.

#### More Information
1. Learn how to use the Google Streetview Image API [here](https://developers.google.com/maps/documentation/streetview/).
2. Learn how to use the Wikipedia API through MediaWiki [here](https://www.mediawiki.org/wiki/API:Main_page).
3. Obtain your own NYTimes API key and learn how to use it [here](http://developer.nytimes.com).