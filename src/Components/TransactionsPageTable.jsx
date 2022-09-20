import React from 'react'
import { formatDateToDateAndTimeString } from '../utils/util-functions';

import { useSelector } from 'react-redux';

import {  useNavigate } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { getTxn } from '../redux/txnSlice';



// console.log(data)



const TransactionsPageTable = () => {
    const data = useSelector(state=>state.txn.txns)
    const navigate = useNavigate();

    if(!data){
        return (
            <div className='flex justify-center items-center'>
                <h1 className='font-bold text-2xl' >Loading ...</h1>
            </div>
        )
    }


    const navigateTxn = (txn) => {
        console.log(txn)
        navigate(`/transactions/${txn.stan}`, {state: txn})

    }
    


    

    


  return (
    <React.Fragment>
        <div className=" shadow-none rounded-sm max-h-[580px] overflow-y-auto">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="sticky top-0  text-sm text-gray-700 uppercase bg-white border-b border-gray-300 ">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Reference
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    STAN
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Amount
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    rSwitch
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    AccountNumber
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Status
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Txn Date
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map(txn => (
                                // onClick={()=>window.location.href=`/transactions/${txn.stan}`}
                                <tr key={txn.stan} className="bg-white border-b  hover:bg-gray-50 cursor-pointer " onClick={()=>navigateTxn(txn)} >
                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap ">
                                    {txn.reference}
                                </th>
                                <td className="py-4 px-6">
                                    {txn.stan}
                                </td>
                                <td className="py-4 px-6">
                                    GHC {parseFloat(txn.amount/100).toFixed(2)}
                                </td>
                                <td className="py-4 px-6">
                                    {txn.rSwitch}
                                </td>
                                <td className="py-4 px-6">
                                    {txn.accountNumber}
                                </td>
                                <td className="py-4 px-6">
                                    {txn.status}
                                </td>
                                <td className="py-4 p-6">
                                    {formatDateToDateAndTimeString(txn.createdAt)}
                                </td> 
                                         
                                </tr>
                                
                            
                            ))}
                            
                            
                           
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-between items-center my-4 bg-white p-2'>
                    <div className=''>
                        <p>Showing 1 to .....</p>
                    </div>

                    <div className='flex justify-between space-x-4'>
                        <button className='px-5 py-1 rounded-md border border-gray-600 hover:bg-gray-200'>Prev</button>
                        <button className='px-5 py-1 rounded-md border border-gray-600 hover:bg-gray-200'>Next</button>
                    </div>

                </div>
    </React.Fragment>
  )
}

export default TransactionsPageTable