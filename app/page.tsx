"use client";
import { Button } from "@/components/ui/button";
import { useAuth, useClerk } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
    const { isSignedIn } = useAuth();
    const { signOut } = useClerk();

    return (
        <div className="h-screen flex items-center justify-center overflow-hidden relative">
            <div className="text-center">
                <h1 className="font-space text-8xl font-bold mb-4">AtJam</h1>
                {isSignedIn ? (
                    <div className="flex flex-col items-center">
                        <Link href="/dashboard">
                            <Button>Proceed to Dashboard</Button>
                        </Link>
                        <Button
                            className="w-[60%] mt-2 bg-red-500"
                            onClick={() => {
                                signOut();
                            }}
                        >
                            Sign out
                        </Button>
                    </div>
                ) : (
                    <>
                        <Link href="/auth/signin">
                            <Button>Sign In to Continue</Button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
