import { Metadata } from "next";

const metadata:Metadata = {

    title:"Profesores",
    description:"profesores",
}
export default function profesorLayout({
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