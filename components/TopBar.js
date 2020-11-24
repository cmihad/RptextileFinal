import React from 'react'

function TopBar() {
  return (
    <div>
      <div className="w-full h-8 flex bg-pr ">
      <div className="container mx-auto flex justify-between " >

      <div className="flex" >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" baseProfile="tiny" version="1.2"><path d="M13 10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189.374-2.691 1.118-3.512C11.862 4.41 12.791 4 13.904 4H16v3h-2.1c-.498 0-.9.402-.9.899V10z"/></svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g fill="none" fill-rule="evenodd"><path fill="#000" d="M21.883 43.823V25.524h-5.656v18.3h5.656zm0-24.785c-.034-1.637-1.125-2.884-2.898-2.884-1.773 0-2.932 1.247-2.932 2.884 0 1.602 1.125 2.885 2.864 2.885h.034c1.807 0 2.932-1.283 2.932-2.885zm9.227 24.785V33.397c0-.558.04-1.116.204-1.513.449-1.116 1.47-2.27 3.184-2.27 2.246 0 3.654 1.274 3.654 3.783v10.426h5.694V33.118c0-5.734-3.061-8.402-7.144-8.402-3.348 0-4.817 1.871-5.633 3.145l.04-2.447h-5.684c.082 1.752 0 18.41 0 18.41h5.685z"/></g></svg>

      </div>

       <div className="flex h-8 ">
        <p className="text-white font-medium mb-auto mt-auto ">Contact: info@rptextile.com    +88 01710267919 (BD) +1 5183472268155 (NY) </p>
      </div>
      
    </div>
    </div>
  </div>
  )
}

export default TopBar
