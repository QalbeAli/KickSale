import Image from 'next/image'
import React from 'react'
import { ProjectsData } from '../../FetchData'
import Images from '../../public/images/Images'
import { navLargeBtn } from '../Button'

const Projects = () => {
  const smallFont1 = ['font-bold text-lg']
  const smallFont2 = ['text-lg font-extralight text-gray-400']
  return (
    <div  style={{ backgroundImage: `url(images/star.png)`, backgroundColor:"black"}}>
      <section className="pt-40" >
        <h1 className="m-5 text-center text-4xl font-bold md:text-5xl lg:text-6xl">
          KICKSALE PROJECTS
        </h1>
        <div className=" mx-auto grid max-w-screen-2xl grid-cols-1 gap-5 p-5 md:p-8 lg:grid-cols-2  lg:p-10 ">
          {ProjectsData.map((project, id) => {
            return (
              <div className="rounded-[45px] border-8 border-[#CB3694] bg-[#16182D] ">
                <div className="flex flex-col justify-center space-x-5 md:flex-row md:p-5">
                  <Image src={project.image} alt="Project_Image" />

                  <div className="mt-5 h-full md:h-[400px] flex flex-col  md:p-5 lg:mt-0">
                    <div>
                      <h2 className="text-2xl  font-bold lg:text-3xl">
                        {project.title}
                      </h2>
                      <p className="max-w-[250px] text-sm capitalize">
                        {project.subTitle}
                      </p>
                    </div>
                    <div className=" mt-5 flex items-center space-x-5 lg:mt-12">
                      <span className="whitespace-nowrap rounded-full bg-[#CB3694] py-2 px-3 text-[10px] font-semibold md:text-sm">
                        {project.registration}
                      </span>
                      <div className="mx-2 flex items-center space-x-2 flex-shrink-0">
                        <Image
                          width={20}
                          height={20}
                          src={Images.smalllogo}
                          className="m-2  rounded-none bg-red-500 p-5 md:rounded-full"
                        />
                        <span className="font-bold">Avax</span>
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3 className="font-bold">Whitelist end in:</h3>
                      <small className={`${smallFont1}`}>0</small>
                      <small className={`${smallFont2}`}>1</small>
                      <small className={`${smallFont1}`}>:</small>
                      <small className={`${smallFont1}`}>0</small>
                      <small className={`${smallFont2}`}>4</small>
                      <small>:</small>
                      <small className={`${smallFont1}`}>3</small>
                      <small className={`${smallFont2}`}>2</small>
                      <small>:</small>
                      <small className={`${smallFont1}`}>1</small>
                      <small className={`${smallFont2}`}>5</small>
                    </div>
                    <div className="relative -left-2 mt-auto p-5 md:p-0">
                      <button
                        className={`${navLargeBtn} mt-5 j w-full  bg-[#5133D5] lg:mt-10 `}
                      >
                        more details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Projects
