const assert = require('assert'),
	  EMPTY_STRING = require('./index.js');

/* 正気チェック (flow-types 今含まれています) */
describe('empty-string', () => {
	it('should be an empty string', () =>
		assert.equal(EMPTY_STRING, '')
	);

	it('should be a really empty string', () =>
		assert.equal(EMPTY_STRING.length, 0)
	);

	it('should not be an empty object', () =>
		assert.equal(EMPTY_STRING === {}, false)
	);

	it('should not be an empty array', () =>
		assert.equal(EMPTY_STRING === [], false)
	);

	it('should not be a string with content', () =>
		assert.equal(EMPTY_STRING === 'content', false)
	);

	it('should not be the number 1', () =>
		assert.equal(EMPTY_STRING === 1, false)
	);

	it('should not be the number 0', () =>
		assert.equal(EMPTY_STRING === 0, false)
	);

	it('should not be the number 10000 either', () =>
		assert.equal(EMPTY_STRING === 10000, false)
	);

	it('should not be the number 9001 either', () =>
		assert.equal(EMPTY_STRING === 9001, false)
	);

	it('should not be undefined', () =>
		assert.equal(EMPTY_STRING === undefined, false)
	);

	it('should not be null', () =>
		assert.equal(EMPTY_STRING === null, false)
	);

	it('should not be true', () =>
		assert.equal(EMPTY_STRING === true, false)
	);

	it('should not be false', () =>
		assert.equal(EMPTY_STRING === false, false)
	);

	it('should be a string', () =>
		assert.equal(typeof EMPTY_STRING === "string", true)
	);

	it('should not be a symbol', () =>
		assert.equal(typeof EMPTY_STRING === "symbol", false)
	);

	it('should be a flow-type', () =>
		assert.equal(new String(EMPTY_STRING), new String(EMPTY_STRING))
	);

	it('should be itself', () =>
		assert.equal(EMPTY_STRING, EMPTY_STRING)
	);
});
