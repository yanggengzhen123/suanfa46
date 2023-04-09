/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    // 快慢指针，slow记录的是0的位置，会发生改变
    let slow:number = 0,fast:number = 0
    for(fast;fast < nums.length;fast++){
        if(nums[fast] !== 0){
            [nums[fast],nums[slow]] = [nums[slow],nums[fast]]
            slow++
        }
    }
};