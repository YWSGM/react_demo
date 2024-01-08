import React, { useEffect, useImperativeHandle, useRef } from 'react'

const TestCom = React.forwardRef((props, ref) => {
    useEffect(() => {
        console.log('初始化')

        return () => {
            console.log('销毁了')
        }
    }, [])

    const handleRef = () => {

    }

    // Promise.race()

    //

    useImperativeHandle(ref, () => ({
        handleRef
    }))

    return (
        <div>哈哈哈</div>
    )
})

const Test = () => {
    const ref = useRef(null)
    return (
        <div>
            <TestCom
                ref={(TestComRef) => {
                    console.log(ref)
                    ref.current = TestComRef
                }}
            />
        </div>
    )
}
