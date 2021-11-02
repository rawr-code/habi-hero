import { useEffect } from 'react'

const useWindowResizeEffect = (listener: () => void) => {
    useEffect(() => {
        window.addEventListener('resize', listener)
        return () => {
            window.removeEventListener('resize', listener)
        }
    }, [listener])
}

export default useWindowResizeEffect
