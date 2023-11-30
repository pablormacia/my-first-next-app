'use client'
import Image from "next/image"
import Link from "next/link"

function Users({users}) {
  return (
    <ul>
      {
        users.map(user=>(
            <Link href={`/users/${user.id}`} key={user.id}>
          <li 
             
            className="bg-slate-400 mb-2 p-4 rounded-md"
            >
            <div>
              <h5 className="font-bold">{user.id} {user.first_name} {user.last_name}</h5>
              <p>User: {user.email}</p>
              <img src={user.avatar} alt={user.first_name} />
            </div>
           
            </li>
            </Link>
        ))
      }
    </ul>
  )
}

export default Users