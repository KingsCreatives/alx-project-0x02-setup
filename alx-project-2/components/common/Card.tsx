import React from 'react'
import { CardProps } from '@/interfaces'

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="flex flex-col p-4 bg-white shadow-lg rounded-xl cursor-pointer 
                    hover:scale-105 transition-transform duration-300 ease-in-out">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  )
}

export default Card
