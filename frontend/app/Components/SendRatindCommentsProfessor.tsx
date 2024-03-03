"use client"
import React, { useState } from 'react'
import { useGlobalStore } from '../store/GlobalStore';
import { urlAPi } from '../utils/urlBase';
import { useFetchDataPost } from '../utils/useFetchDataPost';
import CommentProfessor from './CommentProfessor';
import StarRating from './StarRating';
import Image from 'next/image';
import start from "../../public/star.png"


const SendRatindCommentsProfessor = ({ params, dataProfessor }: { params: {profesor: string;}, dataProfessor:any}) => {
    const {user} = useGlobalStore<any>((state)=>state)
    const urlToFetch = `${urlAPi}/instructors/${params.profesor}/reviews`;
    const [ratingProfessor, setRatingProfessor] = useState<number>(0);
    const [comment, setCommen] = useState("")
    const [showComment, setShowComment] = useState(false);
    const nameReviewer = {reviewer:`${user.firstName} ${user.lastName}`, rating:`${ratingProfessor}`};
    //const {data, isLoading, error} = useFetchDataPost(urlToFetch, nameReviewer);
        
    console.log(ratingProfessor, comment)
    

    return (
        <div className="w-full p-[20px] h-full bg-black">
            {showComment === true &&(<CommentProfessor comment={setCommen} closeModal={()=>{setShowComment(false)}} />)}
                <div className="flex justify-between items-center">
                    <h3 className="text-[24px]">{dataProfessor.data.firstName} {dataProfessor.data.lastName}</h3>
                    <p className="flex justify-between items-center"><span className="flex items-center">{Math.round(dataProfessor.data.rating * 100) / 100}</span> <Image className="mx-1" src={start} alt="start" /> </p>
                </div>
                <div>
                    <p className="mt-[30px]">
                    <p className="flex justify-center items-center">
                        <StarRating   onRatingChange={setRatingProfessor}/>
                    </p>
                    <p onClick={()=>{setShowComment(!showComment)}} className="mt-[36px] font-semibold">Deja un comentario</p>
                    </p>
                    <button onClick={() => {  } } type="button" className="mt-[36px] text-white w-full focus:outline-none  bg-primaryDefault hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                    Enviar
                    </button>
                </div>
        </div>
    )
}

export default SendRatindCommentsProfessor;