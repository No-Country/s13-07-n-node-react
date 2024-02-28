"use client";
import { useGlobalStore } from "@/app/store/GlobalStore";
import { useRouter } from "next/navigation";

import Profesores from "@/app/views/Profesores";

const page = () => {
    const router = useRouter();
    const isAuthClient = useGlobalStore((state) => state.isAuthClient);

    return <>{isAuthClient ? <Profesores /> : router.push("/acceso")}</>;
};

export default page;
