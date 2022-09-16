import React from 'react'

const status = [

  {id: 1, name: 'pending'},
  {id: 2, name: 'success'},
  {id: 3, name: 'failed'}

]



const TransactionDetailsRight = ({txn}) => {

  

    
  return (
    <React.Fragment>
        <section className='px-10'>
            <h1 className='font-bold mb-2'>{'Actions'}</h1>
            <hr />


            <div className='flex justify-start mt-8 mb-4'>
                <button className='px-3 py-2 rounded-md font-semibold border border-gray-300  hover:bg-gray-100'>Check Status</button>
            </div>
            <hr />

            <div className='flex justify-between mt-8 mb-4'>
                <div className='w-[40%]'>
                  <label htmlFor="countries" className="block  text-sm font-medium text-gray-900">{''}</label>
                  <select id="countries" className="   border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                    {status.map(stat=>(
                      <option key={stat.id} selected={ txn.status === stat.name} value={stat.name} >{stat.name}</option>
                    ))}
                  </select>
                </div>

                <button className='px-3 py-0 rounded-md font-semibold bg-green-300 hover:bg-opacity-90'>Update Status</button>
            </div>
            <hr />

            <div className='flex justify-start mt-8 mb-4'>
                <button className='px-3 py-2 rounded-md font-semibold border text-white bg-blue-900 border-gray-300  hover:opacity-90'>Fire Status Update Event</button>
            </div>
            <hr />

        </section>
    </React.Fragment>
  )
}

export default TransactionDetailsRight