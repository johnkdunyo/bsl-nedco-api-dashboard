import React from 'react'
import { useState } from 'react'

const Header = () => {

    const [openUser, setOpenUser] = useState(false);



    
  return (
    <React.Fragment>
        <header className="sticky top-0 bg-white border-b-2 border-gray-200 z-30  h-14 ">
            <div className='px-12 py-3 flex justify-end space-x-3 '>
                <button className='text-lg border border-transparent hover:border-gray-100 px-3 rounded-md hover:bg-gray-100'>Notifications</button>
                <hr className="w-px h-6 bg-gray-200" />
                <div className="relative inline-flex">

                    <button className="inline-flex justify-center items-center group" aria-haspopup="true"  onClick={()=>setOpenUser(prev=>!prev)}>
                        <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0C4.579 0 0 4.579 0 10C0 15.421 4.579 20 10 20C15.421 20 20 15.421 20 10C20 4.579 15.421 0 10 0ZM10 5C11.727 5 13 6.272 13 8C13 9.728 11.727 11 10 11C8.274 11 7 9.728 7 8C7 6.272 8.274 5 10 5ZM4.894 14.772C5.791 13.452 7.287 12.572 9 12.572H11C12.714 12.572 14.209 13.452 15.106 14.772C13.828 16.14 12.015 17 10 17C7.985 17 6.172 16.14 4.894 14.772Z" fill="black"/>
                        </svg>
                        <div className="flex items-center truncate">
                            <span className="truncate ml-2 text-lg font-medium group-hover:text-gray-800">Adminstrator</span>
                            <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400" viewBox="0 0 12 12">
                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                        </div>
                    </button>

                    <div className={  ` ${!openUser && `hidden` } origin-top-right z-10 absolute top-full right-0 w-52 min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1 `}  >
                        <div className="pt-0.5 pb-2 px-5 mb-5 border-b border-gray-200">
                            {/* <div className="font-medium text-gray-800">Dashboard Name.</div> */}
                            {/* <div className="text-xs text-gray-500 italic ">Administrator</div> */}
                            <div className='flex justify-end'>
                                <button className='px-2 py-1 hover:bg-gray-100 rounded-lg' onClick={()=>setOpenUser(prev=>!prev)}>X</button>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <a className="font-medium text-sm hover:bg-gray-100 flex items-center py-1 px-3" href="/">Settings</a>
                            </li>
                            <li>
                                <a className="font-medium text-sm mb-3  hover:bg-gray-100 flex items-center py-1 px-3" href="/">Sign Out</a>
                            </li>
                        </ul>                
                    </div>


                </div>
            </div>
        </header>
    </React.Fragment>
  )
}

export default Header