import { useState, useEffect } from 'react';
import { Virtuoso } from 'react-virtuoso'

const Virtualization = () => {
    const [users, setUsers] = useState([])

    async function getUsers() {
        let resp = await fetch("https://dummyjson.com/users?limit=1000")
        let data = await resp.json()
        console.log(data)
        setUsers(data.users)
    }
    useEffect(() => {
        getUsers()
    }, [])
    return (
        <>
            <h1>Learn Virtualization......</h1>
            {
                users.length > 0 ?
                    <>
                        <Virtuoso
                            style={{ height: '400px', width: "400px", margin: "0 auto", border: "1px solid black" }}
                            totalCount={users.length}
                            itemContent={(index) => {
                                console.log(index)
                                let user = users[index]
                                return (
                                    <div style={{ padding: '10px', display: "flex" }}>
                                        <h3>{user.firstName}</h3>
                                        <button>Hire Me</button>
                                    </div>
                                )
                            }}

                        />
                    </>
                    //  <section>
                    //     {users.map((user, index) => {
                    //         return <div key={index} style={{ margin: "10px", color: 'blue' }}>
                    //             <h3 >{user.firstName}</h3>
                    //             <button style={{ margin: "20px", padding: "5px", color: "red" }}>Hire Me</button>
                    //         </div>
                    //     })}
                    // </section> 
                    : <p>loading</p>
            }
        </>
    )
}
export default Virtualization;