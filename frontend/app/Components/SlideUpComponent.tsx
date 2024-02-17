import Image from "next/image";
import X from "../../public/x.png"


const SlideUpComponent = ({slideDown, professorDetail}:{slideDown:()=> void, professorDetail:any}) => {
  const {image, name, available, rate} = professorDetail;
  return (
    <div className={`w-full h-full  absolute  left-0 right-0 bottom-0  backdrop-blur-[5px]  bg-opacity-60`}>
      
      <button onClick={()=>{slideDown()}}>
        <Image src={X} alt="x" className="w-[24px] h-[24px] absolute right-5 top-5" />
      </button>
      <div className="h-[610px] w-full  absolute bottom-0 right-0 left-0">
        <Image src={image} alt="profesor" className="w-full" />
      </div>
    </div>
  );
};

export default SlideUpComponent;