'use strict';

function compute_chain_median(collection) {
 var arr=collection.split('->');
 var i=(arr.length)%2;
 var k=(arr.length)/2;
 if(i==0){
   var a=arr[k];
   var c=parseInt(a);
   var b=arr[k+1];
  var p=parseInt(b);
var j=(c+p)*0.5;
  }
  return j;
  //在这里写入代码
}

module.exports = compute_chain_median;
