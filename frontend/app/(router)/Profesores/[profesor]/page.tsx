
import CalificarProfesor from "@/app/views/CalificarProfesor";
import AuthRoute from "@/app/Components/Auth/AuthRoute";

const page = ({ params }: { params: { profesor: string } }) => {
    return (
        <AuthRoute>
            <CalificarProfesor params={params} />
        </AuthRoute>
    );
};

export default page;
