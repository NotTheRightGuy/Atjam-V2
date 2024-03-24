"use client";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import React from "react";

const AttendanceCard = ({
    student,
    color,
    setPresentStudents,
    setAbsentStudents,
}: {
    student: { id: number; name: string };
    color: string;
    setPresentStudents: React.Dispatch<React.SetStateAction<any>>;
    setAbsentStudents: React.Dispatch<React.SetStateAction<any>>;
}) => {
    const [activated, setActivated] = React.useState(false);
    const status = React.useRef<HTMLDivElement>(null);
    const handleClick = () => {
        setActivated(!activated);
        if (status.current === null) return;
        if (!activated) {
            if (color == "present") {
                status.current.classList.remove("bg-green-400");
                status.current.classList.add("bg-red-400");

                setPresentStudents((prev: any) => {
                    return prev.filter((s: any) => s.id !== student.id);
                });
                setAbsentStudents((prev: any) => {
                    return [...prev, student];
                });
            } else {
                status.current.classList.remove("bg-red-400");
                status.current.classList.add("bg-green-400");

                setAbsentStudents((prev: any) => {
                    return prev.filter((s: any) => s.id !== student.id);
                });
                setPresentStudents((prev: any) => {
                    return [...prev, student];
                });
            }
        } else {
            if (color == "present") {
                status.current.classList.remove("bg-red-400");
                status.current.classList.add("bg-green-400");

                setAbsentStudents((prev: any) => {
                    return prev.filter((s: any) => s.id !== student.id);
                });
                setPresentStudents((prev: any) => {
                    return [...prev, student];
                });
            } else {
                status.current.classList.remove("bg-green-400");
                status.current.classList.add("bg-red-400");

                setPresentStudents((prev: any) => {
                    return prev.filter((s: any) => s.id !== student.id);
                });
                setAbsentStudents((prev: any) => {
                    return [...prev, student];
                });
            }
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
            onKeyPress={(e) => {
                if (e.key === "Enter") handleClick();
            }}
        >
            <Card className="px-3 py-3 flex flex-col cursor-pointer ">
                <div className="text-sm flex gap-5 items-center justify-between">
                    <p>{student.id}</p>
                    <div
                        className={`w-3 h-3 rounded-full ${
                            color == "present" ? "bg-green-400" : "bg-red-400"
                        }`}
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
