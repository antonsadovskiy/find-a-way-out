"use client"
import {useParams} from "next/navigation";

export default function Game() {
    const params = useParams<{ gameId: string }>()

    const gameId = params.gameId;

    return <div>game {gameId}</div>
}