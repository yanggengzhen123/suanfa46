function isValid(s: string): boolean {
    let map = new Map<string,string>()
    map.set('(',')')
    map.set('{','}')
    map.set('[',']')
    let stack:string[] = []
    for(let i = 0;i < s.length;i++){
        if(map.has(s[i])){
            stack.push(map.get(s[i]) as string)
        }else{
            if(stack.length && stack[stack.length - 1] === s[i]){
                stack.pop()
            }else{
                return false
            }
        }
    }
    return stack.length === 0
};