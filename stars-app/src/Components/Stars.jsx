import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
function Stars({ noStars = 5 }) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleclick(index) {
        setRating(index)
    }
    function mouseenter(index) {
        setHover(index)
    }
    function mouseleave(index) {
        setHover(rating)
    }

    return (
        <>
            <h1>hellow</h1>
            {[...Array(noStars)].map((_, index) => {
                index++
                return <FaStar className={index <= (hover || rating) ? 'active' : 'inactive'} key={index} onClick={() => handleclick(index)} onMouseEnter={() => mouseenter(index)} onMouseLeave={() => mouseleave(index)}></FaStar>
            }
            )}
        </>
    )
}
export default Stars