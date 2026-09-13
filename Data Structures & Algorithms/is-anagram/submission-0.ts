class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length!==t.length)return false;
        let mt = new Map();let ms = new Map()
        for(let i=0;i<s.length;i++){
            mt.set(t[i],(mt.get(t[i])||0)+1)
            ms.set(s[i],(ms.get(s[i])||0)+1)
        }
        for(let it of mt.keys()){
            if(mt.get(it) != ms.get(it))
            return false
        }
        return true
    }
}
