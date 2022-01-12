import axios from "axios";

const instance = axios.create({
     withCredentials: true,
     headers:{
          'API-kEY':'fe88c94b-7e3d-4776-912d-349e13ec1b3a',
     },
     baseURL:'https://social-network.samuraijs.com/api/1.0/'

})

export const usersAPI={
     getUsers:(currentPage =1,pageSize=10) => {
          return instance.get(`users?page=${currentPage}&count=${pageSize}`)
              .then(response =>{return response.data})
     },
     follow:(userId:string)=>{
        return instance.post(`follow/${userId}`)
     },
     unfollow:(userId:string)=>{
         return instance.delete(`follow/${userId}`)
     },
     getProfile:(userId:string)=>{
          return instance.get(`profile/${userId}`)
     },
}
export  const profileAPI={
     getStatus:(userId:string)=>{
          return instance.get(`profile/status/${userId}`)
     },
     updateStatus:(status:string)=>{
          return instance.put('profile/status', {status})
     }
}

export const authAPI={
     me:() => {
          return instance.get(`auth/me`)
     }
}

