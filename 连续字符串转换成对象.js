function strToObj(value, obj, keys) {
    let current = obj;
    keys.forEach((key, index) => {
        if (!current[key]) {
            current[key] = index === keys.length - 1 ? value : {}
        }
        current = current[key]
    })
}

function strToArray(value, obj, keys) {
    let current = obj;
    keys.forEach((key, index) => {
        if (!current[key]) {
            current[key] = index === keys.length - 1 ? {[key]: value} : []
        }
        current = current[key]
    })
}

const testData = {
    "a.b.c": "hello",
    "a.b.e": "你好",
    "a.0.0.m": "nihao"
}

const str = Object.keys(testData)
const obj = {}

str.forEach(str => {
    const hasNumber = /\d/.test(str)
    const keys = str.split('.')
    if (hasNumber) {
        strToArray(testData[str], obj, keys)
    } else {
        strToObj(testData[str], obj, keys)
    }
})

console.log(JSON.stringify(obj))
