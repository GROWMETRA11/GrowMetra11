import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import ArrowBack from '../../../../../Components/iconComponent/ArrowBack'

const AddFunds = () => {
  return (
    <DashboardLayout>
        <section>
            <div className='flex '>
                <ArrowBack />
                <span>
                    <p>Add Funds</p>
                    <p>Select your preferred payment method</p>
                </span>
            </div>
        </section>
    </DashboardLayout>
  )
}

export default AddFunds