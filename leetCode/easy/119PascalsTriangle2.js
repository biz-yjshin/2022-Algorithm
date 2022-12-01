/**

  날짜 : 2022.12.01
  난이도 : Easy
  제목 : 119. Pascal's Triangle II
  URL : https://leetcode.com/problems/pascals-triangle-ii/

*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
  if(rowIndex == 0) return [1];
 if(rowIndex == 1) return [1, 1];
 
 let result = [[1], [1,1]];
 
 for(let i = 2; i <= rowIndex; i++){
     let arr = [1];
     let prev = result[i - 1];
     let len = prev.length;
     for(let j = 0; j < len-1; j++){
         arr.push(prev[j] + prev[j + 1]);
     }
     arr.push(1);
     result.push(arr);
 }
 return result[rowIndex];
};

/**

var getRow = function(rowIndex) {
    let last = [];
   for(let i=1;i<=rowIndex+1;++i){
       let array=[];
       for(j=0;j<i;++j){
           if(j===0 || j===i-1){
               array[j] =1
           }else {
               array[j] = last[j-1]+last[j];
           }
       }
       last = array;
   }
    return last;
};

 */