import { useEffect } from 'react';
import styled from 'styled-components';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import { Icon } from 'leaflet';
import "leaflet/dist/leaflet.css"

const Map = ({ lat, lng }) => {
    
    const position = [lat, lng]
    
    const customIcom = new Icon({
        iconUrl: "public/svg/icon-location.svg",
        iconSize: [35, 45]
    })

    const RecenterOnPosition = () => {
        const map = useMap();

        useEffect(() => {
            map.flyTo(position, 13, {
                animate: true
            });
        }, [map, position]);

        return null;
    }


    return (
        <>
            <StyledMapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={true}
                zoomControl={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={customIcom}></Marker>
                <RecenterOnPosition />
            </StyledMapContainer>
        </>
    )
}

const StyledMapContainer = styled(MapContainer)`
    position: relative;
    z-index: 0;
    height: 
    70.5vh;
    width: 100%;

    &:focus-visible {
        outline: none;
    }
`;

export default Map