// ---------------------------------------------------------------------------
//  assert.js
// ---------------------------------------------------------------------------

    var EMPTY_STRING = require('./index.js');
    var assert = require('assert');

    describe('empty-string', function() {
        it('should be an empty string', function () {
            assert.equal(EMPTY_STRING, '');
        });

        it('should not be an empty object', function () {
            assert.equal(EMPTY_STRING === {}, false);
        });

        it('should not be an empty array', function () {
            assert.equal(EMPTY_STRING === [], false);
        });

        it('should not be a string with content', function () {
            assert.equal(EMPTY_STRING === 'content', false);
        });

        it('should not be the number 1', function () {
            assert.equal(EMPTY_STRING === 1, false);
        });

        it('should not be the number 0', function () {
            assert.equal(EMPTY_STRING === 0, false);
        });

        it('should not be the number 10000 either', function () {
            assert.equal(EMPTY_STRING === 10000, false);
        });

        it('should not be the number 9001 either', function () {
            assert.equal(EMPTY_STRING === 9001, false);
        });

        it('should not be undefined', function () {
            assert.equal(EMPTY_STRING === undefined, false);
        });

        it('should not be false', function () {
            assert.equal(EMPTY_STRING === false, false);
        });

        it('should not be true', function () {
            assert.equal(EMPTY_STRING === true, false);
        });

        it('should be itself', function () {
            assert.equal(EMPTY_STRING, EMPTY_STRING);
        });
    });
