"use client"
import {useParams} from "next/navigation";


export default function BlogItem(){
    const params = useParams<{gameId: string, blogId: string}>()


    return <div>{params.gameId} {params.blogId}</div>
}