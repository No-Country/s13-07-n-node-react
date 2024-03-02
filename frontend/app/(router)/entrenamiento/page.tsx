import Entrenamiento from "@/app/views/Entrenamiento";
import AuthRoute from "@/app/Components/Auth/AuthRoute";

const page = () => {
    return (
        <AuthRoute>
            <Entrenamiento />
        </AuthRoute>
    )
};

export default page;

