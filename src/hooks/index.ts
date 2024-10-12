import { useEffect, useState } from "react";

type DeviceType = 'desktop' | 'mobile' | null;

export function useDeviceType() {
    const [width, setWidth] = useState(window.innerWidth);
    const [deviceType, setDeviceType] = useState<DeviceType>(null);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [width, setWidth])

    useEffect(() => {
        if (width < 768) {
            setDeviceType('mobile');
        } else {
            setDeviceType('desktop');
        }
    }, [width, setDeviceType])

    return { deviceType };
}