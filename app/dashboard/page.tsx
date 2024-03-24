"use client";
import React from "react";
import { Navbar } from "@/components/ui/navbar";
import AttendanceCard from "@/components/ui/attendanceCard";
import { students } from "@/data/students";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { mkConfig, generateCsv, download } from "export-to-csv";

import {
    RocketIcon,
    IdCardIcon,
    FileTextIcon,
    PieChartIcon,
    BoxModelIcon,
} from "@radix-ui/react-icons";

const Dashboard = () => {
    const [present, setPresent] = React.useState(false);
    const [presentStudents, setPresentStudents] = React.useState(students);
    const [absentStudents, setAbsentStudents] = React.useState(students);

    React.useEffect(() => {
        if (present) {
            setPresentStudents(students);
            setAbsentStudents([]);
        } else {
            setAbsentStudents(students);
            setPresentStudents([]);
        }
    }, [present]);

    const handleSubmit = () => {
        const finalData: { id: number; name: string; isPresent: 1 | 0 }[] = [];
        presentStudents.forEach((student) => {
            finalData.push({
                id: student.id,
                name: student.name,
                isPresent: 1,
            });
        });
        absentStudents.forEach((student) => {
            finalData.push({
                id: student.id,
                name: student.name,
                isPresent: 0,
            });
        });

        finalData.sort((a, b) => a.id - b.id);
        const csvConfig = mkConfig({
            useKeysAsHeaders: true,
            filename: "attendance",
        });
        const csv = generateCsv(csvConfig)(finalData);
        download(csvConfig)(csv);

        toast.success("Attendance marked successfully!");
    };

    return (
        <main>
            <Navbar setPresent={setPresent} />
            <div
                style={{
                    height: "calc(100vh - 70px)",
                }}
                className="flex pt-[4.4%]"
            >
                <div className="w-[20%] border-r-2 border-slate-200 h-full px-4 py-4 flex flex-col gap-1 font-space fixed">
                    <div className="flex items-center gap-2 p-2 cursor-pointer">
                        <RocketIcon className="w-5 h-5" />
                        Schedule
                    </div>
                    <div className="flex items-center gap-2 bg-black text-white rounded-md p-2 font-bold cursor-pointer">
                        <IdCardIcon className="w-5 h-5" />
                        Attendance
                    </div>
                    <div className="flex items-center gap-2 p-2 cursor-pointer">
                        <PieChartIcon className="w-5 h-5" />
                        Analytics
                    </div>
                    <div className="flex items-center gap-2 p-2 cursor-pointer">
                        <FileTextIcon className="w-5 h-5" />
                        Report
                    </div>
                    <div className="flex items-center gap-2 p-2 cursor-pointer">
                        <BoxModelIcon className="w-5 h-5" />
                        Classes
                    </div>
                </div>
                <div className="font-medium pl-[20%] pr-4">
                    <div className="grid grid-cols-6 gap-6 pl-4 mt-4 pb-16">
                        {students.map((student) => (
                            <AttendanceCard
                                key={student.id}
                                student={student}
                                color={present ? "present" : "absent"}
                                setAbsentStudents={setAbsentStudents}
                                setPresentStudents={setPresentStudents}
                            />
                        ))}
                    </div>

                    <div
                        className="fixed bottom-0 border-slate-200 border-t-2 h-16 bg-white flex items-center"
                        style={{
                            width: "calc(100% - 20%)",
                        }}
                    >
                        <Button
                            className="align-middle ml-4"
                            onClick={handleSubmit}
                        >
                            Finish Attendance
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
