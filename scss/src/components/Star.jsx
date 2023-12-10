import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
const Star = () => {
    const [rating, setRating] = useState(100) // initial rating value

    // Catch Rating value
    const handleRating = (e) => {
      setRating(e)
    }
  
    return (
      <Rating
        tooltipArray={['Nul', 'Bof', 'Cool', 'Super bien', 'Masterclass']}
        transition
        showTooltip
        onClick={handleRating}
        ratingValue={rating} 
      />
    )
}

export default Star;