import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

// export default function ImageSlider({ url, page, limit }) {
//     const [images, setImg] = useState([])
//     const [currentSlide, setCurrentSlide] = useState(0)
//     const [error, setError] = useState(null)
//     const [loading, setLoading] = useState(false)

//     async function fetchimages(url) {
//         try {
//             setLoading(true)
//             const responce = await fetch(url)
//             const data = await responce.json()
//             console.log(data)
//             setImg(data)

//         } catch (error) {
//             setError(error)
//         }
//         finally {
//             setLoading(false)
//         }
//     }

//     useEffect(() => {
//         console.log("useeffect")
//         if (url !== '') {
//             fetchimages(`${url}?page=${page}&limit=${limit}`)
//         }
//     }, [url])


//     function handlenext(params) {
//         setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
//     }
//     function handleprev(params) {
//         setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
//     }


//     if (loading)
//         return <div><h1>Loading...</h1></div>

//     if (error !== null)
//         return <div><h1>error:{error}</h1></div>

//     return (
//         <div className="main">
//             <BsArrowLeftCircleFill onClick={handlenext} className="arrow leftButton"></BsArrowLeftCircleFill>
//             <div className="image-div">
//                 {images.length > 0 && (images.map((img, index) =>
//                     <img key={index} src={img.download_url} className={currentSlide === index ? "current-image" : "current-image hide-current-image"} alt="" />
//                 ))}
//             </div>
//             <BsArrowRightCircleFill onClick={handleprev} className="arrow rightButton"></BsArrowRightCircleFill>
//             <div className="circle-indicator">
//                 <span className="indicator">
//                     {images.map((_, index) =>
//                         <button onClick={() => setCurrentSlide(index)} className={currentSlide === index ? "indicator-button active" : "indicator-buttons"} key={index}></button>
//                     )}
//                 </span>
//             </div>
//         </div>
//     )
// }

export default function ImageSlider({ url, page, limit }) {

    const [loading, setLoading] = useState(false)
    const [slide, setSlide] = useState(0)
    const [error, setError] = useState(null)
    const [images, setImages] = useState([])

    async function apicall(url) {
        try {
            setLoading(true)
            const responce = await fetch(url)
            const data = await responce.json()
            console.log(data)
            setImages(data)

        } catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url)
            apicall(`${url}?page=${page}&limit=${limit}`)
    }, [url])


    if (error) {
        return (
            <div>Error:{error}</div>
        )
    }
    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    function preimg(params) {
        console.log("pre "+slide)
        setSlide(slide === 0 ? images.length - 1 : slide - 1)
    }
    function nextimg(params) {
        console.log("next "+slide)
        setSlide(slide === images.length - 1 ? 0 : slide + 1)
    }

    return (

            <div className="main">
                <BsArrowLeftCircleFill className="arrow left-button" onClick={preimg}></BsArrowLeftCircleFill>
                <div className="image-div">
                    {images.map((data, index) =>
                        <img src={data.download_url} className={slide===index?'current-image':'current-image hide'} key={index} alt="" />
                    )}
                </div>
                <BsArrowRightCircleFill className=" arrow right-button" onClick={nextimg}></BsArrowRightCircleFill>
                <div className="indicator">
                    {images.map((_, index) =>
                        <button key={index} onClick={()=>setSlide(index)} className={slide===index?"bottom-button active":"bottom-button "}  ></button>
                    )}
                </div>
            </div>
    )
}
