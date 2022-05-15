import React from 'react'
import { tableData } from '../../FetchData'

const table = () => {
  const tableCss = [
    'whitespace-nowrap border-r  px-6 py-4 text-sm  md:text-lg font-bold ',
  ]
  
  return (
    <div className='cardbg pt-20' style={{backgroundImage:`url(images/bgtable.png)`}}>
      <section className="pt-10">
        <div>
          <h2 className="text-center text-4xl font-bold">
            KickSale Tier & Access to IMO
          </h2>
          <div className="mx-auto  mt-10 max-w-6xl  ">
            <div className="tableShadow mx-3 flex flex-col rounded-xl">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
                  <div className="overflow-hidden border rounded-[30px]">
                    <table className="min-w-full   rounded-[33px] bg-gradient-to-r from-[#5e245a] to-[#190f3c] text-center">
                      <thead className="border-b">
                        <tr>
                          <th
                            scope="col"
                            className="border-r px-6 py-4 text-sm font-medium  uppercase text-white"
                          >
                            Access
                          </th>
                          <th
                            scope="col"
                            className="border-r px-6 py-4 text-sm font-medium uppercase text-white"
                          >
                            Tire
                          </th>
                          <th
                            scope="col"
                            className="border-r px-6 py-4 text-sm font-medium text-white"
                          >
                            First
                          </th>
                          <th
                            scope="col"
                            className="border-r px-6 py-4 text-sm font-medium text-white"
                          >
                            Last
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-sm font-medium text-white"
                          >
                            Handle
                          </th>
                        </tr>
                      </thead>
                      {tableData.map((data, id) => {
                        return (
                          <tbody>
                            <tr className="border-b">
                              <td className={`${tableCss}`}>{data.tHead}</td>
                              <td className={`${tableCss}`}>{data.tTire}</td>
                              <td className={`${tableCss}`}>
                                {data.tRequirement}
                              </td>
                              <td className={`${tableCss}`}>
                                {data.tAllocation}
                              </td>
                              <td className={`${tableCss}`}>{data.tLottery}</td>
                            </tr>
                          </tbody>
                        )
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default table
