import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div >
            <h5 className='  flex justify-center pt-2'><i onClick={() => {
                props.setVehiclePanelOpen(false)
            }} className="  text-3xl text-gray-300 ri-arrow-down-wide-fill"></i></h5>
            <h2 className='font-semibold text-2xl my-3'>Choose a Vehicle</h2>
            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.setVehiclePanelOpen(false)
            }} className='  mb-2 bg-white flex flex-row  justify-between w-full gap-2 py-4 px-2 items-start active:border-2 active:border-black rounded-xl'>
                <img className='w-16' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png" alt="" />
                <div className='flex flex-col  justify-between '>
                    <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-fill"></i></span> 4</h4>
                    <h5 className='font-medium text-base'>2 mins away</h5>
                    <p className='font-normal text-sm'>Affordable, compact rides</p>
                </div>
                <h2 className='text-lg font-semibold pe-2 items-start h-full'>₹193.00</h2>
            </div>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.setVehiclePanelOpen(false)
            }} className=' mb-2 bg-white flex flex-row  justify-between w-full gap-2 py-4 px-2 items-start active:border-2 active:border-black rounded-xl'>
                <img className="w-16 self-center" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className='flex flex-col  justify-between '>
                    <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i></span> 2</h4>
                    <h5 className='font-medium text-base'>2 mins away</h5>
                    <p className='font-normal text-xs'>Affordable, motorcycle rides</p>
                </div>
                <h2 className='text-lg font-semibold pe-2 items-start h-full'>₹65.00</h2>
            </div>

            <div onClick={() => {
                props.setConfirmRidePanel(true)
                props.setVehiclePanelOpen(false)
            }}  className=' mb-2 bg-white flex flex-row  justify-between w-full gap-2 py-4 px-2 items-start active:border-2 active:border-black rounded-xl'>
                <img className='w-16 self-center' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className='flex flex-col  justify-between '>
                    <h4 className='font-medium text-base'>Auto <span><i className="ri-user-fill"></i></span> 3</h4>
                    <h5 className='font-medium text-base'>2 mins away</h5>
                    <p className='font-normal text-sm'>Affordable, Auto rides</p>
                </div>
                <h2 className='text-lg font-semibold pe-2 items-start h-full'>₹117.00</h2>
            </div>
        </div>
    )
}

export default VehiclePanel
