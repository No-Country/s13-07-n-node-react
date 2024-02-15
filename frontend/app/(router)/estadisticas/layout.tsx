import { Metadata } from "next";

const metadata:Metadata = {

    title:"Estadisticas",
    description:"estadisticas",
}
export default function EstadisticasLayout({
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