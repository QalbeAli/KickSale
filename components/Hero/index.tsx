import React from 'react'
import { navLargeBtn } from '../Button/index'
import Images from '../../public/images/Images'
import Header from '../Navbar'

// style={{ background: `url("../../public/images/hero.png")` }}
// style={{ background: `# url(${Images.hero})` }}
// style={{ backgroundImage: `url(images/hero.png)` }}
const Hero = () => {
  return (
    <div className="heroImage " style={{ backgroundImage: `url(images/hero.png)` }}>
      <Header />
      <section className="flex h-[400px] w-screen items-end justify-center md:h-[700px] ">
        <div className="mx-10 max-w-5xl pb-20 text-center uppercase">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-6xl">
            A Launchpad for Initial Metaverse Offerings
          </h1>
          <div className="mt-10 flex flex-col space-y-5  sm:block sm:space-x-5  md:space-x-10">
            <button
              className={`${navLargeBtn}   blueShadow bg-[#8B70FF]  transition`}
            >
              discover
            </button>
            <button
              className={`${navLargeBtn}bg-[#31303E] blueShadow transition hover:text-[#8B70FF]  `}
            >
              Buy token
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
