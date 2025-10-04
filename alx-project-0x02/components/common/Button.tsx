import React, { ReactNode } from 'react'
import type { ButtonProps } from '@/interfaces'

const Button = ({
  size = "medium",
  shape = "rounded-md",
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) => {
 
  const sizeClasses: Record<typeof size, string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  }

 
  const baseClasses =
    "bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${shape} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
