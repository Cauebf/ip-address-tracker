import getIPAddress from "../../services/ip-address";
import Map from "../map";
import SearchBar from "../search-bar"
import Stats from "../stats";
import { useState, useEffect } from "react"

const IPAddress = () => {
    const [IPInformations, setIpInformations] = useState({
        city: '',
        country: '',
        ip: '',
        isp: '',
        latitude: '',
        longitude: '',
        postalCode: '',
        timezone: '',
    })

    const [error, setError] = useState(null);

    const fetchLocation = async (inputValue) => {
        try {
            const iPAddress = await getIPAddress(inputValue);

            setIpInformations({
                city: iPAddress.location.city,
                country: iPAddress.location.country,
                ip: iPAddress.ip,
                isp: iPAddress.isp,
                latitude: iPAddress.location.lat,
                longitude: iPAddress.location.lng,
                postalCode: iPAddress.postalCode,
                timezone: iPAddress.location.timezone,
            });

            setError(null);
        } catch (error) {
            setError('IP address not found ❌'); 
        }
    }

    useEffect(() => {
        fetchLocation()
    }, [])

    return (
        <>
            <SearchBar handleSearch={fetchLocation} error={error}/>
            <Stats data={IPInformations} error={error} />
            <Map lat={IPInformations.latitude} lng={IPInformations.longitude} />
        </>
    )
}

export default IPAddress