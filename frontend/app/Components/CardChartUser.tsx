import Image from "next/image";
import VerticalChart from "@/public/Vertical Bar Chart.png";
import flecha from "../../public/Arrow - Right 2.svg";
import ArrowUpIco from "./ui/ArrowUpIco";

const CardChartUser = () => {
    return (
        <div className='w-full mt-4 flex flex-col items-center'>
            <div className='w-11/12 m-auto flex items-start border-b pb-4 border-gray-700'>
                <div className=''>
                    <h2 className='font-bold text-[16px] text-gray-100'>
                        5/7 Días Completados
                    </h2>
                    <p className='text-[12px] text-gray-400 font-medium'>
                        Resultados obtenidos
                    </p>
                </div>
                <div className='px-2 ml-4 rounded bg-primary-dark flex items-center gap-2'>
                    <ArrowUpIco />
                    <p className='text-sm font-medium text-primaryDefault'>
                        24%
                    </p>
                </div>
            </div>
            <div className='mt-4 flex flex-col w-11/12 '>
                <div className='flex gap-2'>
                    <p className='text-[11px] font-semibold text-primaryDefault'>• Propuesto</p>
                    <p className='text-[11px] font-semibold text-primary-light'>• Rendimiento</p>
                </div>
                <Image
                    src={VerticalChart}
                    alt='chart vertical'
                    className='m-auto border-b border-gray-700 pb-4'
                />
                <div className="flex items-center">
                    <p className='text-left font-medium text-sm text-gray-400 mx-4 my-2'>
                        Ultimos 7 días
                    </p>
                    <Image
                        className='w-[12px] h-[12px] rotate-90 fill-gray-400'
                        src={flecha}
                        alt='arrow'
                    />
                </div>
            </div>
        </div>
    );
};

export default CardChartUser;
