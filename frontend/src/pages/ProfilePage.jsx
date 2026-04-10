import React from 'react'
import { useAuthStore } from '../store/useAuthStore'
const ProfilePage = () => {
      const {authUser,isUpdatingProfile,updateProfile}= useAuthStore()
      const handleImageUpload = async (e) => {}
  return (
    <div className="h-screen pt-20">
      <div className='max-w-2xl mx-auto p-4 space-y-8'>
        <div className=''></div>
      </div>
    </div>
  )
}

export default ProfilePage