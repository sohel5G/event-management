import { useEffect, useState } from "react";


const useGetServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const loadServices = async() => {
            const res = await fetch('/services.json');
            const data = await res.json();
            setServices(data);
        }
        loadServices()
    }, [])
    return services;
}

export {useGetServices}