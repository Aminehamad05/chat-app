import { create } from "zustand";
import {axiosInstance} from "../lib/axios.js"
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";
export const useAuthStore = create((set) => ({
    authUser: null,
    isCheckingAuth: true,
    isSigninUp:false,
    isLoggingIn:false,
    isUpdateProfile:false,
    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check")
            set({authUser:res.data})
        } catch (error) {
            console.log("Error in checkAuth:",error.message)
            set({authUser:null})
        } finally {
            set({isCheckingAuth: false})
        }
    },
    signup: async (data) => {
        set ({isSigninUp: true});
        try {
            const resp = await axiosInstance.post("/auth/signup",data)
            set ({authUser: resp.data})
            toast.success("Account created successfully")
        } catch (error) {
            toast.error(error.response.message.data)
        }finally{
            set({isSigninUp:false})
        }
    },
    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout")
            set({authUser:null})
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to logout");
        }
    }
}))