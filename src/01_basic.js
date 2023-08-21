"use strict";

/**
 * lodash 파일에 오신 것을 환영합니다!
 *
 * 이 파일 에서는 유명한 lodash 라이브러리의 일부를 직접 만들어보면서 자바스크립트를 배워보게 될겁니다.
 */

// _.identity는 매개변수(parameter)가 무엇이든, 그대로 리턴합니다.
// 이 함수는 lodash 기능 구현 및 테스트를 위해 재사용되는 함수입니다.
_.identity = (val) => {
	return val;
};

/**
 * COLLECTIONS
 * ===========
 * COLLECTIONS 부분에서는 자료들을 모아두는 '배열'과 '객체'에 대해 알아봐요.
 * '배열'은 순서가 있는 데이터 모음이고, '객체'는 키와 값이 쌍을 이루는 데이터 모음이에요.
 *
 * 이런 데이터 모음을 가지고 할 수 있는 일들이 많아요. 예를 들면, 배열에서 가장 큰 값을 찾거나, 모든 값을 더하는 것 등이 있죠.
 *
 * 이렇게 반복해서 처리하는 작업을 '반복(iteration)'이라고 해요.
 * 자바스크립트에는 이런 반복 작업을 도와주는 반복문(for, while)과 내장 메서드(arr.map, arr.filter)가 있어요.
 *ㅊ
 * 아래의 예시를 봐요. 콘솔에 0, 1, 2를 찍는 작업을 반복하고 있어요.
 * for (let i = 0; i < 3; i++) {
 *  console.log(i);
 * }
 *
 * ========================================================
 * IMPORTANT NOTE!
 * 이 파일에서는 배열과 객체와 같은 데이터 모음을 다루는 여러 함수를 만들어 볼 거에요.
 *
 * 중요한 것은, 몇몇 기본적인 메서드를 제외하고는 내장 메서드를 사용하지 않고 직접 만들어볼 거에요.
 * 이번 파일에서 아래 예외를 제외하고 배열(Array), 집합(Set), 맵(Map)의 기본 메소드 사용은 금지되어 있습니다.
 * 예를 들어, pop, push, shift, sort는 사용해도 되지만 다른 내장 메서드는 사용하면 안됩니다.
 * 단, 새로운 함수를 구현할 때 이전에 구현한 함수를 활용해도 됩니다. (이미 해결한 문제를 또 해결할 필요는 없겠죠?)
 * 사전에 이미 완료된 함수를 만나게 될 경우, 반드시 코드를 잘 읽어 보고 이해하고 넘어가시기 바랍니다.
 *
 * 이러한 과정을 지나친다면, 앞으로 구현하게 될 함수와 자바스크립트가 훨씬 더 어렵게 느껴질 겁니다.
 * 아래에 _.slice가 이미 구현되어 있습니다. 이 함수를 가이드 삼아, 앞으로 나올 함수들을 구현해 보세요.
 */

// _.slice는 배열의 start 인덱스부터 end 인덱스 이전까지의 요소를 shallow copy하여 새로운 배열을 리턴합니다.
_.slice = (arr, start, end) => {
	// 변수를 선언할 경우, 아래와 같이 콤마(,)를 이용해 선언할 수 있습니다.
	// 이때, 콤마로 연결된 변수들은 모두 동일한 선언 키워드(let, const)가 적용됩니다.
	// 이런 코딩 스타일도 가능하다는 것을 보여드리기 위한 예시일 뿐, 사용을 권장하는 것은 아닙니다.
	// 오픈 소스에 기여하든, 회사 내에서 개발을 하든 본인이 속한 조직의 코딩 스타일, 코딩 컨벤션을 따르면 됩니다.
	// 그리고 아래와 같은 코딩 스타일을 봐도 당황하지 않고 해석할 수 있으면 됩니다.
	let _start = start || 0; // `start`가 undefined인 경우, slice는 0부터 동작합니다.
	let _end = end;

	// 입력받은 인덱스가 음수일 경우, 마지막 인덱스부터 매칭한다. (예. -1 => arr.length - 1, -2 => arr.length - 2)
	// 입력받은 인덱스는 0 이상이어야 한다.
	if (start < 0) {
		_start = Math.max(0, arr.length + start);
	}

	if (end < 0) {
		_end = Math.max(0, arr.length + end);
	}

	// `end`가 생략될 경우(undefined), slice는 마지막 인덱스까지 동작합니다.
	// `end`가 배열의 범위를 벗어날 경우, slice는 마지막 인덱스까지 동작합니다.
	if (_end === undefined || _end > arr.length) {
		_end = arr.length;
	}

	let result = [];
	// `start`가 배열의 범위를 벗어날 경우, 빈 배열을 리턴합니다.
	for (let i = _start; i < _end; i++) {
		result = [...result, arr[i]];
	}

	return result;
};

