//  非递减顺序就是递增顺序（从后往前）
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let tail = m + n - 1
    let p1 = m - 1
    let p2 = n - 1
    let curr:number
    while(p1 > -1 || p2 > -1){
        if(p1 === -1){
            curr = nums2[p2--]
        }else if(p2 === -1){
            curr = nums1[p1--]
        }else if(nums2[p2] > nums1[p1]){
            curr = nums2[p2--]
        }else{
            curr = nums1[p1--]
        }
        nums1[tail--] = curr
    }
};   