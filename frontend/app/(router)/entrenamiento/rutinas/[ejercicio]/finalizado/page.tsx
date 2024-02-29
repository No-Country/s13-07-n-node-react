"use client";
import { useGlobalStore } from "@/app/store/GlobalStore";
import { useRouter } from "next/navigation";

import EjercicioFinalizado from "@/app/Components/EjercicioFinalizado";

const page = () => {
    const router = useRouter();
    const isAuthClient = useGlobalStore((state) => state.isAuthClient);

    return (
        <>{isAuthClient ? <EjercicioFinalizado /> : router.push("/acceso")}</>
    );
};

export default page;
