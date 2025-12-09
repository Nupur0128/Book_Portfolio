import { FaStar } from "react-icons/fa6";
import user from '../assets/images/user-img.jpg'
import '../animations.css';
import { useState } from "react";
import AddReview from "./AddReview";

function Review() {

  const [addReview, setAddReview] = useState(false)

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
    <div className='pb-10 px-4 bg-white'>
      <h1 className="text-4xl text-gray-700 font-semibold text-center pt-2 md:pt-10 pb-10">What Readers Are Saying</h1>
      <div className='container mx-auto gap-4 items-center grid grid-cols-1 md:grid-cols-4'>
        {
          reviews.map((review, index) => (
            <div
              key={index}
              className='mb-2 p-6 border border-blue-400 rounded-xl shadow-sm bg-white cursor-pointer animate-fade-in-scale-small hover-slide-up'
              style={{ animationDelay: `${index * 0.08}s`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <div className='flex items-center'>
                <img src={review.img} alt={review.reviewer} className='w-10 h-10 border-2 border-blue-400 rounded-full mr-3' />
                <h3 className='text-2xl font-semibold text-gray-800'>{review.reviewer}</h3>
              </div>
              <div className='flex text-blue-500 mt-2 mb-2'>
                {Array.from({ length: review.rating }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className='text-gray-600'>{review.comment}</p>
            </div>
          ))
        }
      </div>
      <div>
        <div className='flex justify-center mt-10 mr-8'>
          <button onClick={() => setAddReview(true)} className='md:w-auto border-2 border-blue-400 text-blue-800 p-4 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition-colors'>Add Review</button>
        </div>

        <AddReview isOpen={addReview} onClose={() => setAddReview(false)} />
      </div>
    </div>
  )
}

export default Review