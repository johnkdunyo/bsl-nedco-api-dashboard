import React from 'react'

const TransactionDetailsRight = () => {
  return (
    <React.Fragment>
        <section className='px-10'>
            <h1 className='font-bold mb-2'>Refunds</h1>
            <hr />


            <div className='flex justify-end mt-5'>
                <button className='px-2 py-2 rounded-md font-semibold hover:bg-gray-200'>+ New Refund</button>
            </div>
        </section>
    </React.Fragment>
  )
}

export default TransactionDetailsRight