import { useEffect, useRef, useState } from "react"

export default function Outside(params) {

    const [show, setShow] = useState(false)
    const boxRef = useRef(null)

    useEffect(() => {
        function handleclick(e) {
            if (boxRef.current && !boxRef.current.
                contains(e.target)) {
                console.log(e)
                setShow(false)
            }
        }
        addEventListener('mousedown', handleclick)

        return () => {
            removeEventListener('mousedown', handleclick)
        }
    }, [])

    return (
        <>
            {show && <div ref={boxRef}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, vitae adipisci corporis rerum expedita deleniti repellendus enim placeat sed autem quidem vero quae error ipsam, magni mollitia? Officiis, assumenda saepe!</div>}
            <button onClick={() => setShow(true)}>show</button>
        </>
    )
}

// import { useEffect, useRef, useState } from "react";

// export default function Outside() {
//     const [show, setShow] = useState(false);
//     const boxRef = useRef(null);

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (boxRef.current && !boxRef.current.contains(event.target)) {
//                 setShow(false);
//             }
//         }

//         // Attach listeners
//         document.addEventListener("mousedown", handleClickOutside);

//         return () => {
//             // Cleanup
//             document.removeEventListener("mousedown", handleClickOutside);
//         };
//     }, []);

//     return (
//         <>
//             {show && (
//                 <div
//                     ref={boxRef}
//                     style={{
//                         padding: "20px",
//                         backgroundColor: "lightblue",
//                         marginBottom: "10px"
//                     }}
//                 >
//                     This is the box. Click outside to close.
//                 </div>
//             )}
//             <button onClick={() => setShow(true)}>Show</button>
//         </>
//     );
// }
