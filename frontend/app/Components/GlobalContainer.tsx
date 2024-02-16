import React from 'react'


function GlobalContainer({children}:any) {
  return (
    <div className='w-[100%] px-[16px] pt-[32px]'>
        {children}
    </div>
  )
}

export default GlobalContainer;