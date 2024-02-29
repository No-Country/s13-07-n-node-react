import EjercicioFinalizado from "@/app/Components/EjercicioFinalizado";
import AuthRoute from "@/app/Components/Auth/AuthRoute";

const page = () => {
    return (
        <AuthRoute>
            <EjercicioFinalizado />
        </AuthRoute>
    );
};

export default page;
