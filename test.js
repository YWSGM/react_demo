// // 判断回文数
// (function isPalindrome(s) {
//     const sArr = []
//     for (let i = 0; i < s.length; i++) {
//         sArr.push(s[i])
//     }
//     let str = ''
//     sArr.reverse().forEach((sa) => {
//         str += sa
//     })
//     console.log(s === str)
//     return s === str;
// })('-121')

// 判断出现一次
// (function b (arr) {
//     const newArr = []
//     arr.forEach((a) => {
//         if (!newArr.includes(a)) newArr.push(a)
//     })
//     console.log(newArr, newArr.length)
// })([1,2,3,3,4,4,5,6])

// 判断出现最少
// (function b(arr) {
//     const obj = {}
//     arr.forEach((a) => {
//         if (!obj[a]) {
//             obj[a] = 1
//         } else {
//             obj[a] += 1
//         }
//     })
//     const arr1 = []
//     Object.keys(obj).forEach((o) => {
//         if (obj[o] === 1) {
//             arr1.push(Number(o))
//         }
//     })
//     console.log(arr1.join())
//     console.log(obj)
// })([1, 2, 2, 3, 3, 4, 4, 5, 5, 6])
//
// // (function (s) {
// //     let n = s.length;
// //     let res = '';
// //     let dp = Array.from(new Array(n),() => new Array(n).fill(false));//初始化数组
// //     console.log(dp)
// //     for(let i = n-1;i >= 0;i--){//循环字符串
// //         for(let j = i;j < n;j++){
// //             //dp[i][j]表示子串i～j是否是回文子串
// //             //回文子串必须满足s[i]，s[j]相等。并且向外扩展一个字符也相等，即dp[i+1][j-1]也是回文子串
// //             //j - i < 2表示子串小于等于1也是回文串
// //             dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i+1][j-1]);
// //             if(dp[i][j] && j - i +1 > res.length){//当前回文子串比之前的大，更新最大长度
// //                 res = s.substring(i,j+1);
// //             }
// //         }
// //     }
// //     console.log(res);
// // })('abcbab')
//
// // 翻转句中的单词
// function reverseWords(s) {
//     return s.split(' ').map(item => item.split('').reverse().join('')).join(' ')
// }
//
// console.log(reverseWords('hello word'))
//
// function reverseNumber(n) {
//     let newN = n
//     if (n < 0) {
//         newN = newN * -1
//     }
//     newN = newN.toString().split('').reverse().join('')
//     newN = n < 0 ? -1 * newN : newN
//     const min = (-2) ** 31, max = 2 ** 31 - 1
//     console.log(min < newN < max ? newN : 0)
// }
//
// reverseNumber(-213)
//
// console.log((-2) ** 31)

// const a = (arr) => {
//     const map = new Map()
//     let result = false
//     arr.forEach(i => {
//         if (map.has(i)) {
//             result = true
//         } else {
//             map.set(i, true)
//         }
//     })
//     console.log(map)
//     return result
// }
//
// console.log(a([1, 2, 3, 1]));






















