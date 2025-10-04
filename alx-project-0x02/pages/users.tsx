import React from "react"
import { GetStaticProps } from "next"
import Header from "@/components/layout/Header"
import { UserProps } from "@/interfaces"
import { getUsers } from "@/services/user"
import UserCard from "@/components/common/UserCard"

interface UsersPageProps {
  users: UserProps[]
}


export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  const users = await getUsers()
  return {
    props: {
      users,
    },
    revalidate: 60, 
  }
}

const UsersPage = ({ users }: UsersPageProps) => {
  return (
    <main>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Users</h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default UsersPage
