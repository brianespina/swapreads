import BookItem from "./book-listing-item"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function BookListing() {
    return (
        <>
            <div className="flex justify-end mb-5 gap-2">
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Genre" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Item 1</SelectItem>
                        <SelectItem value="dark">Item 2</SelectItem>
                        <SelectItem value="system">Item 3</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Item 1</SelectItem>
                        <SelectItem value="dark">Item 2</SelectItem>
                        <SelectItem value="system">Item 3</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="grid-cols-4 grid gap-12">
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
                <BookItem />
            </div>
        </>
    )
}
export default BookListing
