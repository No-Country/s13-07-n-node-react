"use client";
import { useGlobalStore } from "@/app/store/GlobalStore";
import { useRouter } from "next/navigation";

import Activity from "./notas/page";

const page = () => {
    const router = useRouter();
    const isAuthClient = useGlobalStore((state) => state.isAuthClient);

    return <>{isAuthClient ? <Activity /> : router.push("/acceso")}</>;
};

export default page;
