import AuthRoute from "@/app/Components/Auth/AuthRoute";
import InicioCliente from "@/app/views/InicioCliente";

const page = () => {
    return (
        <AuthRoute>
            <InicioCliente />
        </AuthRoute>
    )
};

export default page;

