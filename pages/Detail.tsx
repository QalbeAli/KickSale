import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import images from '../public/images/Images'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import LanguageIcon from '@mui/icons-material/Language'
import PeopleIcon from '@mui/icons-material/People'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

export default function Detail() {
  return (
    <>
      <div
        className="projetbg"
        style={{ backgroundImage: `url(images/projectbg.png)` }}
      >
        <Navbar />

        <div className="container mx-auto mt-10 px-10 py-10  ">
          <div>
            <div>
              <Image src={images.kck} alt="" />
            </div>
            <div className="text-sm">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by <br />{' '}
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem{' '}
              <br /> Ipsum, you need to be sure there isn't anything.
            </div>
            <div className=" py-10 sm:block md:flex ">
              <div className="flex">
                <div>
                  <InsertDriveFileIcon sx={{ color: '#CB3694' }} />
                </div>
                <div className="px-3 py-0.5">Contract Details</div>
              </div>
              <div className="flex md:px-8">
                <div>
                  <LanguageIcon sx={{ color: '#CB3694' }} />
                </div>
                <div className="px-3 py-0.5">Website</div>
              </div>
              <div className="flex  md:px-8">
                <div>
                  <PeopleIcon sx={{ color: '#CB3694' }} />
                </div>
                <div className="px-3 py-0.5">
                  Community <KeyboardArrowDownIcon />
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-12 flex py-12 "
            style={{ borderBottom: '1px solid white' }}
          >
            <div className="text-md pr-8">PROJECT DETAILS</div>
            <div className="text-md pl-8">PROJECT DETAILS</div>
          </div>
        </div>
      </div>

      <div
        className="p-10"
        style={{ backgroundImage: `url(images/bgmatt.jpg)` }}
      >
        <div className="  flex justify-between p-5 ">
          <div className="rounded-[20px]  border-2 border-pink-500 bg-[#1E1331]">
            <div className="md:p-5 ">
              <Image src={images.kck} />
            </div>
            <div className=" px-5 text-lg font-bold">$KCK</div>
            <div className=" px-5 text-lg font-bold">METALAND</div>
            <div className=" px-5 pr-5 text-xs ">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have <br /> suffered alteration in some form, by
              injected humour, or randomised words which don't <br /> look even
              slightly believable.
            </div>

            <div className="  mx-5 justify-around py-8 sm:block md:flex ">
              <div className=" flex  rounded-[20px] border sm:my-3">
                <div className="p-2  text-xs">ALLOCATION</div>
                <div className="text-md p-1 pl-8">$1000</div>
              </div>

              <div className=" flex rounded-[20px] border sm:my-3">
                <div className="p-2  text-xs">ALLOCATION</div>
                <div className="text-md p-1 pl-8">$1000</div>
              </div>
            </div>
          </div>

          <div className="  mx-5 rounded-xl border-2 border-pink-500 bg-[#1E1331]">
            <div className=" container mx-auto  flex border-b-2 p-4 px-3">
              <div>
                <CalendarMonthIcon style={{ color: '#CB3694' }} />
              </div>
              <div className=" border-b-2 border-dashed px-1">07 Days Left</div>

              <div className="flex  pl-12">
                <div className="rounded-xl border border-pink-500 px-3 text-sm">
                  Private Sale
                </div>
                <div className="ml-2 rounded-xl border border-pink-500 px-3 text-sm">
                  IDO
                </div>
              </div>
            </div>
            <div className="px-2 py-3">Rising Talent</div>
            <div className="px-2 py-3 flex text-4xl">
            $400,000
            <div className="px-2 py-3 text-xs flex">
            USDT
            </div>
            </div>

            <div className=' mt-4 py-2 mx-2 flex items-center justify-center bg-[#5133D5] rounded-[20px]'>
                <button>
                    JOIN WHITELIST
                </button>
            </div>
            <div className=' mt-3 py-2 mx-2 flex items-center justify-center bg-[#CB3694] rounded-[20px]'>
                <button>
                    JOIN WHITELIST
                </button>
            </div>
            
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
