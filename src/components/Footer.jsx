import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
   

<footer className=" bg-white rounded-lg shadow-sm dark:bg-gray-900">
    <div className="w-full max-w-screen-xl p-4 mx-auto md:py-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                  <div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023.All Rights Reserved.</span>
                  </div>
                  <div>
                      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link to="/" className="hover:underline me-4 md:me-6">Home</Link>
                </li>
                <li>
                    <Link to="/" target='_blank' className="hover:underline me-4 md:me-6">instagram</Link>
                </li>
                <li>
                    <Link to="/" target='_blank' className="hover:underline me-4 md:me-6">facebook</Link>
                </li>
                <li>
                    <Link to="/" target='_blank' className="hover:underline">Github</Link>
                </li>
                      </ul>
                      </div>
        </div>
      
    </div>
</footer>


  )
}

export default Footer
