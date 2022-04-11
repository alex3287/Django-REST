import React from "react";


const UserItem = ({users}) => {
    return (
        <tr>
            <td>
                {users.username}
            </td>
            <td>
                {users.firstname}
            </td>
            <td>
                {users.lastname}
            </td>
            <td>
                {users.email}
            </td>
        </tr>
    )
}


const UserList = ({users}) => {
    return (
        <table>
            <th>
                User name
            </th>
            <th>
                First name
            </th>
            <th>
                Last name
            </th>
            <th>
                Email
            </th>
            {users.map((users) => <UserItem users={users} /> )}
        </table>
    )
}


export default UserList