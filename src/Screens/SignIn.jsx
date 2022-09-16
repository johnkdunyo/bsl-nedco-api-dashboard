import React, { useState } from 'react'

const SignIn = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

  return (
    <React.Fragment>
        <section className="bg-gray-100">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            
            <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-3xl text-center text-gray-800 font-bold mb-6">Welcome back! ✨</h1>
                    <form className="space-y-4 md:space-y-6 " action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                            <input 
                                type="email" 
                                name="username" 
                                id="email" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                                placeholder="name@email.com" 
                                required 
                                value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                            />
                        </div>
                        <div className='pb-5'>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                                placeholder="••••••••" 
                                required 
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        
                        
                        <button type="submit" className="w-full  text-white bg-gray-800 hover:bg-opacity-95  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Log in</button>
                        
                    </form>
                </div>
            </div>
        </div>
        </section>
    </React.Fragment>
  )
}

export default SignIn