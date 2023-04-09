function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number,number>()
    for(let i = 0;i < nums.length;i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]) as number,i]
        }else{
            map.set(nums[i],i)
        }
    }
    return []
};