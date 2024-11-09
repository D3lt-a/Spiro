import React from 'react'

function StationsList() {
    const [stations, setStations] = React.useState([])

    React.useEffect(() =>{
        fetch('../../../stations.json')
            .then(res => res.json())
            .then(data => setStations(data.StationsData))
            .catch(err => console.log(err))
    }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stations.map((station, index)=>{
            return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                    <h2 className="text-2xl font-bold">{station.name}</h2>
                    <p className="text-gray-600">Location: {station.address}</p>
                    <p className="text-gray-600">Services: {Object.keys(station.Services).map((service, index) => (
                        <span key={index} className="mr-2"> <p className='font-bold inline-flex'>{service }</p>: {station.Services[service] ? 'Yes' : 'No'}</span>
                    ))}</p>
                    <p className="text-gray-600">Available Batteries: {station.Batteries.available}</p>
                    <p className="text-gray-600">Working Hours: {station.Status.workingTime}</p>
                    <p className="text-gray-600">Open: {station.Status.available ? 'Yes' : 'No'}</p>
                    <p className="text-gray-600">Contact: {station.Status.contact}</p>
                </div>
            )
        })}
    </div>
  )
}

export default StationsList


