function lengthOfLongestSubstring(s: string): number {
    // 双指针滑动窗口
    let max:number = 0
    let set = new Set()
    let l:number = 0
    let r:number = 0
    for(r;r < s.length;r++){
        if(!set.has(s[r])){
            set.add(s[r])
            max = Math.max(max,set.size)
            continue
        }else{
            while(set.has(s[r])){
                set.delete(s[l])
                l++
            }
            set.add(s[r])
        }
    }
    return max
};
let s1 = "abcabcbb"
console.log(lengthOfLongestSubstring(s1));