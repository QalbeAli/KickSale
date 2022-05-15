import React, { useState } from 'react'
import { CgMenuGridO } from 'react-icons/cg'

import { navLargeBtn, navSmallBtn, popupBtn } from '../Button'
import Link from 'next/link'
import Images from '../../public/images/Images'
import Image from 'next/image'

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [popup, setPopup] = useState('hidden')
  const showPop = () => {
    console.log('clicked')
    setPopup(popup == 'block' ? 'hidden' : 'block')
  }
  return (
    <div className="p-5">
      <div className=" relative z-10  flex items-center justify-between rounded-full bg-black p-2 text-white lg:bg-[rgba(0,0,0,.6)]">
        <Link href="/">
          <a>
            <Image
              src={Images.logo}
              width="352px"
              height="80px"
              className="cursor-pointer"
            />
          </a>
        </Link>

        <div className="ml-10 hidden flex-1 items-center lg:flex">
          <Link href="/">
            <a className={`${navSmallBtn}`}>IDO</a>
          </Link>
          <Link href="/staking">
            <a className={`${navSmallBtn}`}>IMO</a>
          </Link>
          <Link href="/Ido">
            <a className={`${navSmallBtn}`}>IGO</a>
          </Link>
        </div>
        <div className="relative hidden items-center space-x-3  p-4 lg:flex">
          <a
            onClick={showPop}
            className={`${navLargeBtn}  bg-[#31303E] transition hover:text-[#8B70FF]`}
          >
            <Link href="/">Accounts</Link>
          </a>
          <ul
            className={`${popup} absolute top-[75px] -left-12 space-y-3 rounded-3xl bg-[#31303E] py-5 px-4 shadow-lg transition`}
          >
            <li className={`${popupBtn}`}>Lockup</li>
            <li className={`${popupBtn}`}> staking</li>
            <li className={`${popupBtn}`}>Linking Wallets</li>
            <li className={`${popupBtn}`}>My Portfolio</li>
            <Link href="/RoadMap">
              <a>
                <li className={`${popupBtn}`}>RoadMap</li>
              </a>
            </Link>
          </ul>

          <Link href="/">
            <div className={`${navLargeBtn} bg-[#8B70FF]`}> Wallet</div>
          </Link>
        </div>
        <CgMenuGridO
          size={50}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="m-5 cursor-pointer lg:hidden"
        />
        {mobileOpen && (
          <div className="absolute top-12 left-0 -z-20 flex w-[99.97%] flex-col rounded-b-[50px] bg-[rgba(0,0,0,.9)] pb-8 lg:hidden">
            <div className="mt-20 flex flex-1 flex-col items-center text-xl">
              <Link href="/">
                <div className={`${navSmallBtn}`}>Home</div>
              </Link>
              <Link href="/">
                <div className={`${navSmallBtn}`}>Staking</div>
              </Link>
              <Link href="/">
                <div className={`${navSmallBtn}`}>Projects</div>
              </Link>
              <div className="relative my-2  mx-2 flex flex-col  justify-center space-y-3 p-4  md:flex-row md:space-y-0 md:space-x-3">
                <div
                  onClick={showPop}
                  className={`${navLargeBtn}  bg-[#31303E] transition hover:text-[#8B70FF]`}
                >
                  Accounts
                </div>
                <ul
                  className={`${popup} absolute top-14  -left-8 w-[250px]  space-y-3 rounded-3xl bg-[#535268f3] py-5 px-4 shadow-lg transition`}
                >
                  <li className={`${popupBtn}`}>Lockup</li>
                  <li className={`${popupBtn}`}> staking</li>
                  <li className={`${popupBtn}`}>Linking Wallets</li>
                  <li className={`${popupBtn}`}>My Portfolio</li>
                  <li className={`${popupBtn}`}>RoadMap</li>
                </ul>
                  <div className={`${navLargeBtn} bg-[#8B70FF] text-center`}>
                    {' '}
                    Wallet
                  </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
