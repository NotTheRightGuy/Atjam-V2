"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
    const { isSignedIn } = useAuth();

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="font-space text-8xl font-bold mb-4">AtJam</h1>
                {isSignedIn ? (
                    <Link href="/dashboard">
                        <Button>Proceed to Dashboard</Button>
                    </Link>
                ) : (
                    <Link href="/auth/signin">
                        <Button>Sign In to Continue</Button>
                    </Link>
                )}
            </div>
        </div>
    );
}
