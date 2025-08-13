// components/RoutePrefetcher.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RoutePrefetcher = () => {
  const router = useRouter();

  useEffect(() => {
    // Start preloading after home has loaded
    const preload = () => {
      router.prefetch("/AllServices/MovingServices");
      router.prefetch("/AllServices/CleaningServices");
      router.prefetch("/AllServices/MaintenanceServices");
      router.prefetch("/AllServices/PestControl");
      router.prefetch("/GetAquote");
    };

    const timer = setTimeout(preload, 1000); // wait 1 second after load
    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default RoutePrefetcher;
