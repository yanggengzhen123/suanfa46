function climbStairs(n: number): number {
    if(n <= 3) return n
    let memo = [1,2,3]
    for(let i = 3;i < n;i++){
        memo[i] = memo[i - 1] + memo[i - 2]
    }
    return memo[n - 1]
};