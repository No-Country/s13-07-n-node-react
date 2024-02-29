import Ejercicios from "@/app/Components/Ejercicios";
import AuthRoute from "@/app/Components/Auth/AuthRoute";

const page = ({ params }: { params: any }) => {
    return (
        <AuthRoute>
            <Ejercicios params={params} />
        </AuthRoute>
    )
};

export default page;

