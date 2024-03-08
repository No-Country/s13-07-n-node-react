import Activity from "./notas/page";
import AuthRoute from "@/app/Components/Auth/AuthRoute";

const page = () => {
    return (
        <AuthRoute>
            <Activity />
        </AuthRoute>
    )
};

export default page;
