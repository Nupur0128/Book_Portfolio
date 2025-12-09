import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FaUserGear } from "react-icons/fa6";
import { FcIdea } from "react-icons/fc";
import { HiUserGroup } from "react-icons/hi";
import '../animations.css';

function About() {

  const details = [
    { label: "Name", value: "Book Name" },
    { label: "Publisher", value: "Cosmos Publishing" },
    { label: "Languages", value: "United English" },
    { label: "Page Count", value: "320 Pages" },
    { label: "Release Date", value: "01/01/2026" },
  ];

  const about = [
    {
      icon: <MdOutlineFlightTakeoff />,
      title: 'Actionable Strategies',
      paragraph: `Practical, step-by-step guidance you can apply immediately to start building your wealth and securing your financial future.`
    },
    {
      icon: <FaUserGear />,
      title: 'Expert Insights',
      paragraph: `Learn from years of financial expertise and proven methods that have helped countless others achieve their financial goals.`
    },
    {
      icon: <FcIdea />,
      title: 'Financial Freedom',
      paragraph: `This book serves as your personal roadmap to achieving financial freedom, empowering you to make informed decisions.`
    },
    {
      icon: <HiUserGroup />,
      title: 'For Every Investor',
      paragraph: `Whether you're a beginner or an experienced investor, this book offers valuable insights and strategies for everyone.`
    }
  ]

  return (
    <div className='min-h-screen flex justify-center items-center text-center px-4 bg-gradient-to-b from-blue-50 to-white'>
      <div className='max-w-4xl mt-20'>
        <h1 className='text-4xl md:text-5xl font-semibold text-gray-700 mb-4'>About the Book</h1>
        <p className='text-gray-600 mb-8 leading-relaxed'>"How to Make 1 Crore" is your definitive guide to mastering personal finance and building wealth. This book provides practical, step-by-step guidance to help you navigate the complexities of investing and financial planning.</p>
        {/* <hr className='my-8 text-yellow-600' /> */}
        <div className="bg-gradient-to-b from-blue-100 to-white w-full bg-white max-w-md mx-auto p-4 rounded-xl shadow-md animate-fade-in-scale">
          {details.map((item, index) => (
            <div key={index} className="py-3 border-b border-blue-200 last:border-none flex justify-between">
              <span className="text-gray-500 font-semibold">{item.label}:</span>
              <span className="text-gray-700">{item.value}</span>
            </div>
          ))}
        </div>

        {/* about section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {
            about.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r from-blue-100 to-white w-full bg-white mt-10 text-left bg-white p-6 rounded-lg shadow-md text-center cursor-pointer hover-scale-small ${index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}`}
                style={{ animationDelay: `${index * 0.15}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <div className='flex justify-center mb-4'>
                  <div className='text-4xl text-blue-700 bg-blue-100 p-2 rounded-full'>{item.icon}</div>
                </div>
                <h2 className='text-2xl font-semibold text-gray-800'>{item.title}</h2>
                <p className='text-gray-600 leading-relaxed'>{item.paragraph}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default About