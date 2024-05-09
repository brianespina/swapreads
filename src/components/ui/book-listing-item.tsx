import Image from "next/image"
import { Card } from "./card"
import { Button } from "./button"

function BookItem() {
    return (
        <div className="relative">
            <div className="image-container">
                <Image className="image" src="/images/book-cover-placeholder.png" fill={true} alt="Book Cover" />
            </div>
            <div className="text-lg mt-3 font-bold">
                Book Title
            </div>
            <div className="text-gray-500 text-sm">2702 Benedum Drive</div>
            <Button className="mt-3">Swap Request</Button>
        </div>
    )
}
export default BookItem
