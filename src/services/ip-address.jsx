async function getIPAddress(ip = '') {
    const apiKey = import.meta.env.VITE_IP_API_KEY;
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`)
    return await response.json()
}

export default getIPAddress