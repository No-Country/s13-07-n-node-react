import Notas from "@/app/Components/Notas";
import AuthRoute from "@/app/Components/Auth/AuthRoute";

const page = () => {
    return (
        <AuthRoute>
            <Notas />
        </AuthRoute>
    )
};

export default page;
