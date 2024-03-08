import Rutinas from "@/app/views/Rutinas";
import AuthRoute from "@/app/Components/Auth/AuthRoute";

const page = () => {
    return (
        <AuthRoute>
            <Rutinas />
        </AuthRoute>
    )
};

export default page;
