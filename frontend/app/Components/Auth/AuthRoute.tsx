"use client"
import { useGlobalStore } from "@/app/store/GlobalStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthRoute = ({ children }: {children : any}) => {
    const isAuthClient = useGlobalStore((state) => state.isAuthClient);

    return isAuthClient ? children : null;
};

export default AuthRoute;
