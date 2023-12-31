import React from 'react'
import HomeSearch from '../components/landingPage/HomeSearch'
import ViewAndShare from "../components/landingPage/ViewAndShare"
import HomeShare from "../components/landingPage/HomeShare"
import HomeAbout from '../components/landingPage/HomeAbout'
import HomeTopComments from '../components/landingPage/HomeTopComments'

const Home = () => {
  return (
    <div className=''>

    <div className='mb-14 relative'>
        {/* Search Section */}
        <HomeSearch/>
        {/* Navigate to home screen */}
        <ViewAndShare/>
    </div>

    {/* Share with your friends */}
    <HomeShare/>

    {/* Website description and top comments */}
    <div className='flex w-10/12 max-w-[1200px] mx-auto mb-32 gap-16 '>
        <HomeAbout/>
        <HomeTopComments/>
    </div>
    
    {/* Footer copyright section */}
    <div className='mx-auto w-10/12 max-w-[1200px] my-10'>
        <p className='text-[14px] tracking-wider opacity-90 text-richwhite-50'>© AniVerse All rights reserved.</p>
    </div>
    </div>
  )
}

export default Home