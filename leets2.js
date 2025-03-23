var moveZeroes = function(nums){
    let n = nums.length;
    let j = -1;

    for(let i = 0; i < n; i++){
        if(nums[i] == 0){
            j = i;
            break;
        }
    }

    if (j === -1) return ;

    for( let i = j+1; i<n ; i++ ){
        if(nums[i]!== 0){
            nums[j] = nums[i];
            nums[i] = 0;
            j++;
        }
    }
    console.log(nums);
}

moveZeroes([1,2,0,0,1]);