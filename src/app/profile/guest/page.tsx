import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import BookListing from "@/components/ui/book-listing"
export default function() {
    return (
        <main className="p-8">
            <Card className="flex justify-between mb-8">
                <div className="flex gap-5">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col justify-center">
                    <strong className="text-gray-700">Brian Nicolas Espina</strong>
                    <div className="text-gray-300 text-sm">2702 Benedum Drive</div>
                </div>
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <Badge className="justify-center bg-teal-500">Trust Points: <strong>80</strong></Badge>
                    <Button>Message Brian</Button>
                </div>
            </Card>
            <div>
             <BookListing />
            </div>
        </main>
    )
} 
