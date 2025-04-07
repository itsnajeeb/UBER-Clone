import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'


const Home = () => {
  const panelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const panelCloseRef = useRef(null)
  const vehiclePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const WaitingForDriverRef = useRef(null)

  const [pickUp, setPickUp] = useState('');
  const [destination, setDestination] = useState('');
  const [PanelOpen, setPanelOpen] = useState(false)
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setvehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)


  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(() => {
    if (PanelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    }
    else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [PanelOpen])

  useGSAP(function () {
    if (vehiclePanelOpen) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0%)'
      })
    }
    else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanelOpen])

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(0%)'
      })

    }
    else {
      gsap.to(confirmRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmRidePanel])


  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0%)'
      })

    }
    else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(0%)'
      })
    }
    else {
      gsap.to(WaitingForDriverRef.current, {
        transform: 'translateY(100%)'
      })
    }
  },[waitingForDriver])

  return (
    <div className='relative'>
      <img className='w-20 pt-5 ps-5 absolute ' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div>
        <img className='h-screen  w-full object-cover ' src="https://s.wsj.net/public/resources/images/BN-XR453_201802_M_20180228165619.gif" alt="" />
        <div className=' fixed  top-0  h-screen flex flex-col justify-end '>
          <div className='h-[30%] p-5 bg-white relative'>
            <h5 ref={panelCloseRef}
              onClick={() => {
                setPanelOpen(false)
              }}
              className='absolute top-6 right-6 opacity-0'><i className="ri-arrow-down-wide-line"></i></h5>
            <h4 className='text-2xl font-semibold '>Find a trip</h4>
            <form onSubmit={(e) => {
              submitHandler(e)
            }} className=''>
              <div className='line h-[70px] w-1 absolute top-[45%] left-[10%]  bg-gray-900 rounded-full'></div>
              <input
                value={pickUp}
                onChange={(e) => {
                  setPickUp(e.target.value)
                }}
                onClick={() => {
                  setPanelOpen(true)
                }}
                type="text"
                className='bg-slate-200 p-2 px-10 w-full mt-5 border-none outline-none text-lg rounded-lg placeholder:text-base' placeholder=' Add a Pick-up Location' />
              <input
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value)
                }}
                onClick={() => {
                  setPanelOpen(true)
                }}
                type="text"
                className='bg-slate-200 p-2 px-10 w-full mt-5 border-none outline-none text-lg rounded-lg placeholder:text-base' placeholder=' Enter Your Detination' />
            </form>
          </div>
          <div ref={panelRef} className='h-[0%]  bg-white   '>
            <LocationSearchPanel PanelOpen={PanelOpen} setPanelOpen={setPanelOpen} vehiclePanelOpen={vehiclePanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
          </div>
        </div>
      </div>

      {/* Vehicle Panel Details */}
      <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 w-full px-3 pb-5 bg-white translate-y-full'>
        <VehiclePanel setVehiclePanelOpen={setVehiclePanelOpen} setConfirmRidePanel={setConfirmRidePanel} />
      </div>

      {/* Ride Confirmation Panel */}

      <div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 w-full px-3 pb-5 bg-white translate-y-full'>
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setvehicleFound={setvehicleFound} />
      </div>
      {/* Looking For a Driver Panel for user booking */}
      <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 w-full px-3 pb-5 bg-white translate-y-full'>
        <LookingForDriver setvehicleFound={setvehicleFound} />
      </div>

      {/* Waiting For a Driver Panel for user booking */}
      <div ref={WaitingForDriverRef} className='fixed z-10 bottom-0 w-full px-3 pb-5 bg-white'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>



    </div>
  )
}

export default Home
