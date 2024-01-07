import { BringToFront, Contact, MapPin, Shell, ShieldHalf } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../bar/Footer'

const HomeSummery = () => {

    const item=[
        {
            name:'Peacfull',
            icon:<Shell/>
        },
        {
            name:'Unique',
            icon:<ShieldHalf />
        },
        {
            name:'Family-Freindly',
            icon:<Contact/>
        },
        {
            name:'Stylish',
            icon:<BringToFront />
        },
        {
            name:'Central',
            icon:<MapPin />
        }
    ]
  return (
    <>
    <div className='w-1/2 mx-auto mt-20'>
        <h1 className='text-center text-4xl font-bold'>Next, let describe your house</h1>
        <p className='text-xl text-center my-6'>Choose up to 2 highlights. Well use these to get your description started.</p>
        <div className='grid grid-cols-3 gap-4'>
            {
                item.map((ele,index)=>{
                    return <div key={index+ele.name} className='border-2 rounded-full p-4 flex items-center cursor-pointer border-neutral-600 gap-3'>
                        <span>{ele.icon}</span>
                        <span className='text-xl'>{ele.name}</span>
                    </div>
                })
            }
        </div>
    </div>
    <Link to={'/host/description'}><Footer/></Link>
    </>
  )
}

export default HomeSummery