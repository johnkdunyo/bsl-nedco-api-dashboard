import React from 'react'
import { formatDateToDateAndTimeString } from '../utils/util-functions'

const TransactionDetailsLeft = ({txn}) => {
    
    

  return (
    <React.Fragment>
        <div className='px-10 flex flex-col mb-10'>
            <div className='mb-5 flex justify-between items-center   '>
                <div>
                <h1 className="order-last text-sm font-medium text-gray-500">
                    Amount
                </h1>
                <p className="text-2xl font-medium ">
                    {`GHS ${parseFloat(txn.amount/100).toFixed(2)} `}
                </p>
                </div>
                <button className= {` ${txn.status === 'success' ? 'bg-green-600' : (txn.status ==='failed' ? 'bg-red-500' : 'bg-yellow-400' )} px-2 py-1 rounded-full text-white text-sm cursor-text`}>{txn.status}</button>
            </div>
            <hr />
            <div className='flex justify-between my-4'>
                <h1 className='text-gray-500'>Reference</h1>
                <p>{txn.reference}</p>
            </div>
            <hr />
            <div className='flex justify-between my-4'>
                <h1 className='text-gray-500'>Account Number</h1>
                <p>{txn.accountNumber}</p>
            </div>
            <hr />
            <div className='flex justify-between my-4'>
                <h1 className='text-gray-500'>rSwitch</h1>
                <p>{txn.rSwitch}</p>
            </div>
            <hr />
            <div className='flex justify-between my-4'>
                <h1 className='text-gray-500'>Type</h1>
                <p>{txn.type}</p>
            </div>
            <hr />
            <div className='flex justify-between my-4'>
                <h1 className='text-gray-500'>Description</h1>
                <p>{txn.description}</p>
            </div>
            <hr />
            <div className='flex justify-between my-4'>
                <h1 className='text-gray-500'>Status Reason</h1>
                <p>{txn.reason}</p>
            </div>
            <hr />
            <div className='flex justify-between my-4'>
                <h1 className='text-gray-500'>Transaction Date</h1>
                <p>{formatDateToDateAndTimeString(txn.createdAt)}</p>
            </div>
            <hr />
            

            {/* rows */}
        </div>
    </React.Fragment>
  )
}

export default TransactionDetailsLeft