// _.take는 배열의 처음 n개의 element를 담은 새로운 배열을 리턴합니다.
// n이 undefined이거나 음수인 경우, 빈 배열을 리턴합니다.
// n이 배열의 길이를 벗어날 경우, 전체 배열을 shallow copy한 새로운 배열을 리턴합니다.
_.take = (arr, n) => {
	// TODO: 여기에 코드를 작성합니다.
};

// _.drop는 _.take와는 반대로, 처음 n개의 element를 제외한 새로운 배열을 리턴합니다.
// n이 undefined이거나 음수인 경우, 전체 배열을 shallow copy한 새로운 배열을 리턴합니다.
// n이 배열의 길이를 벗어날 경우, 빈 배열을 리턴합니다.
_.drop = (arr, n) => {
	// TODO: 여기에 코드를 작성합니다.
};

// _.last는 배열의 마지막 n개의 element를 담은 새로운 배열을 리턴합니다.
// n이 undefined이거나 음수인 경우, 배열의 마지막 요소만을 담은 배열을 리턴합니다.
// n이 배열의 길이를 벗어날 경우, 전체 배열을 shallow copy한 새로운 배열을 리턴합니다.
// _.take와 _.drop 중 일부 또는 전부를 활용할 수 있습니다.
_.last = (arr, n) => {
	// TODO: 여기에 코드를 작성합니다.
};

// _.each는 모아진 데이터(collection) 안의 각 항목에 반복적인 작업을 수행합니다.
//  1. 배열이나 객체와 같은 collection과, 반복해서 실행할 함수(iteratee)를 인자로 받습니다.
//     (여기서 iteratee는 반복되는 작업을 수행하는 함수로서, 다른 함수의 인자로 전달되기 때문에 콜백 함수라고 부릅니다.)
//  2. collection의 각 데이터를 차례로 돌면서(순회하면서)
//  3. iteratee 함수에 각 데이터를 인자로 넣어 실행합니다.

// iteratee는 여러 형태로 사용될 수 있어요. 예를 들어, Array.prototype.forEach를 사용할 때 다양한 콜백 함수가 사용되었던 것처럼요.
// 우리가 만들 _.each 함수도 마찬가지로 다양한 상황에서 잘 동작하게 만들어야 해요.

/*
 * 테스트 페이지를 열고 each의 네 번째 테스트 케이스를 눌러 보시기 바랍니다.
 * 아래와 같은 코드가 있다고 해요:
 *  const letters = ['a', 'b', 'c'];
 *  const iterations = [];
 *  _.each(letters, function(letter) => {
 *   iterations.push(letter);
 *  });
 *  // 결과: iterations = ['a', 'b', 'c']
 *
 * 이 때, iteratee는 데이터, 접근자(index 또는 key), collection을 다룰 수 있어야 해요.
 *  배열을 받을 때는 iteratee(요소, 인덱스, 배열)처럼,
 *  객체를 받을 때는 iteratee(값, 키, 객체)처럼 동작해야 해요.
 *
 * 이렇게 하면 collection의 모든 정보가 잘 전달되어서 어떤 경우에도 잘 동작하게 됩니다.
 * 그리고 실제로 사용되는 콜백 함수는 collection의 모든 정보를 필요로 하지 않을 수도 있어요.
 */

// _.each는 명시적으로 어떤 값을 리턴하지 않습니다.
_.each = (collection, iteratee) => {
	// TODO: 여기에 코드를 작성합니다.
};

// _.indexOf는 target으로 전달되는 값이 arr의 요소인 경우, 배열에서의 위치(index)를 리턴합니다.
// 그렇지 않은 경우, -1을 리턴합니다.
// target이 중복해서 존재하는 경우, 가장 낮은 index를 리턴합니다.
_.indexOf = (arr, target) => {
	// 배열의 모든 요소에 접근하려면, 순회 알고리즘(iteration algorithm)을 구현해야 합니다.
	// 반복문을 사용하는 것이 가장 일반적이지만, 지금부터는 이미 구현한 _.each 함수를 활용하여야 합니다.
	// 아래 _.indexOf의 구현을 참고하시기 바랍니다.
	let result = -1;

	_.each(arr, (item, index) => {
		if (item === target && result === -1) {
			result = index;
		}
	});

	return result;
};

// _.filter는 test 함수를 통과하는 모든 요소를 담은 새로운 배열을 리턴합니다.
// test(element)의 결과(return 값)가 truthy일 경우, 통과입니다.
// test 함수는 각 요소에 반복 적용됩니다.
_.filter = (arr, test) => {
	// TODO: 여기에 코드를 작성합니다.
};

