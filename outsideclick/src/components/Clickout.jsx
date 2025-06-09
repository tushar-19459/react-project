import { useEffect } from "react"

export default function Clickout(ref, handler) {
    useEffect(() => {
        function listener(event) {
            if (!ref.current ) {
                console.log(ref.current.contains(event.target))
                return
            } else {
                handler(event)
            }
        }
        document.addEventListener("mousedown", listener)
        document.addEventListener("touchstart", listener)

        return () => {
            document.removeEventListener("touchstart", listener)
            document.removeEventListener("mousedown", listener)

        }
    }, [ref, handler])
}