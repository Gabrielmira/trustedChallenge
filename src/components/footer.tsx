import {Shield} from "lucide-react";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="w-full border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">© 2023 StatTrackLeague. All rights reserved.</p>
                </div>
                <div className="flex gap-4">
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                        Terms
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                        Privacy
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}