import React from 'react'

const LocationSearchPanel = (props) => {

    //Sample Array for location
    //console.log(props);

    const location = [

        {
            id: 1,
            address: "24B, Near Kapoor's cafe, Sheriyan Coding School, Bhopal "
        },
        {
            id: 2,
            address: "12C, Near Kapoor's cafe, Sheriyan Coding School, Bhopal ",
        },

        {
            id: 3,
            address: "14A, Anwar Manzil Ret Ghat Chorah, Near Mahboob Apartment Bhopal ",
        },

        {
            id: 4,
            address: "12C, Near Kapoor's cafe, Sheriyan Coding School, Bhopal ",
        },

        {
            id: 5,
            address: "14A, Anwar Manzil Ret Ghat Chorah, Near Mahboob Apartment Bhopal ",
        }
    ]
    return (
        <div>
            {/* This is Simple Data  */}
            {
                location.map(function (elem) {
                    return <div onClick={() => {
                        props.setPanelOpen(false)
                        props.setVehiclePanelOpen(true)

                    }} key={elem.id} className='flex border-2 p-2 rounded-xl border-white active:border-black justify-start gap-3 my-2 '>
                        <h2 className=' self-center bg-[#eee] h-9 w-14 flex justify-center items-center rounded-full'><i className="ri-map-pin-fill "></i></h2>
                        <h4 className='font-medium'>{elem.address}</h4>
                    </div>
                })
            }

        </div>
    )
}

export default LocationSearchPanel
