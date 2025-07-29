import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import UserButton from "./user-button";
import { ModeToggle } from "./ui/mode-toggle";

export default function Menu() {
  return (
    <div>
      <nav className="flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCartIcon /> Cart
          </Link>
        </Button>
        <UserButton />
      </nav>
    </div>
  );
}
