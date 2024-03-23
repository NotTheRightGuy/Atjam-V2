"use client";

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { UserButton } from "@clerk/nextjs";
import React from "react";

export const Navbar = ({
    setPresent,
}: {
    setPresent: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className="border-b-2 border-slate-200 px-4 py-2 flex items-center fixed w-screen bg-white z-10">
            <Card className="w-fit py-2 px-5">
                <div className="flex justify-between items-center gap-4">
                    <UserButton showName={true} />
                </div>
            </Card>
            <div className="text-2xl pl-28 font-semibold font-space">
                Attendance
            </div>
            <div className="flex gap-3 ml-10 text-sm items-center">
                <div>Present</div>
                <Switch
                    onCheckedChange={(checked) => {
                        setPresent(checked);
                    }}
                />
                <div>Absent</div>
            </div>
        </div>
    );
};
