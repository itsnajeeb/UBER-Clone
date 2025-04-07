import React from 'react'

const WaitingForDriver = (props) => {
    return (

        <div>
            {/* {props.setWaitingForDriver(false)} */}
            <div className='py-2'>
                <h3 className='flex justify-center text-3xl text-gray-300 '><i className="  ri-arrow-down-wide-fill"></i></h3>
                <h1 className='font-semibold text-xl mt-3 mb-5'>Waiting For a Driver</h1>
                <div className=' flex justify-between '>
                    <img className='w-32' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
                    <div className='flex flex-col'>
                        <h4 className='font-semibold  self-end'>Najeeb</h4>
                        <h4 className='font-bold text-lg self-end'>MP04 AB 1234</h4>
                        <h4 className=' text-sm self-end'>Maruti suzuki Alto</h4>
                    </div>
                </div>
                <div className='flex flex-col space-y-1 px-3 mt-5'>
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

            </div>
        </div>
    )
}

export default WaitingForDriver
