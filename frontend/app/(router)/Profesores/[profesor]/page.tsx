"use client"
import CalificarProfesor from '@/app/views/CalificarProfesor'
import React from 'react'

const page = ({ params }: { params: { profesor: string } }) => {
  return (
    <div>
      <CalificarProfesor params={params} />
    </div>
  )
}

export default page;