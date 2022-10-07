import axios from "axios";

const instance = axios.create({
   withCredentials: true,
   headers: { 'API-KEY': 'a25f49f1-f072-41c7-97c6-2c4324f32576' },
   baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
         .then(res => {
            return res.data;
         });
   },
   follow(userId) {
      return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)

   },
   unfollow(userId) {
      return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)

   }
}

