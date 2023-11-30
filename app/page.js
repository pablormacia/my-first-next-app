import Users from "@/components/Users"

async function fetchUsers (){
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  //console.log(data.data) // Para traer solos los users de esta api
  return data.data
}

const HomePage = async () => {
  const users = await fetchUsers()
  return (
    <Users users={users} />
  )
}

export default HomePage