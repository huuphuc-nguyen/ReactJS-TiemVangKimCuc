import { useEffect, useState } from "react";

const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState('desktop');
  
    useEffect(() => {
      const updateDeviceType = () => {
        if (window.innerWidth < 768) {
          setDeviceType('mobile');
        } else if (window.innerWidth < 1024) {
          setDeviceType('tablet');
        } else {
          setDeviceType('desktop');
        }
      };
  
      window.addEventListener('resize', updateDeviceType);
      updateDeviceType(); // Set initial device type
  
      return () => {
        window.removeEventListener('resize', updateDeviceType);
      };
    }, []);
  
    return deviceType;
  };

  export default useDeviceType;