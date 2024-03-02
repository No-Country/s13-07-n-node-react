"use client"
import { useGlobalStore } from "@/app/store/GlobalStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthRoute = ({ children }: {children : any}) => {
    const isAuthClient = useGlobalStore((state) => state.isAuthClient);

<<<<<<< Updated upstream
    useEffect(() => {
        if (!isAuthClient) {
            router.push('/acceso');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthClient]);

=======
>>>>>>> Stashed changes
    return isAuthClient ? children : null;
};

export default AuthRoute;
