import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function Page({params}: {params: {id: string}}) {
    const session = await getServerSession(authOptions)
    if(session) return <div>show page {params.id}</div>

    return (
        <div>redirect to login page</div>
    )
}

