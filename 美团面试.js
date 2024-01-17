///*
// getType(123) // number
// getType(undefined) // undefined
// getType(null) // null
// getType(() => {}) // function
// getType({}) // object
// getType([]) // array
// getType(new Date()) // date
// */
const getType = (param) => {
    if (param === null) return 'undefined'
    if (typeof param === 'undefined') return 'undefined'
    if (param instanceof Date ) return 'date'
    if (param instanceof Number ) return 'number'
    if (param instanceof Function ) return 'function'
    if (Array.isArray(param)) return 'array'
    if (typeof param === 'object') return 'object'
}

console.log(getType([]));

// parseUrl('https://www.meituan.com/index.html?a=1&b=2')
const parseUrl = (url) => {
    const obj = {}
    if (url.includes('?')) {
        const urlParams = url.split('?')[1].split('#')[0]
        const paramsArr = urlParams.split('&')
        paramsArr.forEach(p => {
            const param = p.split('=')
            obj[param[0]] = param[1]
        })
    }
    return obj
}

console.log(parseUrl('https://www.meituan.com/index.html?a=1&b=2'));

const list = [
    {
        value: '1',
        children: [
            {
                value: '1.1',
            },
            {
                value: '1.2',
                used: false,
            },
            {
                value: '1.3',
                children: [
                    {
                        value: '1.3.1',
                    },
                    {
                        value: '1.3.2',
                        used: false,
                    },
                    {
                        value: '1.3.3',
                    },
                ],
            },
        ],
    },
    {
        value: '2',
        used: false,
        children: [
            {
                value: '2.1',
            },
            {
                value: '2.2',
                used: false,
            },
        ],
    },
    {
        value: '3',
        used: true,
        children: [
            {
                value: '3.1',
            },
            {
                value: '3.2',
                used: false,
            },
        ],
    },
]

const deleteUsed = (list) => {
    const newList = [...list]
    newList.forEach((item, index) => {
        if (item.used === false) {
            newList.splice(index, 1)
        }
        if (item.children && Array.isArray(item.children)) {
            item.children = deleteUsed(item.children)
        }
    })
    return newList
}

console.log(JSON.stringify(deleteUsed(list)));
// console.log(JSON.stringify(list))

const t = (cb, params, time) => {
    let timer = null
    let count = 0
    return (cb, params) => {
        if (timer) clearTimeout(timer)
        if (count === 0) cb && cb(params)
        count++
        timer = setTimeout(() => {
            cb && cb(params)
            count = 0
        }, time)
    }
}
