import React from 'react'
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Founded in Melbourne, Australia and loved across the globe, we're known for our effortlessly wearable and timeless collections that celebrate modern femininity.
            We trade as Forever New in over 25 countries and as Ever New in Canada, the US and the Philippines with almost 400 retail and concession stores globally.
          </p>
          <p>While we’re a global brand, behind the scenes we’re a collective of close friends: fashion enthusiasts, designers and in-store experts, who work non-stop to help our customers embrace and elevate their own personal style.
            Each collection is designed in Australia with a unique blend of seasonal trends, feminine silhouettes and of the moment detailing, giving you the confidence to feel beautiful in every moment.</p>
          <b className='text-gray-700'>Our Mission</b>
          <p>Forever New cares about the people who make our products and their working conditions.
            We are committed to ensuring that, where possible the sourcing of raw materials used
            in our products is done in a responsible way.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Our five pillars of change will guide us to a future where fashion makes
            meaningful contributions to our industry, culture, communities and
            environment.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We celebrate diversity and strive to create change through community initiatives</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exception Customer Service:</b>
          <p className='text-gray-600'>Our customers expect this approach from us, and that is why we have created
          Forever New Conscious.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About