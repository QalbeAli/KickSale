import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import images from '../public/images/Images'

export default function RoadMap() {
  return (
    <>
      <div style={{ backgroundImage: `url(images/bgmatt.jpg)` }}>
        <Navbar />
        <div className="container mx-auto px-10">
          <div className=" flex items-center justify-center p-20  text-6xl ">
            ROADMAP
          </div>
          <div className="container mx-auto sm:block md:flex   justify-between border-t-2 border-pink-500 border-r-2 p-10 text-center border-b-2 ">
            <div className=' my-4 border-2 border-purple-800 bg-[#160A2C] rounded-xl sm:my-3'>
              <div className="text-lg  text-pink-500 py-3">
                Blockchain <br /> Development
              </div>
              <div className="text-xs pb-3 px-2 ">
              Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint.  ExercitationVelit officia <br /> consequat duis enim velit mollit. Exercitation <br/> veniam consequat sunt nostrud amet.
              </div>
            </div>
            <div className='border-2 border-purple-500 bg-[#160A2C] rounded-xl sm:my-3'>
              <div className="text-lg  text-pink-500 py-3">
                Blockchain <br /> Development
              </div>
              <div className="text-xs pb-3 px-2 ">
              Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint.  ExercitationVelit officia <br /> consequat duis enim velit mollit. Exercitation <br/> veniam consequat sunt nostrud amet.
              </div>
            </div>
          </div>

          <div className="container mx-auto sm:block md:flex   justify-center border-dashed  border-pink-500 border-l-4 p-10 text-center border-b-4 ">
          <div className='border-2 flex flex-col border-purple-500 bg-[#160A2C] rounded-xl sm:my-3'>
              <div className="text-lg  text-pink-500 py-3">
                Blockchain <br /> Development
              </div>
              <div className="text-xs pb-3 px-2 ">
              Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint.  ExercitationVelit officia <br /> consequat duis enim velit mollit. Exercitation <br/> veniam consequat sunt nostrud amet.
              </div>
            </div>
          </div>
          <div className="container mx-auto sm:block md:flex   justify-between  p-10 text-center border-dashed border-r-4 border-pink-500 ">
            <div className='my-4 border-2 border-purple-800 bg-[#160A2C] rounded-xl sm:my-3'>
              <div className="text-lg  text-pink-500 py-3">
                Blockchain <br /> Development
              </div>
              <div className="text-xs pb-3 px-2 ">
              Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint.  ExercitationVelit officia <br /> consequat duis enim velit mollit. Exercitation <br/> veniam consequat sunt nostrud amet.
              </div>
            </div>
            <div className='border-2 border-purple-500 bg-[#160A2C] rounded-xl sm:my-3'>
              <div className="text-lg  text-pink-500 py-3">
                Blockchain <br /> Development
              </div>
              <div className="text-xs pb-3 px-2 ">
              Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor do amet sint.  ExercitationVelit officia <br /> consequat duis enim velit mollit. Exercitation <br/> veniam consequat sunt nostrud amet.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
