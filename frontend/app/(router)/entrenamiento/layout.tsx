import { Metadata } from "next";

const metadata:Metadata = {

    title:"Entrenamiento",
    description:"Seccion de entramiento del usuario",
}
export default function EntrenamientoLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
        <div>
            {children}
        </div>
    )
}