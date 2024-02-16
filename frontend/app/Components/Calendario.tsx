"use client";
import React, { useEffect, useState } from "react";

interface DiaDelMes {
    numero: number;
    diaSemana: number;
}

const Calendario = () => {
    const [dias, setDias] = useState<DiaDelMes[]>([]);
    const [fechaActual] = useState<Date>(new Date());

    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    const diasSemana = ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"];

    function obtenerDiasMes(mes: number, año: number): DiaDelMes[] {
        const primerDiaDelMes = new Date(año, mes, 1);
        const ultimoDiaDelMes = new Date(año, mes + 1, 0);
        const diasDelMes: DiaDelMes[] = [];

        for (let dia = 1; dia <= ultimoDiaDelMes.getDate(); dia++) {
            const fecha = new Date(año, mes, dia);
            diasDelMes.push({
                numero: dia,
                diaSemana: fecha.getDay(),
            });
        }

        return diasDelMes;
    }

    useEffect(() => {
        setDias(obtenerDiasMes(fechaActual.getMonth(), fechaActual.getFullYear()));
    }, []);

    useEffect(() => {
        console.log(dias);
    }, [dias]);

    return (
        <div>
            <div className="w-full flex gap-3 overflow-hidden overflow-x-auto">
            {dias.map((dia, index) => (
                <div
                    key={index}
                    className={`flex flex-col text-center rounded-xl px-4 py-5 border border-gray-800 ${
                        dia.numero === fechaActual.getDate() ? "bg-primaryDefault" : ""
                    }`}
                >
                    <p className="text-[12px]">{diasSemana[dia.diaSemana]}</p>
                    <p className="text-sm">{dia.numero}</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Calendario;
