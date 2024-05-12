"use client"
import { Button } from "./button"
import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
    NavigationMenu
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { signOut } from "next-auth/react"

function NavBar() {
    return (
        <div className="w-full pl-8 pt-8 flex justify-between">
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
                <NavigationMenuItem className="list-none">
                    <Link href="/profile/1" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Profile
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenu>
            <div>
               <Button onClick={()=> signOut({callbackUrl: '/profile/1'})}>Sign Out</Button> 
            </div>
        </div>
    )
}

export default NavBar
