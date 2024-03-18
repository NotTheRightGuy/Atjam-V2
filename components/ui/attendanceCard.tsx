"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import React from "react";
const AttendanceCard = ({
    student,
}: {
    student: {
        id: number;
        name: string;
    };
}) => {
    const [activated, setActivated] = React.useState(false);
    const status = React.useRef<HTMLDivElement>(null);
    const handleClick = () => {
        setActivated(!activated);
        if (status.current === null) return;
        if (!activated) {
            status.current.classList.remove("bg-green-400");
            status.current.classList.add("bg-red-400");
        } else {
            status.current.classList.remove("bg-red-400");
            status.current.classList.add("bg-green-400");
        }
    };

    return (
        <motion.div
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClick}
        >
            <Card className="px-3 py-3 flex flex-col cursor-pointer">
                <div className="text-sm flex gap-5 items-center justify-between">
                    <p>{student.id}</p>
                    <div
                        className="h-3 w-3 rounded-full bg-green-400"
                        ref={status}
                    ></div>
                </div>
                <div className="text-xs opacity-65 font-space">
                    {student.name}
                </div>
            </Card>
        </motion.div>
    );
};

export default AttendanceCard;
