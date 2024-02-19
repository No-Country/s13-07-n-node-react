import { Metadata } from "next";

const metadata:Metadata = {

    title:"Inisio de desion",
    description:"Inicio de sesion",
}
export default function InicioSesionLayout({
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