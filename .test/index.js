global.expect = require("../lib/chai").expect;
global.sinon = require("sinon");

describe("Basic Requirements", () => {
	require("../lib/test.js");
	require("../src/01_basic.js");
	require("../spec/01_basic.test.js");
});
