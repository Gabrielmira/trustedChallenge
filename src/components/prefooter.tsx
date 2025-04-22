import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function(){
    return(
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Track Your Progress?</h2>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            Join thousands of players who use StatTrackLeague to improve their game.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <form className="flex gap-2">
                            <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                            <Button type="submit">Sign Up</Button>
                        </form>
                        <p className="text-xs text-muted-foreground">Free account. No credit card required.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}