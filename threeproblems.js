/*
 * Solves the first three problems in five problems every SE should solve.
 * https://blog.svpino.com/2015/05/07/five-programming-problems-every-software-engineer-should-be-able-to-solve-in-less-than-1-hour
 * Created by Kelsie on 9/21/2015.
 */

/*
 * Problem 1
 */
var testNums = [1, 2, 3, 4];

function sumFor(nums) {
  var total = 0;
  for (var i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

function sumWhile(nums) {
  var total = 0;
  var i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

function sumRecursion(nums) {
  if(nums.length === 0) {
    return 0;
  }
  else {
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
  }
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function(memo, num) {return memo + num}, 0);
}

// console.log("sumTheSimpleWay: " + sumTheSimpleWay(testNums));

/*
 * Problem 2
 */

var testList1 = [1, 2, 3];
var testList2 = ["a", "b", "c"];

function zipList(list1, list2) {
  var resultList = [];
  for (var i = 0; i < list1.length; i++) {
    resultList.push(list1[i], list2[i]);
  }
  return resultList;
}

function zipListTheSimpleWay (list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

// console.log("ZipTSW: " + zipListTheSimpleWay(testList1, testList2));

/*
 * Problem 3
 */

function fib() {
  var tail = 0;
  var head = 1;
  var fibList = [tail];

  for(var i = 0; i < 99; i++) {
    var tempHead = head;
    head = head + tail;
    tail = tempHead;
    fibList.push(head);
  }
  return fibList;
}

console.log("fib: " + fib().length);