var moveZeros = function(nums) {

    // Remove element at index 2 and insert it at index 4
   // let element = nums.splice(2, 1)[0]; // Remove and get the element
   let j = 0
    for (let i = 0 ; i < nums.length ; i++){
        if(nums[j] == 0) {
        
            nums.splice(j, 1)
            nums.push(0)    
            j-= 1 
            //console.log('after first pushed ',  i, ' ' ,  nums)
        }
        j++
    }
    console.log(nums)
}


moveZeros([0,0,1]) // [1,0,0]