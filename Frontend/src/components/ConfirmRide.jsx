import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div className='py-2'>
            <h3 className='flex justify-center text-3xl text-gray-300 '><i className="  ri-arrow-down-wide-fill"></i></h3>
            <h1 className='font-semibold text-xl mt-3'>Confirm Your Ride</h1>
            <div className=' flex justify-center'>
                <img className='w-64 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
            </div>
            <div className='flex flex-col space-y-1 px-3 mt-1'>
                <div className='border-b-2 py-2 flex flex-row items-center'>
                    <h4 className='text-xl mr-4'><i className="ri-map-pin-user-fill"></i></h4>
                    <div className=''>
                        <p className='font-semibold text-lg'>562/11-A</p>
                        <p className='text-sm'>Kankariya Talab, Bhopal</p>
                    </div>
                </div>

                <div className='border-b-2 py-2 flex flex-row items-center'>
                    <h4 className='text-xl mr-4'><i className="ri-map-pin-2-fill"></i></h4>
                    <div className=''>
                        <p className='font-semibold text-lg'>562/11-A</p>
                        <p className='text-sm'>Kankariya Talab, Bhopal</p>
                    </div>
                </div>

                <div className='border-b-2 py-2 flex flex-row items-center'>
                    <h4 className='text-xl mr-4'><i className="ri-currency-line"></i></h4>
                    <div className=''>
                        <p className='font-semibold text-lg'>₹193.20</p>
                        <p className='text-sm'>Cash</p>
                    </div>
                </div>
            </div>
            <div className=' flex  justify-center self-center'>

                <button 
                onClick={()=>{
                    props.setvehicleFound(true)
                    props.setConfirmRidePanel(false)
                }}
                className='mt-5 bg-green-500 text-white w-full mx-3 py-2 font-semibold rounded-md cursor-pointer'>Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmRide
