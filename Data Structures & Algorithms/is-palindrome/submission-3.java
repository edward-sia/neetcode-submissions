class Solution {
    public boolean isPalindrome(String s) {
        
        int l = 0, r = s.length()-1;
        char[] arr = s.toLowerCase().toCharArray();

        while (l < r) {
            while (!isAlphaNumeric(arr[l]) && l < r) {
                l++;
            }
            while (!isAlphaNumeric(arr[r]) && l < r) {
                r--;
            }
            if (arr[l] != arr[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }

    private boolean isAlphaNumeric(char c) {
        return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
    }
}
