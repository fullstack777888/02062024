import './App.css'
import Card from './components/card/card'
import { useState } from 'react'

function App() {
    const [flights, setFlights] = useState([
        { id: 1, airlineCompany: 'Elal', destination: 'USA', originCountry: 'TEL-AVIV' },
        { id: 2, airlineCompany: 'WizzAir', destination: 'Uk', originCountry: 'Zimbabwe' },
        { id: 3, airlineCompany: 'LuftHansa', destination: 'Ukraine', originCountry: 'Russian' },
        { id: 4, airlineCompany: 'Elal', destination: 'USA', originCountry: 'Dubai' },
    ])


    const mapFlights = () => {
        return flights.map((flight) =>
            <tr key={flight.id}>
                <td>
                    {flight.airlineCompany}
                </td>
                <td>
                    {flight.destination}
                </td>
                <td>
                    {flight.originCountry}
                </td>
            </tr>
        )
    }

    const onDeleteFlightHandler = (id) => {
        const updatedFlights = flights.filter((flight) => flight.id !== id)
        setFlights(updatedFlights)
    }

    return (
        <>
            {/* <table>
                <thead>
                    <tr>
                        <th>
                            airline company:
                        </th>
                        <th>
                            destination:
                        </th>
                        <th>
                            originCountry:
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {mapFlights()}
                </tbody>
            </table> */}

            {flights.map((flight) =>
                <Card flight={flight} click={onDeleteFlightHandler} key={flight.id} />
            )}

        </>
    )
}

export default App
