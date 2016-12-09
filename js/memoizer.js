function memoizer(memo, formula){
  var recur = function(n){
    var result = memo[n];
    if(typeof result !== 'number'){
      result = formula(recur, n);
      memo[n] = result;
    }
    return result;
  }
  return recur;
}
var factorial = memoizer([1,1], function (recur, n){
  return n * recur(n - 1);
});
// really expensive because there are two legs of recursion
var fibonacci = memoizer([0,1], function(recur, n){
  return recur(n - 1) + recur(n - 2);
})
function computeMemoize(event, formula, elemId){
  var inputNum = parseInt(event.value, 10);
  var outputSpan = document.getElementById(elemId);
  outputSpan.innerHTML = "";
  if(!isNaN(inputNum)){
      var result = formula(inputNum);
      outputSpan.innerHTML = result;
  }
  
}
