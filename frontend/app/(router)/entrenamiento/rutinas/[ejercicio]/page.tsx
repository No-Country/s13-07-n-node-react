"use client";
import { useGlobalStore } from "@/app/store/GlobalStore";
import { useRouter } from "next/navigation";

import Ejercicios from "@/app/Components/Ejercicios";

const page = ({ params }: { params: any }) => {
    const router = useRouter();
    const isAuthClient = useGlobalStore((state) => state.isAuthClient);

    return (
        <>
            {isAuthClient ? (
                <Ejercicios params={params} />
            ) : (
                router.push("/acceso")
            )}
        </>
    );
};

export default page;
