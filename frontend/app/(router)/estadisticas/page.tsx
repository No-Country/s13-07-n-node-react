import Estadisticas from "@/app/views/Estadisticas";
import AuthRoute from "@/app/Components/Auth/AuthRoute";

const page = () => {
    return (
        <AuthRoute>
            <Estadisticas />
        </AuthRoute>
    )
};

export default page;
