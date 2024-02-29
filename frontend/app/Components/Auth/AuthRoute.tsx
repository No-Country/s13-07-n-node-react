"use client"
import { useGlobalStore } from "@/app/store/GlobalStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthRoute = ({ children }: {children : any}) => {
    const router = useRouter();
    const isAuthClient = useGlobalStore((state) => state.isAuthClient);

    useEffect(() => {
        if (!isAuthClient) {
            router.push('/acceso');
        }
    }, [isAuthClient]);

    return isAuthClient ? children : null;
};

export default AuthRoute;