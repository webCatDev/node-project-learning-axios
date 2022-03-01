import axios from "axios";

 const getUserData= async (userId)=>{
    const {data:userData}=await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const {data:userPost}=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    return {userData:userData, userPost:userPost}
}

export default getUserData;