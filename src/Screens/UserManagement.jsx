import React from 'react'
import { useState } from 'react'
import AddUserModal from '../Components/AddUserModal'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

const UserManagement = () => {
    const [addUserModalStatus, setAddUserModalStatus] = useState(false)

  return (
    <React.Fragment>
        <div className='flex'>
        <Sidebar />
        <div className='w-full ml-64'>
            <Header />

            {addUserModalStatus && <AddUserModal setAddUserModalStatus={setAddUserModalStatus}  />}
            

            <div className='py-6 px-6'>
                 <div className='flex items-start pb-10'>
                    <button className='flex items-center px-3 py-1.5 rounded-sm font-medium bg-blue-900 text-white hover:bg-opacity-90' onClick={()=>setAddUserModalStatus(true)}>
                        Add User
                        <svg className="inline-block w-6 h-6 text-white ml-2" stroke="currentColor"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </button>
                 </div>

                {/* table goes here */}
                 <div className='overflow-x-auto'>
                    <table className='w-full'>
                        <thead className="text-xs font-semibold uppercase  bg-gray-50 border-t border-b border-gray-200">
                        <tr>
                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <div className="font-semibold text-left">Name</div>
                            </th>
                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <div className="font-semibold text-left">Email</div>
                            </th>
                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <div className="font-semibold text-left">Role</div>
                            </th>
                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <div className="font-semibold text-left">Status</div>
                            </th>
                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <div className="font-semibold text-left">Date Joined</div>
                            </th>
                            <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                                <span className="sr-only">Menu</span>
                            </th>

                        </tr>
                        </thead>

                        <tbody className='text-sm divide-y bg-gray-50  divide-gray-200'>

                       


                        <tr className=''>
                       
                        <td className="px-2 first:pl-5 last:pr-5 py-1.5 whitespace-nowrap">
                            <div className="flex items-center">
                               
                                <svg width="30" height="30" viewBox="0 0 20 20" className='mr-5' fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0C4.579 0 0 4.579 0 10C0 15.421 4.579 20 10 20C15.421 20 20 15.421 20 10C20 4.579 15.421 0 10 0ZM10 5C11.727 5 13 6.272 13 8C13 9.728 11.727 11 10 11C8.274 11 7 9.728 7 8C7 6.272 8.274 5 10 5ZM4.894 14.772C5.791 13.452 7.287 12.572 9 12.572H11C12.714 12.572 14.209 13.452 15.106 14.772C13.828 16.14 12.015 17 10 17C7.985 17 6.172 16.14 4.894 14.772Z" fill="black"/>
                                </svg>
                                <h1 className="font-medium text-gray-800">Kofi Mensah</h1>
                            </div>
                        </td>
                        <td className="px-2 first:pl-5 last:pr-5 py-1.5 whitespace-nowrap">
                            <div className="text-left">kofi.mensah@email.com</div>
                        </td>
                        
                        
                        <td className="px-2 first:pl-5 last:pr-5 py-1.5 whitespace-nowrap">
                            <div className="text-left font-medium text-light-blue-500">Admin</div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-1.5 whitespace-nowrap">
                            <div className="text-left font-medium text-light-blue-500">Active</div>
                        </td>

                        <td className="px-2 first:pl-5 last:pr-5 py-1.5 whitespace-nowrap">
                            <div className="text-left font-medium text-light-blue-500">10/11/2022</div>
                        </td>
                       
                        <td className="px-2 first:pl-5 last:pr-5 py-1.5 whitespace-nowrap w-px">
                            <button className="text-gray-400 hover:text-gray-500 rounded-full">
                                <span className="sr-only">Menu</span>
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
                                    <circle cx="16" cy="16" r="2" />
                                    <circle cx="10" cy="16" r="2" />
                                    <circle cx="22" cy="16" r="2" />
                                </svg>
                            </button>
                        </td>
                        </tr>

                        </tbody>
                    </table>
                 </div>
            </div>
        </div>
        
        
        </div>
        
    </React.Fragment>
  )
}

export default UserManagement