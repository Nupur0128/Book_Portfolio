import AuthorImg from '../assets/images/author-img.jpg'
import '../animations.css'

function Author() {

  const blockDetails = [
    { label: 'Books', value: '15' },
    { label: 'Copies Sold', value: '12M+' },
    // { label: 'Awards', value: '25' },
  ]
  return (
    <div className='min-h-screen flex items-center bg-[#1D3854]'>
      <div className='container mx-auto '>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-8 items-center'>

          {/* image section */}
          <div className='md:col-span-4 flex flex-col items-center mt-16 md:mt-0'>
            <img src={AuthorImg} alt='The Silent Voyager' className='w-64 h-64 border-4 border-blue-400 rounded-full object-cover mb-8' />

            {/* details blocks */}
            <div className='flex gap-6'>
              {blockDetails.map((item, index) => (
                <div
                  key={index}
                  className='rounded-2xl bg-gradient-to-b from-blue-300 to-white w-full bg-white px-6 py-5 text-center shadow-md border border-gray-100 min-w-[100px] cursor-pointer animate-scale-in hover-scale-rotate'
                  style={{ animationDelay: `${index * 0.2}s`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  <div className='text-3xl font-bold text-gray-900 mb-1'>{item.value}</div>
                  <div className='text-sm text-gray-500 font-medium'>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* content section*/}
          <div className='md:col-span-8 text-center md:text-left'>
            <h1 className='text-4xl md:text-5xl font-semibold text-white mb-4'>Author Name</h1>
            <p className='text-gray-300 mb-8 leading-relaxed pl-2 pr-2 md:pl-0 md:pr-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores veritatis, laudantium sapiente doloribus aspernatur sed nihil rem error iste quia, exercitationem, nulla sit illum maxime facere dolorem repellendus qui totam tempora necessitatibus ab sunt omnis atque? Eligendi nostrum sint vero suscipit delectus eveniet quaerat aliquid mollitia. Explicabo error quibusdam blanditiis?</p>
            <p className='text-gray-300 mb-8 leading-relaxed pl-2 pr-2 md:pl-0 md:pr-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora repellat est optio pariatur molestias quos assumenda, id alias autem, soluta aperiam illum recusandae, ea nam nisi non ducimus incidunt corrupti sequi? Eum nisi nostrum perferendis alias. Ab quod soluta, voluptatem, illum sed vitae error, iusto perspiciatis expedita tenetur voluptate! Culpa.</p>
            <div className='space-y-2 mb-16 md:mb-0'>
              <p className='text-lg text-white mb-2'>Author Email - Email</p>
              <p className='text-lg text-white mb-2'>Other Books - Additional Details</p>
              <p className='text-lg text-white mb-2'>connect with author - Social media app</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Author