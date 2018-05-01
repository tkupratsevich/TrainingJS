//The numeric array A is given. You should move elements > 0 to the array В, elements < 0 to the array С. Log on console both arrays


var arr = [-6, 4, 8, -3, -11, 6, 9, 1, -5]; 
		
var positivArr = arr.filter(function(item) {
	return item > 0;
});

var negativArr = arr.filter(function(item) {
	return item < 0;
});

console.log(positivArr);
console.log(negativArr);

