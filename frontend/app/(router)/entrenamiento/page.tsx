"use client";
import { useGlobalStore } from "@/app/store/GlobalStore";
import { useRouter } from "next/navigation";

import Entrenamiento from "@/app/views/Entrenamiento";

const page = () => {
    const router = useRouter();
    const isAuthClient = useGlobalStore((state) => state.isAuthClient);

    return <>{isAuthClient ? <Entrenamiento /> : router.push("/acceso")}</>;
};

export default page;
