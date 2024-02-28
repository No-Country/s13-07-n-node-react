"use client";
import { useGlobalStore } from "@/app/store/GlobalStore";
import { useRouter } from "next/navigation";

import CalificarProfesor from "@/app/views/CalificarProfesor";

const page = ({ params }: { params: { profesor: string } }) => {
    const router = useRouter();
    const isAuthClient = useGlobalStore((state) => state.isAuthClient);

    return (
        <>
            {isAuthClient ? (
                <CalificarProfesor params={params} />
            ) : (
                router.push("/acceso")
            )}
        </>
    );
};

export default page;
