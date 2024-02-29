"use client";
import { useGlobalStore } from "@/app/store/GlobalStore";
import { useRouter } from "next/navigation";

import InicioCliente from "@/app/views/InicioCliente";

const page = () => {
    const router = useRouter();
    const isAuthClient = useGlobalStore((state) => state.isAuthClient);

    return <>{isAuthClient ? <InicioCliente /> : router.push('/acceso')}</>;
};

export default page;