// _.reject는 _.filter와 정반대로 test 함수를 통과하지 않는 모든 요소를 담은 새로운 배열을 리턴합니다.
_.reject = (arr, test) => {
	// TODO: 여기에 코드를 작성합니다.
	// TIP: 위에서 구현한 `filter` 함수를 사용해서 `reject` 함수를 구현해 보세요.
};

// _.uniq는 주어진 배열의 요소가 중복되지 않도록 새로운 배열을 리턴합니다.
// 중복 여부의 판단은 엄격한 동치 연산(strict equality, ===)을 사용해야 합니다.
// 입력으로 전달되는 배열의 요소는 모두 primitive value라고 가정합니다.
_.uniq = (arr) => {
	// TODO: 여기에 코드를 작성합니다.
};

// _.map은 iteratee(반복되는 작업)를 배열의 각 요소에 적용(apply)한 결과를 담은 새로운 배열을 리턴합니다.
// 함수의 이름에서 드러나듯이 _.map은 배열의 각 요소를 다른 것(iteratee의 결과)으로 매핑(mapping)합니다.
_.map = (arr, iteratee) => {
	// TODO: 여기에 코드를 작성합니다.
	// _.map 함수는 매우 자주 사용됩니다.
	// _.each 함수와 비슷하게 동작하지만, 각 요소에 iteratee를 적용한 결과를 리턴합니다.
};

// _.pluck 함수는
//  1. 배열 내의 객체나 배열을 대상으로, 특정 키나 인덱스의 값을 찾기 위해 사용됩니다.
//  2. 이 함수는 입력받은 배열의 각 요소에서 해당 키나 인덱스의 값을 찾아 새로운 배열에 저장합니다.
//  3. 그리고 그 새로운 배열을 결과로 리턴합니다.
// 예: 여러 사람의 나이 정보를 담은 객체 배열에서, 나이만 뽑아 새 배열로 만드는 것이 가능합니다.
// 리턴되는 새 배열의 길이는 원래 배열의 길이와 같아야 하며,
// 만약 특정 키나 인덱스가 없는 요소가 있다면, 그 위치에는 undefined가 들어갑니다.

_.pluck = (arr, keyOrIdx) => {
	// _.pluck을 _.each를 사용해 구현하면 아래와 같습니다.
	// let result = [];
	// _.each(arr, (item) => {
	//   result.push(item[keyOrIdx]);
	// });
	// return result;
	// _.pluck을 _.map을 사용해 구현해보시기 바랍니다.
	// TODO: 여기에 코드를 작성합니다.
};

// _.reduce는 배열의 요소를 하나의 값으로 합치는 함수입니다.
//  1. 배열과 누적 작업을 위한 함수(iteratee)를 받습니다.
//  2. 배열의 요소를 하나씩 iteratee 함수에 전달하고 결과를 누적합니다.
//  3. 최종적으로 누적된 값을 리턴합니다.
// 예: [1, 2, 3, 4]의 합을 구할 때, 순서대로 1, 1+2, 1+2+3, 1+2+3+4를 계산합니다.

// iteratee 함수의 형태:
//  iteratee(누적값, 현재요소, 인덱스, 배열)
// 누적값은 이전 요소까지의 계산 결과입니다.
// 현재요소는 처리할 다음 요소입니다.

// _.reduce는 세 번째 인자로 초기 누적값을 받을 수 있습니다.
//  - 초기 누적값이 주어진 경우: 첫 번째 요소부터 누적 작업이 시작됩니다.
//  - 초기 누적값이 주어지지 않은 경우: 첫 번째 요소를 초기 누적값으로 사용하고, 두 번째 요소부터 누적 작업이 시작됩니다.

// 예제 1 (초기 누적값이 주어진 경우):
//  const sum = _.reduce([1,2,3], (total, number) => total + number, 0);
//  초기 누적값은 0, 결과는 6

// 예제 2 (초기 누적값이 주어지지 않은 경우):
//  const sum = _.reduce([1,2,3], (total, number) => total + number);
//  초기 누적값은 배열의 첫 번째 요소인 1, 결과는 6

// 최종 예제 1:
//  const sum = _.reduce([1,2,3], (total, number) => total + number);
//  결과는 6

// 최종 예제 2:
//  const result = _.reduce([3, 5], (total, number) => total + number * number, 2);
//  초기 누적값은 2, 결과는 36

_.reduce = (arr, iteratee, initVal) => {
	// TODO: 여기에 코드를 작성합니다.
};
