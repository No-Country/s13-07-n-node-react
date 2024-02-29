import Profesores from "@/app/views/Profesores";
import AuthRoute from "@/app/Components/Auth/AuthRoute";

const page = () => {
    return (
        <AuthRoute>
            <Profesores />
        </AuthRoute>
    )
};

export default page;
