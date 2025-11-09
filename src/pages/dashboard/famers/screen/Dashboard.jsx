import React from 'react'
import DashboardLayout from '../components/DashboardLayout'

const Dashboard = () => {
  return (
    <DashboardLayout>
      { /* Text */ }
      <h2 className='font-normal text-3xl'>Welcome, Abdurrahman.</h2>
      <p className='text-[16px] font-normal'> Your personalized marketplace dashboard </p>
    </DashboardLayout>
  )
}

export default Dashboard