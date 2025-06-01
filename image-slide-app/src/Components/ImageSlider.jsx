import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

export default function ImageSlider({ url, page, limit }) {
    const [images, setImg] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchimages(url) {
        try {
            setLoading(true)
            const responce = await fetch(url)
            const data = await responce.json()
            console.log(data)
            setImg(data)

        } catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        console.log("useeffect")
        if (url !== '') {
            fetchimages(`${url}?page=${page}&limit=${limit}`)
        }
    }, [url])


    function handlenext(params) {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    function handleprev(params) {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }


    if (loading)
        return <div><h1>Loading...</h1></div>

    if (error !== null)
        return <div><h1>error:{error}</h1></div>

    return (

        <div className="main">
            <BsArrowLeftCircleFill onClick={handlenext} className="arrow leftButton"></BsArrowLeftCircleFill>
            <div className="image-div">
                {images.length > 0 && (images.map((img, index) =>
                    <img key={index} src={img.download_url} className={currentSlide === index ? "current-image" : "current-image hide-current-image"} alt="" />
                ))}
            </div>
            <BsArrowRightCircleFill onClick={handleprev} className="arrow rightButton"></BsArrowRightCircleFill>
            <div className="circle-indicator">
                <span className="indicator">
                    {images.map((_, index) =>
                        <button onClick={() => setCurrentSlide(index)} className={currentSlide === index ? "indicator-button active" : "indicator-buttons hide-indicator-buttons"} key={index}></button>
                    )}
                </span>
            </div>
        </div>

    )
}
