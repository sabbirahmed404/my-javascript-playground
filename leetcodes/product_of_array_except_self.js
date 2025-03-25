var productExceptSelf = function(nums){
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Calculate prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix *= nums[i];
        console.log('result: '+result[i]+'Prefix: '+prefix);
        console.log(result);
    }

    // Calculate suffix products and multiply with prefix
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
        console.log('result: '+result[i]+'Suffix: '+suffix);
        console.log(result);
    }
    console.log(result);
    return result;
}

productExceptSelf([1,2,3,4,5])