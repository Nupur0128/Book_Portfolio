import { FaStar } from "react-icons/fa6";
import { RiDoubleQuotesR } from "react-icons/ri";
import '../animations.css';
import { useState } from "react";
import AddReview from "./AddReview";

function Review() {
  const [addReview, setAddReview] = useState(false)

  const reviews = [
    {
      name: 'Amit Verma',
      role: 'Startup Founder, Mumbai',
      avatar: 'AV',
      rating: 5,
      comment: 'This book changed my entire perspective on wealth building. The strategies are practical and applicable immediately. Within a year, I saw my savings grow by 300%!'
    },
    {
      name: 'Priya Patel',
      role: 'IT Professional, Pune',
      avatar: 'PP',
      rating: 5,
      comment: 'Finally, a finance book written for Indians by an Indian! The examples are relatable, and the advice is culturally relevant. A must-read for every young professional.'
    },
    {
      name: 'Rahul Mehta',
      role: 'Doctor, Delhi',
      avatar: 'RM',
      rating: 5,
      comment: 'I\'ve read many finance books, but this one stands out. The chapter on tax optimization alone saved me lakhs. Worth every rupee and more!'
    },
    {
      name: 'Amit Verma',
      role: 'Startup Founder, Mumbai',
      avatar: 'AV',
      rating: 5,
      comment: 'This book changed my entire perspective on wealth building. The strategies are practical and applicable immediately. Within a year, I saw my savings grow by 300%!'
    },
    {
      name: 'Priya Patel',
      role: 'IT Professional, Pune',
      avatar: 'PP',
      rating: 5,
      comment: 'Finally, a finance book written for Indians by an Indian! The examples are relatable, and the advice is culturally relevant. A must-read for every young professional.'
    },
    {
      name: 'Rahul Mehta',
      role: 'Doctor, Delhi',
      avatar: 'RM',
      rating: 5,
      comment: 'I\'ve read many finance books, but this one stands out. The chapter on tax optimization alone saved me lakhs. Worth every rupee and more!'
    }
  ]

  return (
    <div className="bg-gradient-to-br from-purple-100 via-white to-purple-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">Reader Reviews</div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Loved by <span className="text-purple-500">50,000+</span> Readers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of readers who have transformed their financial future with the strategies from this book.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:divide-x divide-gray-300 gap-6 mb-12">
          <div className="font-serif text-center px-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-4xl font-bold text-gray-800">4.9</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-lg" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 text-sm">Average Rating</p>
          </div>
          <div className="font-serif text-center px-6">
            <div className="text-4xl font-bold text-gray-800 mb-2">12,000<span className="text-purple-500">+</span></div>
            <p className="text-gray-600 text-sm">Reviews</p>
          </div>
          <div className="font-serif text-center px-6">
            <div className="text-4xl font-bold text-gray-800 mb-2">98<span className="text-purple-500">%</span></div>
            <p className="text-gray-600 text-sm">Recommend</p>
          </div>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg relative transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-400">
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-purple-400 rounded-xl flex items-center justify-center text-white font-bold text-lg">
               <RiDoubleQuotesR />
              </div>

              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{review.comment}"</p>
              <hr/>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setAddReview(true)}
            className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition-colors"
          >
            Add Review
          </button>
        </div>

        <AddReview isOpen={addReview} onClose={() => setAddReview(false)} />
      </div>
    </div>
  )
}

export default Review