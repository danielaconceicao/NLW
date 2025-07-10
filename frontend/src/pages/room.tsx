import { Navigate, useParams } from "react-router-dom"

type RoomParams = {
    roomId: string
}


export default function Room() {
    const params = useParams<RoomParams>();

    if (!params.roomId) {
        return <Navigate to='/' />
    }
    return <div>Room Details</div>
}