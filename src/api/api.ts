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
     follow:(userId:any)=>{
        return instance.post(`follow/${userId}`)
     },
     unfollow:(userId:any)=>{
         return instance.delete(`follow/${userId}`)
     },
     getProfile:(userId:any)=>{
          return instance.get(`profile/${userId}`)
     },
}

export const authAPI={
     me:() => {
          return instance.get(`auth/me`)
     }
}

