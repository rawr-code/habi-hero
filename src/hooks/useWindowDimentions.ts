import { useState, useCallback } from 'react'
import useWindowResizeEffect from './useWindowResizeEffect'

const useWindowDimentions = () => {
    const [windowDimentions, setWindowDimentions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useWindowResizeEffect(useCallback(() => {
        setWindowDimentions({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }, []))

    return windowDimentions
}

export default useWindowDimentions
