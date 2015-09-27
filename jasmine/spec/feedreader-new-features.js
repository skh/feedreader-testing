/* feedreader-new-features.js
 *
 * This spec file contains all tests for unimplemented features. 
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {

    /* Bookmark
     *
     * This test suites tests bookmarking and un-bookmarking of entries.
     * 
     * User stories for this new feature can be found in the project README.md file.
     */

    describe('Bookmark', function () {

        /* All tests need a loaded feed */
        beforeEach(function (done) {
            // remove any data from previous test
            $('.feed').empty();

            // load feed
            loadFeed(0, function () {
                entries = $('.feed').find('.entry').get();
                done();
            });
        });

        /* This tests US 1: every entry has a 'bookmark' icon */       
        it('icon is visible for every entry.', function () {
            entries.forEach(function (entry) {
                expect($(entry).find('.bookmark-icon').length).toBe(1);
            });
        });

        /* This tests US 2: on load, no entry is bookmarked */
        it('state is off for all entries when feed is loaded.', function () {
            entries.forEach(function (entry) {
                expect($(entry).hasClass('bookmarked')).not.toBe(true);
            });
        });

        /* This tests US 3 and 4: click on the 'bookmark' icon toggles bookmarked state */
        it('icon toggles bookmark state on click', function () {
            $(entries[0]).find('bookmark-icon').trigger('click');
            expect($(entries[0]).hasClass('bookmarked')toBe('true'));
            $(entries[0]).find('bookmark-icon').trigger('click');
            expect($(entries[0]).hasClass('bookmarked')toBe('true'));
        });
    });

}());