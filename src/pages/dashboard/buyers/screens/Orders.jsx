import React, { useState } from 'react'
import Layout from '../components/Layout'
import SearchIcon from '../../../../Components/iconComponent/SearchIcon'
import Range from '../../../../Components/iconComponent/Range'
import { Eye, Lock, Check, X, Truck, Package, CheckCircle, MoreVertical } from 'lucide-react';
import Tomatoes from '../../../../assets/images/Tomatoes.webp'
import Maize from '../../../../assets/images/Maize.webp'
import Potatoes from '../../../../assets/images/potato.png'

const Orders = () => {
    const statuses = [ "All", "New", "Accepted", "Packed", "En Route", "Delivered", "Cancelled"]
    const [activeStatus, setActiveStatus] = useState("All")

    const [orders, setOrders] = useState([
      {
        id: '#001',
        date: '12/8/2025',
        items: 1,
        img: Tomatoes,
        buyer: 'Mama Nkechi Kitchen',
        status: 'En Route',
        statusColor: 'bg-[#FEF9C2] text-[#894B00]',
        statusIcon: <Truck className="w-4 h-4" />,
        total: '₦8,500',
        actions: 'locked',
        contact: '+234 801 234 5678',
        location: 'Lagos, Nigeria'
      },
      {
        id: '#002',
        date: '12/9/2025',
        items: 2,
        img: Maize,
        buyer: 'Lagos Agro Processors',
        status: 'New',
        statusColor: 'bg-[#DBEAFE] text-[#193CB8]',
        statusIcon: <Package className="w-4 h-4" />,
        total: '₦125,000',
        actions: 'editable',
        contact: '+234 802 345 6789',
        location: 'Abuja, Nigeria'
      },
      {
        id: '#003',
        date: '12/5/2026',
        items: 1,
        img: Potatoes,
        buyer: 'City Mart',
        status: 'Delivered',
        statusColor: 'bg-[#DCFCE7] text-[#016630]',
        statusIcon: <CheckCircle className="w-4 h-4" />,
        total: '₦52,000',
        actions: 'locked',
        contact: '+234 803 456 7890',
        location: 'Port Harcourt, Nigeria'
      },
    ]);

    const handleViewContact = (order) => {
      alert(`Contact: ${order.contact}\nLocation: ${order.location}`);
    };
  
    const handleApprove = (orderId) => {
      setOrders(orders.map(order => 
        order.id === orderId 
          ? { ...order, status: 'Approved', statusColor: 'bg-green-100 text-green-800', statusIcon: <CheckCircle className="w-4 h-4" /> }
          : order
      ));
      alert(`Order ${orderId} approved!`);
    };
  
    const handleReject = (orderId) => {
      setOrders(orders.filter(order => order.id !== orderId));
      alert(`Order ${orderId} rejected!`);
    };

    const filteredOrders = orders.filter(order => {
      return order.status.toLowerCase().includes(activeStatus.toLowerCase());
    });
    console.log(filteredOrders);
  
   /*  const getStatusIcon = (status) => {
      switch(status) {
        case 'En Route': return <Truck className="w-4 h-4" />;
        case 'New': return <Package className="w-4 h-4" />;
        case 'Delivered': return <CheckCircle className="w-4 h-4" />;
        default: return <Package className="w-4 h-4" />;
      }
    }; */
    

  return (
    <Layout>
        <div>
            <h2 className='Manrope font-bold text-2xl mb-1'>Orders</h2>
            <p className='inter text-base text-gray-400 font-normal mb-6'>Manage and track your incoming orders.</p>
        </div>
        <div className='flex flex-wrap gap-6 border-b-2 border-gray-200'>
            {statuses.map((status) => (
                <div key={status} onClick={() => setActiveStatus(status)} className={`${activeStatus === status ? 'border-b-2 border-green-500 text-green-500 cursor-pointer' : 'text-[#666666] cursor-pointer hover:text-green-500'}`}>
                    <p className='inter py-3 px-6 text-center font-medium text-sm'>{status}</p>
                </div>
            ))}
        </div>

        <div className="p-[17px] bg-white rounded-xl border flex gap-4 border-[#E5E7EB] my-6">
        <div className="w-full flex items-center relative">
          <input
            type="text"
            placeholder="Search by Order Id or Buyer Name..."
            className="w-full outline-gray-300 inter font-normal text-sm px-3 pl-10 py-[10px] rounded-lg border border-[#E5E7EB] text-[#666666] bg-[#F8F9FA] "
          />
          <div className="absolute left-3 ">
            <SearchIcon />
          </div>
        </div>
        <div className="w-full max-w-32 flex justify-center py-2 border border-[#E5E7EB] rounded-lg ">
          <div className="flex gap-2 items-center">
            <Range />
            <p className="text-[#666666] inter font-normal text-sm ">
              Date Range
            </p>
          </div>
        </div>
      </div>

      
     {/*  <div className='overflow-x-auto rounded-xl border border-[#E5E7EB] shadow-md bg-white'>
          <table className=' min-w-full text-left'>
            <thead  className='font-bold text-xs uppercase inter text-[#666666]  bg-[#F0F2F5] px-6 py-4'>
              <tr>
                <th className="px-6 py-4">ORDER DETAILS</th>
                <th>BUYER</th>
                <th>STATUS</th>
                <th>TOTAL</th>
                <th>ACTION</th>
              </tr>
            </thead>
          </table>
        </div> */}
                {/* Desktop Table */}
                <div className=" lg:block bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-[#666666] uppercase tracking-wider">
                  ORDER DETAILS
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-[#666666] uppercase tracking-wider">
                  Buyer
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-[#666666] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-[#666666] uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-[#666666] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className='flex gap-6 items-center'>
                      <img src={order.img} alt={order.items} className='w-10 h-10 rounded-lg' />
                      <div>
                      <div className="text-sm font-semibold text-gray-900">{order.id}</div>
                      <div className="text-sm text-gray-500">
                        {order.items} {order.items === 1 ? 'Item' : 'Items'} • {order.date}
                      </div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{order.buyer}</div>
                      <button
                        onClick={() => handleViewContact(order)}
                        className="text-sm text-[#4CAF50] hover:text-green-800 flex items-center gap-1 mt-1"
                      >
                        {/* <Eye className="w-4 h-4" /> */}
                        View Contact
                      </button>
                    </div>
                  </td>
                  
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${order.statusColor}`}>
                      {order.statusIcon}
                      {order.status}
                    </div>
                  </td>
                  
                  <td className="px-6 py-5 whitespace-nowrap">
                    <div className="text-base inter font-medium text-gray-900">{order.total}</div>
                  </td>
                  
                  <td className="px-6 py-5 whitespace-nowrap">
                    {order.actions === 'locked' ? (
                      <div className="flex items-center justify-end gap-2 text-gray-400">
                        <Eye className="w-[18px] h-[18px]" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-end gap-2 text-gray-400">
                        <button
                          onClick={() => handleApprove(order.id)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Approve Order"
                        >
                          <Check className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleReject(order.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Reject Order"
                        >
                          <X className="w-5 h-5" />
                        </button>
                        <Eye className="w-[18px] h-[18px]" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

    </Layout>
  )
}

export default Orders