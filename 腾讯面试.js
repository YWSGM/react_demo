// 输入[1,2,2,[4,4,5,5],3,3] 输出 [1,2,[4,5],3];
function flattenArray(arr) {
    const result = [];
    arr.forEach((a) => {
        if (Array.isArray(a)) {
            const flattened = flattenArray(a);
            result.push(flattened)
        } else {
            if (!result.includes(a)) result.push(a)
        }
    })
    return result
}

console.log(flattenArray([1,2,2,[4,4,5,5],3,3]))

function flattenArray1(arr) {
    const result = {};
    arr.forEach((a) => {
        if (!result[a]) {
            result[a] = 1
        } else {
            result[a] += 1
        }
    })
    const array = []
    Object.keys(result).forEach((r) => {
        if (result[r] === 2) {
            array.push(Number(r))
        }
    })
    console.log(array)
}

flattenArray1([ 1, 2, 2, 4, 4,5,5,5] )



function groupByFnc(arr) {
    const obj = {}
    arr.forEach((a) => {
        if (obj[a.type]) {
            obj[a.type].push(a)
        } else {
            obj[a.type] = [{...a}]
        }
    })
    console.log(obj)
}

groupByFnc([{ name: 'car', type: 'toy' }, { name: 'rice', type: 'food' }, { name: 'dog', type: 'toy' }])

function cloneDeep(param) {
    if (!param) return param
    if (Array.isArray(param)) {
        const newParamArray = []
        param.forEach((p) => {
            if (Array.isArray(p)) {
                newParamArray.push(cloneDeep(p))
            } else {
                newParamArray.push(p)
            }
        })
        return newParamArray
    }
    let newParam = {}
    Object.keys(param).forEach((paramKey) => {
        if (Array.isArray(param[paramKey])) {
            newParam[paramKey] = cloneDeep(param[paramKey])
        } else {
            newParam[paramKey] = param[paramKey]
        }
    })
    return newParam
}
let timer = null
function timerFnc(cb, params) {
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        //
        cb && cb(params)
        timer = null
    }, 300)
}

function num(n) {
    const numberStr = n.toLocaleString()
    console.log(numberStr)
}

num(10000000)


