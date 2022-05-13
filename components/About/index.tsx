import React from 'react'

const About = () => {
  return (
    <div>
      <section className="mx-10 mt-10 flex h-screen items-center justify-center md:mt-20">
        <div>
          <h4 className="text-center text-xl font-bold uppercase text-[#CB3694] md:text-2xl ">
            About studio
          </h4>
          <h2 className="p-3 text-center text-3xl font-bold md:text-4xl">
            Say Wow to Our New KickSale Display.
          </h2>
          <p className="mx-auto max-w-2xl text-center text-lg ">
            Ideas that launch on Kicksale don't seem to be solely highly-vetted
            by our team of skilled analysts, however conjointly by
            industry-leading expertise.
          </p>

          <div className="mx-auto mt-20 flex max-w-lg flex-col justify-between space-y-5 md:flex-row md:space-y-0">
            <button className="pinkShadow rounded-full bg-black px-7 py-2 text-xl font-bold capitalize ring-2 ring-pink-500">
              our project
            </button>
            <button className=" blueShadow rounded-full bg-[#5133D5] px-5 py-2 text-xl font-bold capitalize ">
              MetaVerse NFT
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
