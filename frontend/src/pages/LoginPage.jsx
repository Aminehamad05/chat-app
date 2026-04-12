import React from 'react'
import { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { Eye, EyeOff, Mail, MessageSquare, Lock, Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const LoginPage = () => {
  const [showPassword,setShowPassword]= useState(false)
  const [formData,setFormData]= useState({
    email:"",
    password:""
  })
  const {login,isLoggingIn}=useAuthStore()
  const validateform= ()=>{
    if(!formData.email.trim() || !formData.password.trim() ) {
      toast.error("You must fill all the credentials")
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Invalid email")
      return false
    }
    return true
  }
    
  const handleSubmit = async(e) => {
    e.preventDefault()
    const success= validateform()
    if(success) login(formData)
  }
  return (
      <form 
      className="flex flex-col justify-center items-center p-6 sm:p-12"
      onSubmit={handleSubmit}
      >
  <div className="w-full max-w-md space-y-8">

    {/* LOGO */}
    <div className="text-center mt-8 mb-8">
      <div className="flex flex-col items-center gap-2 group">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <MessageSquare className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mt-2">Login</h1>
      </div>
    </div>

    {/* EMAIL */}
    <div className="form-control">
      <label className="label">
        <span className="label-text font-medium">Email</span>
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
          <Mail className="w-5 h-5 text-base-content/60" />
        </div>
        <input 
          type="email"
          className="input input-bordered w-full pl-10"
          placeholder="amine@email.com"
          value={formData.email}
          onChange={(e)=> setFormData({...formData, email: e.target.value})}
        
        />
      </div>
    </div>

    {/* PASSWORD */}
    <div className="form-control">
      <label className="label">
        <span className="label-text font-medium">Password</span>
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
          <Lock className="w-5 h-5 text-base-content/60" />
        </div>
        <input 
          type={showPassword ? "text" : "password"}
          className="input input-bordered w-full pl-10 pr-10"
          placeholder="********"
          value={formData.password}
          onChange={(e)=> setFormData({...formData, password: e.target.value})}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer hover:opacity-70"
          onClick={()=> setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5 text-base-content/60" />
          ) : (
            <Eye className="w-5 h-5 text-base-content/60" />
          )}
        </button>
      </div>
    </div>

    {/* SUBMIT */}
    <button 
      type="submit" 
      className="btn btn-primary w-full cursor-pointer" 
      disabled={isLoggingIn}
    >
      {isLoggingIn ? (
        <>
          <Loader2 className="size-5 animate-spin" />
          Loading...
        </>
      ) : (
        "Login"
      )}
    </button>

    {/* FOOTER */}
    <div className="text-center">
      <p className="text-base-content/60">
        Don't have an account?{" "}
        <Link to="/signup" className="link link-primary">
          Sign up
        </Link>
      </p>
    </div>

  </div>
</form>
  
  )
}

export default LoginPage