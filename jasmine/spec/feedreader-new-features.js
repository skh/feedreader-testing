/* feedreader-new-features.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* Bookmark
     *
     * This test suites tests bookmarking and un-bookmarking of entries.
     * 
     * User stories for this new feature can be found in the project README.md file
     */

    describe('Bookmark', function () {
        /* All tests need a loaded feed */
        beforeEach (function (done) {
            // remove any data from previous test
            $('.feed').empty();

            // load feed
            loadFeed(0, function (done) {
                done();
            });
        });
    });


}());