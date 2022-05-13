import Image from 'next/image'
import React from 'react'
import Images from '../../public/images/Images'

const Footer = () => {
  const footerNav = ['home', 'about us', 'metaverse', 'faq', 'contact']
  return (
    <div>
      <section>
        <div className="grid grid-cols-1 place-content-center place-items-center space-y-5  p-5 lg:grid-cols-3">
          <div>
            <Image width={200} height={78} src={Images.logo} alt="" />
          </div>
          <nav>
            <ul className="flex flex-col items-center space-y-3 lg:flex-row lg:space-y-0 lg:space-x-8 mb-5">
              {footerNav.map((data, id) => {
                return (
                  <div className="cursor-pointer  whitespace-nowrap font-bold uppercase hover:text-[#CB3694] transition">
                    {data}
                  </div>
                )
              })}
            </ul>
          </nav>
          <div className="flex cursor-pointer space-x-5">
            <a href="#">
              <Image src={Images.vecter1} />
            </a>
            <a href="#">
              <Image src={Images.vecter2} />
            </a>
            <a href="#">
              <Image src={Images.vecter3} />
            </a>
            <a href="#">
              <Image src={Images.vecter4} />
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl">
          <hr />
          <div className="mx-5 flex flex-col items-center justify-between py-8 text-center lg:flex-row ">
            <span className='py-3'>Copyright Kicksale © 2022. All rights reserved</span>
            <ul className="-order-1 flex flex-col  font-bold lg:order-1 lg:flex-row lg:space-x-5 ">
              <a className="transition hover:text-[#CB3694]">Privacy Poliacy</a>
              <a className="transition hover:text-[#CB3694]">
                Terms & Condition
              </a>
              <a className="transition hover:text-[#CB3694]">Disclaimer</a>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
