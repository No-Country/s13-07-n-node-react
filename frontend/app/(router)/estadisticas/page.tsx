"use client";
import { useGlobalStore } from "@/app/store/GlobalStore";
import { useRouter } from "next/navigation";

import Estadisticas from "@/app/views/Estadisticas";

const page = () => {
    const router = useRouter();
    const isAuthClient = useGlobalStore((state) => state.isAuthClient);

    return <>{isAuthClient ? <Estadisticas /> : router.push("/acceso")}</>;
};

export default page;
