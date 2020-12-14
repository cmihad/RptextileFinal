import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Footer() {
  return (
    <div>
   
    
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          <div className="w-1/2 md:w-1/4 text-center md:text-left ">
         
            <h5 className="uppercase mb-6 font-bold">Proud Member of</h5>
            <Image 
            src="/logobgmea.png"
            width={120}
            height={110}

          />
            <ul className="mb-4">
          
            </ul>
          </div>
          <div className="w-1/2 md:w-1/4 text-center md:text-left ">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
            <Link href="/terms">

              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Terms</a>
              </li>
            </Link>
            <Link href="/privacy">

              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Privacy</a>
              </li>
            </Link>
            </ul>
          </div>
          <div className="w-1/2 md:w-1/4 text-center md:text-left ">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4">
            <Link href="https://www.facebook.com/RP-Textile-Fashion-545210429278815/">

              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Facebook</a>
              </li>
            </Link>
              
              <Link href="https://www.linkedin.com/company/r-p-textile-and-fashion">
              <li className="mt-2">

                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Linkedin</a>
              </li>
              </Link>
              
            </ul>
          </div>
          <div className="w-1/2 md:w-1/4 text-center md:text-left ">
            <h5 className="uppercase mb-6 font-bold">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Official Blog</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">About Us</a>
              </li>
              <li className="mt-2">
                <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    
  </div>
  )
}

export default Footer
