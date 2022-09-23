import React, {useState} from 'react'

const userRoles = [
    {
      label: "user",
      value: 'user'
    },
    {
      label: "admin",
      value: 'admin'
    },
    
  ]

const AddUserModal = ({setAddUserModalStatus}) => {
    const [selectedRole, setSelectedRole] = useState('user')


  return (
    <React.Fragment>
        <div
            className="z-90 fixed left-64 inset-0 overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-75 p-4 lg:p-8"
            role="dialog"
            aria-labelledby="tk-modal-simple"
            aria-hidden="false"
             >
                {/* the div above is for the backdrop */}
 
            <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden w-[60%] mx-auto mt-20 z-50" role="document">
                <div className="py-4 px-5 lg:px-6 w-full bg-gray-50 flex justify-between items-center">
                <h3 className="font-medium">
                    Add new User
                </h3>
                <div className="-my-4">
                    <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-2 py-1 leading-5 text-sm rounded border-transparent text-gray-600 hover:text-gray-400 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:text-gray-600" onClick={()=>setAddUserModalStatus(false)}>
                    <svg className="hi-solid hi-x inline-block w-4 h-4 -mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
                    </button>
                </div>
                </div>
                <div className="p-5 lg:p-6 grow w-full">

                <div className="p-5 ">
      
                <form  className="space-y-3">
                    <div className="space-y-1">
                    <label className="font-medium">Photo</label>
                    <div className="sm:flex sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-300">
                        <svg className="hi-solid hi-user inline-block w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>
                        </div>
                        <label className="block">
                        <span className="sr-only">Choose profile photo</span>
                        <input className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" type="file" id="photo" name="photo" />
                        </label>
                    </div>
                    </div>
           
                    <div className="space-y-1">
                        <label htmlFor="tk-form-layouts-multiple-cards-name" className="font-medium">Name</label>
                        <input 
                            className="block border border-gray-200 rounded px-3 py-2 leading-6 w-full  focus:ring-opacity-50" 
                            type="text" 
                            placeholder="Kofi Mensah" 
                        />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="tk-form-layouts-multiple-cards-email" className="font-medium">Email</label>
                        <input 
                            className="block border border-gray-200 rounded px-3 py-2 leading-6 w-full  focus:ring-opacity-50" 
                            type="email" 
                             placeholder="kofi@mensah.com" 
                        />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="tk-form-layouts-multiple-cards-title" className="font-medium">Role</label>
                        <select value={selectedRole} onChange={(e)=>setSelectedRole(e.target.value)} className="   border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            {userRoles.map(role=>(
                            <option key={role.label}  value={role.value} >{role.label}</option>
                            ))}
                         </select>
                    </div>
                   
                   
                </form>
                </div>

                </div>

                <div className="py-4 px-5 lg:px-6 w-full bg-gray-50 flex justify-between">
                    <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-1.5 leading-5 text-sm rounded border-transparent text-red-600 hover:text-red-400 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:text-indigo-600" onClick={()=>setAddUserModalStatus(false)}>
                        Cancel
                    </button>
                    <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-1.5 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700">
                        Create Account
                    </button>
                </div>
            </div>

        </div>
    </React.Fragment>
  )
}

export default AddUserModal