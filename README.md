# Project Feedreader Testing

This project is based on: https://github.com/udacity/frontend-nanodegree-feedreader

It implements test cases for an existing feed reader application using [Jasmine](http://jasmine.github.io/). To run the project:

* clone this repository
* serve the files from a local web server, e.g. by running ```python -m SimpleHTTPServer```
  from the root directory and pointing a browser to ```http://localhost:8000```
* to only see tests for implemented features, comment out this line from ```index.html```:
  ```<script src="jasmine/spec/feedreader-new-features.js"></script>```

## Testing for additional features ##

I have added test cases for a new feature: bookmarking entries for later reading. In the 
first iteration, all bookmarks are reset whenever a feed is reloaded. A user can bookmark
an entry by clicking on a special 'bookmark' icon. The entry is then visually highlighted. When the user clicks the 'bookmark' icon again, the highlighting is removed.

Implementation: the bookmark icon needs to have the CSS class 'bookmark-icon' applied. 
Bookmarked entries need to have the CSS class 'bookmarked' applied

The following user stories need to be implemented for the tests to pass:

* US 1: As a user, when I load a feed, I want to see a bookmark icon on every entry
* US 2: As a user, when I load a feed, I don't want any entries to be bookmarked
* US 3: As a user, when I click on the bookmark icon on a non-highlighted entry, I want the entry to be highlighted visually
* US 4: As a user, when I click on the bookmark icon on a highlighted entyr, I want the entry to no longer be highlighted visually

# Credits:

* favicon taken from http://fortawesome.github.io/