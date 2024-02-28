"use client";
import { useGlobalStore } from "@/app/store/GlobalStore";
import { useRouter } from "next/navigation";


const page = () => {
    const router = useRouter();
    const isAuthClient = useGlobalStore((state) => state.isAuthClient);

    return <>{isAuthClient ? <div>PAGE DUEÑO</div> : router.push('/acceso')}</>;
};

export default page;
