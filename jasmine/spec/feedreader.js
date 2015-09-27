/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* RSS Feeds
     * 
     * This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('array is defined and not empty.', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds object and 
         * ensures it has a URL defined and that the URL is not empty.
         */
         describe ('For every RSS Feed in the array, the URL attribute', function () {
            var verifyURL = function (feed) {
                it('is defined and not empty.', function () {
                    expect(feed.url).toBeDefined();
                    expect(feed.url).not.toBe('');
                });
            };
            allFeeds.forEach(verifyURL);
         });


        /* This test loops through each feed in the allFeeds object and 
         * ensures it has a name defined and that the name is not empty.
         */
        describe ('For every RSS Feed in the array, the name attribute', function () {
            var verifyName = function (feed) {
                it('is defined and not empty.', function () {
                    expect(feed.name).toBeDefined();
                    expect(feed.name).not.toBe('');
                });
            };
            allFeeds.forEach(verifyName);
         });
    });


    /* The menu
     *
     * This test suite test the functionality of the menu and the menu icon
     */
    describe('The menu', function() {
        /* This test ensures that the menu element is hidden by default. 
         */
         it('is hidden by default.', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* This test ensures that the menu toggles visibility when the menu
          * icon is clicked. 
          */
          it('toggles visibility when clicked.', function () {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });

    });

    /* Initial Entries
     * 
     * This test suite tests the initial loading of feed entries
     */
    describe('Initial Entries', function () {
        /* This test ensures that when the loadFeed function is called and
         * completes its work, there is at least a single .entry element within
         * the .feed container.
         */
         beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
         });
         it('are loaded', function () {
            expect($('.feed').find('.entry').length).not.toBe(0);
         });
    });

    /* New Feed Selection
     * 
     * This test suite tests subsequent loading of feed entries
     */
    describe('New Feed Selection', function () {
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         beforeEach(function (done) {
            // remove any data from previous tests
            $('.feed').empty();

            // load first feed
            loadFeed(0, function () {
                urls_0 = $('.feed').find('.entry-link').attr('href');
            });

            // load second feed
            loadFeed(1, function () {
                urls_1 = $('.feed').find('.entry-link').attr('href');
                done();
            });
         });

        // compare that the urls from loading the two feeds are different 
        it('loads different entries', function () {
            expect(urls_0).not.toEqual(urls_1);
         });

    });

    /* Bookmark
     *
     * This test suites tests bookmarking and un-bookmarking of entries. The feature
     * is not yet implemented.
     */
    describe('Bookmark', function () {

    });
}());
