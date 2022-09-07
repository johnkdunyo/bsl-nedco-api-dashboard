import React from 'react'
import { formatDateToDateAndTimeString } from '../utils/util-functions';
import data from "../data.json";



const TransactionsPageTable = () => {
  return (
    <React.Fragment>
        <div className="overflow-x-auto relative shadow-md rounded-sm  ">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs text-gray-700 uppercase bg-white border-b border-gray-300 ">
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
                            {data.map(txn => (
                                
                                <tr key={txn.stan} className="bg-white border-b  hover:bg-gray-50 cursor-pointer "  onClick={()=>window.location.href=`/transactions/${txn.stan}`}>
                                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap ">
                                    {txn.reference}
                                </th>
                                <td className="py-4 px-6">
                                    {txn.stan}
                                </td>
                                <td className="py-4 px-6">
                                    {txn.amount}
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
    </React.Fragment>
  )
}

export default TransactionsPageTable