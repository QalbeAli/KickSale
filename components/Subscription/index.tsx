import Image from 'next/image'
import React from 'react'
import Images from '../../public/images/Images'

const Subscription = () => {
  return (
    <>
    <div className='my-10'>
      <section className=" mx-10 mt-20 md:mx-5 ">
        <div
          className="heroImage  mx-auto grid max-w-6xl grid-cols-1 place-content-center place-items-center rounded-3xl border-4 border-[#CB3694] md:h-[500px] md:grid-cols-2 md:rounded-[50px] lg:rounded-[75px]"
          style={{
            backgroundImage: `url(images/newsbg2.png)`,
            backgroundSize: 'cover ',
          }}
        >
          <div className="overflow-y-visible md:relative  md:-top-[50px]">
            <Image width={550} height={600} src={Images.newslogo} alt="" />
          </div>
          <div className="flex flex-col space-y-5 p-5">
            <h2 className=" text-lg font-extrabold uppercase md:text-3xl md:font-bold lg:text-4xl">
              Follow & Subscribe to our Newsletter.
            </h2>
            <p className="pb-8 font-semibold">
              Ready to get started, Get our Newsletter and join the Community!
            </p>
            <div className="flex max-w-lg justify-between  rounded-full border bg-[#16182D] px-3 py-2">
              <input
                type="text"
                placeholder="Your Email"
                className="mr-2 w-full rounded-full border-none bg-[#16182D] outline-none focus:border-none focus:outline-none"
              />
              <button className=" rounded-full bg-[#5133D5] px-2 py-1  text-sm font-bold capitalize lg:px-5 lg:py-2 lg:text-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Subscription
