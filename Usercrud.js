import { userUrl } from "./Config";

export const addUser = async (userData)=>{
    const response =await fetch(
        `${userUrl}/user`,
    {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(userData)
            }

    );
    const user= await response.json();
    return user;
}

export const getUser=async()=>{
    const response = await fetch(
        `${userUrl}/user`
    );
    const users= await response.json();
    return users;
}

export const updateUser=async(userId,userData)=>{
    const response = await fetch(
        `${userUrl}/user/${userId}`,
        {
            method:'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(userData)
        }
    );
    const users= await response.json();
    return users;
}


export const getProfile =async (userId)=>{
    const response =await fetch(
        `${userUrl}/user/${userId}`
        );
        const users= await response.json();
        return users;
    
}

export const deleteUser = async(userId)=>{
    const response =await fetch(
        `${userUrl}/user/${userId}`,
    {
        method:'DELETE'
            }

    );
    const user= await response.json();
    return user;
}