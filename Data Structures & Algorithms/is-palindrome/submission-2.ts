class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphaNum(c: string): boolean {
        const regex = /^[0-9A-Z]+$/
        return regex.test(c);
    }
    isPalindrome(s: string): boolean {
        let us = s.toUpperCase();
        let left: number =0;
        let right: number =us.length-1;
        while(left<right){
            while(left < right && !this.isAlphaNum(us[left]))left++;
            while(left < right && !this.isAlphaNum(us[right]))right--;
            if(us[left]!=us[right])return false
            left++;right--;
        }
        return true;
    }
}
