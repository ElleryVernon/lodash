"use strict";

// A utility object that holds our functions

const util = {
	util: this,
	// A utility function to get all methods from an object
	getMethods: (obj) =>
		Object.getOwnPropertyNames(obj).filter((item) => {
			try {
				return typeof obj[item] === "function";
			} catch (error) {
				return false;
			}
		}),
	traverse(node, visitor) {
		visitor.enter(node);

		if (node.body && typeof node.body === "object" && node.body.length) {
			node.body.forEach((childNode) => {
				util.traverse(childNode, visitor);
			});
		}
	},
	checkVarUsed: (funcStr) => {
		it("var 키워드를 사용하지 않아야 합니다.", () => {
			// regex
			const removeComment = /(\/\*[\s\S]*?\*\/)|(\/\/.*$)/gm;
			const findVarKeword = /var\s+([a-zA-Z_$\uAC00-\uD7A3][0-9a-zA-Z_$\uAC00-\uD7A3]*)\s*=/g;

			const noneCommentFunc = funcStr.replace(removeComment, "");
			const isVarUsed = (str) => str.search(findVarKeword);

			expect(isVarUsed(noneCommentFunc)).to.equal(-1, "\n\t'var' keyword is used.\n\n");
		});
	},
	checkBuiltInUsed: (runFunc) => {
		it("Array 내장 메서드를 사용하지 않고 요구사항을 구현할 수 있어야 합니다.", () => {
			const allowedMethods = ["pop", "push", "shift", "sort"];

			const arrayMethods = util
				.getMethods(Array.prototype)
				.filter((method) => !allowedMethods.includes(method));

			for (let i = 0; i < arrayMethods.length; i++) {
				const method = arrayMethods[i];
				Array.prototype[method].resetHistory();
			}

			runFunc();

			for (let i = 0; i < arrayMethods.length; i++) {
				const method = arrayMethods[i];
				expect(Array.prototype[method].called).to.equal(
					false,
					`\n\tArray.prototype.${method} 메소드가 호출되었습니다!!\n\n`
				);
			}
		});
	},
	checkAlgorithm: (runFunc, methods = ["each"]) => {
		const instructionTarget =
			methods.length === 1
				? `_.${methods[0]} 함수`
				: `${methods.map((m) => `_.${m}`).join(", ")} 중 하나`;
		const instructionAction = "를 사용해야 합니다";

		it(`${instructionTarget}${instructionAction}`, function () {
			for (let i = 0; i < methods.length; i++) {
				const lodash = _;
				const key = methods[i];
				lodash[key].resetHistory();
			}
			runFunc();
			const called = methods.some((m) => _[m].called);
			expect(called).to.equal(true);
		});
	},
};

let that;
if (typeof window !== "undefined") {
	mocha.setup("bdd");
	window.expect = chai.expect;
	window.onload = function () {
		window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();
	};
	window._ = {};
	that = window;
	window.checkBuiltInUsed = util.checkBuiltInUsed;
	window.checkVarUsed = util.checkVarUsed;
	window.checkAlgorithm = util.checkAlgorithm;
} else {
	global._ = {};
	that = global;
	global.checkBuiltInUsed = util.checkBuiltInUsed;
	global.checkVarUsed = util.checkVarUsed;
	global.checkAlgorithm = util.checkAlgorithm;
}

before(() => {
	util.getMethods(Array.prototype).forEach((method) => sinon.spy(Array.prototype, method));

	sinon.spy(_, "each");
	sinon.spy(_, "map");
	sinon.spy(_, "reduce");
	sinon.spy(_, "pluck");
});
