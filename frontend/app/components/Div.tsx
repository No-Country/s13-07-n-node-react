import React from 'react'
import { useStore } from '../store/store'



const Div = () => {
  const { count, inc } = useStore()
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}

export default Div