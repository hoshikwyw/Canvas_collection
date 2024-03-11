import React from 'react'

const Titles = ({ linkName }) => {
    return (
        <div className=' w-full h-full p-3 bg-slate-100 bg-opacity-25 text-white font-semibold tracking-wide text-[15px] m-2 rounded-2xl hover:bg-slate-50 hover:bg-opacity-10 shadow-sm hover:shadow-[#fff]'>
            <h2>{linkName}</h2>
        </div>
    )
}

export default Titles
