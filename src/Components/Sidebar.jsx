import React from 'react'

const Sidebar = () => {
  return (
    <React.Fragment>
        <section className="w-64 fixed z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto    shrink-0 bg-gray-800 p-4 transition-all duration-200 ease-in-out" aria-label="Sidebar">
           
            <div className='flex flex-col justify-between h-[100%]'>
                <div className='mt-10 '>
                    <h3 className='text-2xl text-white font-semibold tracking-wider'>Dashboard</h3>
                    <hr className='mb-10 mt-2 border border-gray-400'/>


                    <div className='flex flex-col justify-between'>
                    <ul className="space-y-2">
                        <li>
                            <a href="/" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span className="ml-3">Dashboard</span>
                            </a>
                        </li>

                        <li>
                            <a href="/transactions" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
                            <span className="ml-3">Transactions</span>
                            </a>
                        </li>
                    </ul>
                    
                </div>
                </div>

                

                

                <div className=''>
                    <button className='flex'>
                        {/* <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg> */}
                        <h1 className=' text-white'>Close</h1>
                    </button>
                </div>
            </div>
            

            



            </section>
    </React.Fragment>
  )
}

export default Sidebar