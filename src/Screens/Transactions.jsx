import React from 'react'
import { useState } from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import TransactionsPageTable from '../Components/TransactionsPageTable'
import { useDispatch } from 'react-redux'
import { getTxnByStan } from '../redux/txnSlice'

const Transactions = () => {
    const dispatch = useDispatch()
    const [searchText, setSearchText] = useState('');
    const [searchResponse, setSearchResponse] = useState(null)


    const handleSearchByStan = async(e)=> {
        e.preventDefault()
        if(!/^[0-9]+$/.test(searchText)){
            console.log('error')
        }
        const response= await dispatch(getTxnByStan(searchText)).unwrap()
        setSearchResponse(response)
    }


    

  return (
    <React.Fragment>
        <div className='flex'>
        <Sidebar />
        <div className='w-full ml-64 h-screen'>
            <div className='flex h-screen flex-col justify-start  '>
                <Header />
                <div className='py-0 px-6  '>
                    <div className='border-b border-gray-300 mb-2  z-20 '>
                        <div className='flex justify-between  pt-2'>
                            <div className="hidden relative md:block">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Search icon</span>
                                </div>
                                <input 
                                    type="text" 
                                    id="search-navbar" 
                                    className="block p-2 pl-10 w-full  bg-white border border-gray-800 rounded-lg  focus:ring-blue-500 focus:border-blue-500 " 
                                    placeholder="Search by stan"
                                    value={searchText}
                                    onChange={(e)=>setSearchText(e.target.value)}
                                />
                                
                            </div>
                            
                        </div>

                        <div className='flex justify-between mt-5 mb-2'>
                        <div className='flex gap-2'>
                        <button className='flex items-center px-3 py-1.5 rounded-md bg-green-800 text-white hover:opacity-80' onClick={handleSearchByStan}>
                            <h1 className=''>Search</h1>
                        </button>
                        <button className='flex items-center px-3 py-1.5 rounded-md bg-blue-900 text-white hover:opacity-80' onClick={()=>setSearchText('')}>
                            <h1 className=''>Clear</h1>
                        </button>
                        </div>

                        <button className='flex items-center px-4 py-1.5 rounded-md bg-green-800 text-white hover:opacity-80'>
                        <h1 className='mr-3'>Export CSV</h1>
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white transition duration-75  group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                        </button>

                        </div>

                    </div>
                </div>
                <TransactionsPageTable  searchResponse={searchResponse}/>
            </div>
            
        </div>
        
        
        </div>
        
    </React.Fragment>
  )
}

export default Transactions