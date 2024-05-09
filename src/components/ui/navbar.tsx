"use client"
import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
    NavigationMenu
} from "@/components/ui/navigation-menu"
import Link from "next/link"

function NavBar() {
    return (
        <div className="w-full pl-8 pt-8">
            <NavigationMenu>
                <NavigationMenuItem className="list-none">
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="list-none">
                    <Link href="/profile/guest" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Profile Guest
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenu>
        </div>
    )
}

export default NavBar
