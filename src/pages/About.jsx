import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FaUserGear } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { useEffect, useState } from 'react';
import { IoIosBulb } from "react-icons/io";

import '../animations.css';

function About() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      size: 3 + Math.random() * 6
    }))
    setParticles(newParticles)
  }, [])

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
      icon: <IoIosBulb />,
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
    <div className='relative min-h-screen flex justify-center items-center text-center px-4 overflow-hidden' style={{ background: 'linear-gradient(to right, #05080eff, #1e1b4b, #191595ff)' }}>
      {particles.map(p => (
        <div
          key={p.id}
          className='absolute rounded-full bg-purple-500 opacity-10 animate-float'
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            bottom: '-20px',
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)'
          }}
        />
      ))}
      <div className='max-w-4xl mt-20 z-10'>
        <h1 className='text-4xl md:text-5xl font-semibold text-white mb-4 drop-shadow-lg'>About the Book</h1>
        <p className='text-gray-200 mb-8 leading-relaxed drop-shadow-md'>"How to Make 1 Crore" is your definitive guide to mastering personal finance and building wealth. This book provides practical, step-by-step guidance to help you navigate the complexities of investing and financial planning.</p>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 max-w-md mx-auto p-4 rounded-xl shadow-2xl animate-fade-in-scale">
          {details.map((item, index) => (
            <div key={index} className="py-3 border-b border-white/20 last:border-none flex justify-between">
              <span className="text-gray-300 font-semibold">{item.label}:</span>
              <span className="text-white">{item.value}</span>
            </div>
          ))}
        </div>

        {/* about section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {
            about.map((item, index) => (
              <div
                key={index}
                className={`group mt-10 cursor-pointer ${index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}`}
                style={{animationDelay: `${index * 0.15}s`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-800 rounded-lg opacity-50 group-hover:opacity-100 blur transition' style={{ background: 'linear-gradient(to left, #05080eff, #191595ff)' }}/>
                <div className='relative bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-2xl hover-scale-small'>
                  <div className='text-4xl text-white bg-purple-500/30 p-2 rounded-full mb-4 mx-auto w-fit'>{item.icon}</div>
                  <h2 className='text-2xl font-semibold text-white drop-shadow-lg'>{item.title}</h2>
                  <p className='text-gray-200 leading-relaxed drop-shadow-md'>{item.paragraph}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default About