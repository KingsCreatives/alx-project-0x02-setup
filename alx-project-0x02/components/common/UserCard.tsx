import { UserProps } from "@/interfaces"
import React from "react"

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
        <p className="text-sm text-gray-500">@{user.username}</p>
      </div>

     
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {user.email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Phone:</span> {user.phone}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Website:</span>{" "}
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {user.website}
        </a>
      </p>

    
      {user.address && (
        <div className="mt-4 text-gray-700">
          <h3 className="font-semibold">Address:</h3>
          <p>
            {user.address.suite}, {user.address.street}, {user.address.city},{" "}
            {user.address.zipcode}
          </p>
          <p className="text-sm text-gray-500">
            Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
          </p>
        </div>
      )}

      
      {user.company && (
        <div className="mt-4 text-gray-700">
          <h3 className="font-semibold">Company:</h3>
          <p className="font-medium">{user.company.name}</p>
          <p className="italic text-gray-500">"{user.company.catchPhrase}"</p>
          <p className="text-sm">{user.company.bs}</p>
        </div>
      )}

     
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {user.id}</span>
        <span>🌍 Profile Active</span>
      </div>
    </div>
  )
}

export default UserCard
