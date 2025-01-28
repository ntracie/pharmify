import { CameraIcon, FacebookIcon, Home, House, Instagram, LocateIcon, MessageCircle, Plus, Twitter, TwitterIcon, User } from 'lucide-react'
import React from 'react'

export default function Head() {
  return (
    <div >
      <div className='w-full p-4  bg-[#023e8a] text-white font-semibold  flex justify-between'>
      <div className='flex gap-4'>
     <a href=""><Twitter/></a>
      <a href=""><FacebookIcon/></a>
      <a href=""><Instagram/></a>
      <a href=""><CameraIcon/></a>
      </div>
      <div className='flex gap-2
      '>
        <a href=""><LocateIcon/></a>
        <p>NO.58,East Modsontreet,UK 4608</p>
      </div>
      <div className='flex gap-2'>
        <a href=""><MessageCircle/></a>
        <p>info@gmail.com</p>
      </div>
    </div>
    <div className='font-semibold flex justify-between  p-4 bg-white w-full '>
    <div className='flex gap-3 text-1.9xl'>
     <a href="">Home</a>
     <a href="">Shop</a>
     <a href="">About</a>
     <a href="">Page</a>
     <a href="">Contact</a>
    </div>
    <div className='flex gap-4'>
    <a href=""><Plus/></a>
      <p className=''>Pharmify </p>
      <a href="">search bar</a>
    </div>
    <div className='flex gap-3 '>
      
      <a href=""><House/></a>
      <a href=""><User/></a>
      <a href="">US</a>
    </div>
    </div>
    
    </div>
  )
}
