import React from 'react'
import IgImg1 from '../public/ig-img-1.png';
import IgImg2 from '../public/ig-img-2.png';
import IgImg3 from '../public/ig-img-3.png';
import IgImg4 from '../public/ig-img-4.png';
import IgImg5 from '../public/ig-img-5.png';
import IgImg6 from '../public/ig-img-6.png';
import InstagramImg from './InstagramImg';
import Link from 'next/link';


const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'><Link href='https://www.instagram.com/wolfraskin/'>@Wolf Raskin</Link></p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={IgImg1} />
            <InstagramImg socialImg={IgImg2} />
            <InstagramImg socialImg={IgImg3} />
            <InstagramImg socialImg={IgImg4} />
            <InstagramImg socialImg={IgImg5} />
            <InstagramImg socialImg={IgImg6} />
        </div>
    </div>
  )
}

export default Instagram