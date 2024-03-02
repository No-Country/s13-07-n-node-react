import AuthRoute from "@/app/Components/Auth/AuthRoute";
import Micuenta from "@/app/views/Micuenta";

const page = () => {
    return (
        <AuthRoute>
            <Micuenta />
        </AuthRoute>
    )
};

export default page;

