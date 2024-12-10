import React from 'react'
import { Profile } from './Profile'
import { LinksList } from './LinksList'

export const ProfileCard = () => {
  return (
    <div className='container'>
      <Profile />
      <LinksList />
    </div>
  )
}
