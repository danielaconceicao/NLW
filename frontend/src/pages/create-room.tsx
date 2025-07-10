import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
    id: string,
    name: string
}>

export default function CreateRoom() {

    const { data, isLoading } = useQuery({
        queryKey: ['get-rooms'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3333/rooms');
            const result: GetRoomsAPIResponse = await response.json();
            return result
        }
    })


    return (
        <div>
            {isLoading && <p>Carregando...</p>}

            <h2>Create Room</h2>

            <div className="flex flex-col gap-1">
                {data?.map(room => {
                    return (
                        <Link key={room.id} to={`/room/${room.id}`}>
                            <p>{room.name}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}