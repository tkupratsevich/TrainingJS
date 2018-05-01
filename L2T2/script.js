// Find amount of reps for each element in the array and log it on console


var arr = [2, 1, 1, 2, 3, 1, 2, 1];

var count = {};
arr.forEach(function(a){
    if (count[a] != undefined)
        ++count[a];
    else 
    	count[a]=1
  });
for (var b in count)
    console.log( b + ' - ' + count[b] );