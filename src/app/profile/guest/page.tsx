import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function() {
    return (
        <main className="p-8">
            <Card className="flex gap-5">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-center">
                    <strong className="text-gray-700">Brian Nicolas Espina</strong>
                    <div className="text-gray-300">2702 Benedum Drive</div>
                </div>
            </Card>
        </main>
    )
} 
