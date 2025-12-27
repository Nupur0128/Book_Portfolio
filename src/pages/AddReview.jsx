import { toast } from "react-toastify";

function AddReview({ isOpen, onClose, onReviewAdded }) {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const review = {
            id: Date.now(),
            name: formData.get('name'),
            rating: formData.get('rating'),
            comment: formData.get('comment'),
            date: new Date().toLocaleDateString()
        };
        
        const existingReviews = JSON.parse(localStorage.getItem('reviews') || '[]');
        existingReviews.push(review);
        localStorage.setItem('reviews', JSON.stringify(existingReviews));
        
        toast.success("Review Added Successfully ✅");
        onReviewAdded?.(review);
        e.target.reset();
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
            <div className="max-w-2xl w-full mx-4 p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-xl" onClick={(e) => e.stopPropagation()}>
                <h2 className="font-serif text-2xl font-semibold mb-6 text-black">Add Your Review</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-black mb-1">Name:</label>
                        <input type="text" name="name" required placeholder='Enter your Name' className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-1">Rating:</label>
                        <input type="number" name="rating" min="1" max="5" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-1">Comment:</label>
                        <textarea name="comment" required placeholder="Write your comment here" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-32 resize-none"></textarea>
                    </div>
                    <div className="flex gap-4">
                        <button type="button" onClick={onClose} className="w-full bg-red-600 text-black py-2 px-4 rounded-md hover:bg-red-800 transition-colors font-medium">Cancel</button>
                        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">Submit Review</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddReview