import { FaStar, FaHeart } from "react-icons/fa6";
import user from '../assets/images/user-img.jpg'
import '../animations.css';
import { useState, useEffect } from "react";
import AddReview from "./AddReview";

function Review() {
  const [addReview, setAddReview] = useState(false)
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const newHearts = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 15 + Math.random() * 25
    }))
    setHearts(newHearts)
  }, [])

  const reviews = [
    {
      img: user,
      reviewer: 'John Doe',
      rating: 5,
      comment: 'An absolute masterpiece! Could not put it down.'
    },
    {
       img: user,
      reviewer: 'Jane Smith',
      rating: 4,
      comment: 'A thrilling read with well-developed characters.'
    },
    {
       img: user,
      reviewer: 'Alice Johnson',
      rating: 2,
      comment: 'A gripping tale of solitude and discovery in space.'
    },
    {
       img: user,
      reviewer: 'Bob Brown',
      rating: 4,
      comment: 'A must-read for anyone interested in space exploration.'
    },
    {
       img: user,
      reviewer: 'Charlie Davis',
      rating: 5,
      comment: 'An unforgettable journey through the cosmos.'
    },
    {
      img: user,
      reviewer: 'John Doe',
      rating: 6,
      comment: 'An absolute masterpiece! Could not put it down.'
    },
  ]
  return (
    <div className='relative pb-10 px-4 overflow-hidden' style={{ background: 'linear-gradient(to bottom, #0f172a, #1e1b4b, #312e81)' }}>
      {hearts.map(heart => (
        <FaHeart
          key={heart.id}
          className='absolute text-pink-400 opacity-20 animate-float'
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            bottom: '-30px',
            filter: 'drop-shadow(0 0 10px rgba(244, 114, 182, 0.5))'
          }}
        />
      ))}
      <h1 className="text-4xl text-white font-semibold text-center pt-2 md:pt-10 pb-10 drop-shadow-lg z-10">What Readers Are Saying</h1>
      <div className='container mx-auto gap-4 items-center grid grid-cols-1 md:grid-cols-4'>
        {
          reviews.map((review, index) => (
            <div
              key={index}
              className='mb-2 p-6 border border-white/20 rounded-xl shadow-2xl bg-white/10 backdrop-blur-md cursor-pointer animate-fade-in-scale-small hover-slide-up z-10'
              style={{ animationDelay: `${index * 0.08}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <div className='flex items-center'>
                <img src={review.img} alt={review.reviewer} className='w-10 h-10 border-2 border-purple-400 rounded-full mr-3' />
                <h3 className='text-2xl font-semibold text-white drop-shadow-md'>{review.reviewer}</h3>
              </div>
              <div className='flex text-yellow-400 mt-2 mb-2'>
                {Array.from({ length: review.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className='text-gray-200 drop-shadow-sm'>{review.comment}</p>
            </div>
          ))
        }
      </div>
      <div>
        <div className='flex justify-center mt-10 mr-8'>
          <button onClick={() => setAddReview(true)} className='border-2 border-white text-white p-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors shadow-lg z-10'>Add Review</button>
        </div>

        <AddReview isOpen={addReview} onClose={() => setAddReview(false)} />
      </div>
    </div>
  )
}

export default Review