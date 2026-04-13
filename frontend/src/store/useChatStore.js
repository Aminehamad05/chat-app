import { create } from "zustand";
import toast from "react-hot-toast";
import {axiosInstance} from '../lib/axios.js';


export const userChatStore = create((set) => ({
    messages: [],
    users:[],
    selectedUser: null,
    isUserLoading:false,
    isUsersLoading: false,
    isMessagessLoading: false,
    getUsers: async()=>{
        try {
            const res = await axiosInstance.get("/messages/users")
            set({users:res.data})
        } catch (error) {
            toast.error(error.response.data.message);
        }finally{
            set({isUserLoading:false})
        }
    },
    getMessages: async(userId)=>{
        set({isMessagessLoading: true});
        try {
            const res = await axiosInstance.get(`/messages/${userId}`)
            set({messages: res.data})
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isMessagessLoading: false})
        }
    },
    //todo: optimize this one later
    setSelectedUser: (selectedUser) => set({selectedUser})
}))