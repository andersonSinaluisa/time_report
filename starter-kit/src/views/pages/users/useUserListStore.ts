import type { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import type { UserProperties } from '@/@fake-db/types'
import type { UserParams } from '@/views/apps/user/types'
import axiosIns from '@/plugins/axios'

export const useUserListStore = defineStore('UserListStore', {
  actions: {

    // 👉 Fetch users data
    fetchUsers(params: UserParams) { return axiosIns.get('/apps/users/list', { params }) },

    // 👉 Add User
    addUser(userData: UserProperties) {
      return new Promise((resolve, reject) => {
        axiosIns.post('/apps/users/user', {
          user: userData,
        }).then(response => resolve(response))
          .catch(error => reject(error))
      })
    },

    // 👉 fetch single user
    fetchUser(id: number) {
      return new Promise<AxiosResponse>((resolve, reject) => {
        axiosIns.get(`/apps/users/${id}`).then(response => resolve(response)).catch(error => reject(error))
      })
    },
  },
})
