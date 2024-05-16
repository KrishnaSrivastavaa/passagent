import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
       <div className="mycontainer flex justify-between items-center  h-14 py-5 px-4">

        <div className="logo font-bold text-2xl">
          <span className='text-green-500'> &lt; </span>
          <span>Pass</span>
          <span className='text-green-500'>agent / &gt; </span>
          </div>
        {/* <ul>
          <li className='flex gap-4'>
            <a className='hover:font-bold' href="">Home</a>
            <a className='hover:font-bold' href="">About</a>
            <a className='hover:font-bold' href="">Contact</a>
          </li>
        </ul> */}
        <button className='text-white bg-green-700 my-5 mx-2 rounded-full flex justify-between items-center ring-white ring-1'>
          <img src="/icons/github.png" alt="github logo" className="invert w-10 p-1" />
          <span className='font-bold px-2 '>Github</span>
        </button>
       </div>
      </nav>
  )
}

export default Navbar
