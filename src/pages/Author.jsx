import { FaBook, FaGlobe, FaUsers, FaTrophy } from 'react-icons/fa'

function Author() {
  const stats = [
    { icon: FaBook, title: "Bestselling", subtitle: "1 Book Published" },
    { icon: FaUsers, title: "10,000+", subtitle: "Clients Helped" },
    { icon: FaGlobe, title: "15+", subtitle: "Countries" },
    { icon: FaTrophy, title: "12", subtitle: "Industry Awards" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Left Section - Author Profile */}
          <div className="relative lg:col-span-2">
            {/* Decorative Elements Behind Card */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-yellow-200 rounded-2xl opacity-60 z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-200 rounded-full opacity-60 z-0"></div>
            
            {/* Background Card */}
            <div className="relative bg-white rounded-2xl p-12 min-h-[550px] shadow-lg z-10">
              {/* Content */}
              <div className="flex flex-col items-center text-center pt-16">
                {/* Profile Image with Initials */}
                <div className="w-32 h-32 bg-purple-500 rounded-full flex items-center justify-center mb-8 shadow-lg">
                  <span className="text-white text-4xl font-bold">CT</span>
                </div>
                
                <h2 className="font-serif text-2xl font-bold text-gray-800 mb-2">Mr. Chahat Tiwari</h2>
                <p className="text-purple-600 font-medium mb-16">Financial Expert & Author</p>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute bottom-8 left-8 flex items-center bg-white rounded-xl px-4 py-3 shadow-xl">
                <div className="w-8 h-8 bg-purple-500 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xs">R</span>
                </div>
                <div className="text-black">
                  <div className="text-md font-semibold">20+ Years</div>
                  <div className="text-xs">Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Section - Author Info */}
          <div className="lg:col-span-3">
            {/* Badge */}
            <div className="inline-block bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Meet the Author
            </div>
            
            <h1 className="font-serif text-4xl font-semibold text-gray-900 mb-4">Mr. Chahat Tiwari</h1>
            <p className="text-xl text-purple-600 mb-8">Financial Strategist | Wealth Coach | Bestselling Author</p>
            
            <div className="space-y-4 text-gray-700 mb-8">
              <p>
                With over two decades of experience in financial planning and wealth management, 
                Rajesh Sharma has helped thousands of individuals transform their relationship with money.
              </p>
              <p>
                His journey from a middle-class upbringing to becoming a self-made crorepati gives him 
                unique insights into the challenges and opportunities that await aspiring wealth builders.
              </p>
              <p>
                As a certified financial planner and former investment banker, Rajesh combines 
                theoretical knowledge with practical wisdom, making complex financial concepts 
                accessible to everyone.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-purple-400">
                  <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center mr-4">
                    <stat.icon className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-serif text-lg text-gray-800">{stat.title}</div>
                    <div className="text-sm text-gray-600">{stat.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Author
