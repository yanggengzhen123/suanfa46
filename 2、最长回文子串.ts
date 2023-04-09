function longestPalindrome(s: string): string {
    // 利用中心思想
    if(s.length < 2) return s
    let maxLength:number = 1
    let start:number = 0
    function expend(left:number,right:number){
        while(left >= 0 && right < s.length && s[left] === s[right]){
            if(right - left + 1 > maxLength){
                maxLength = right -left + 1
                start = left
            }
            left--
            right++
        }
    }
    for(let i = 0;i < s.length;i++){
        expend(i - 1,i + 1);
        expend(i,i + 1)
    }
    return s.substring(start,start + maxLength)
};