import React from "react";
import { Navbar } from "@/components/ui/navbar";
import AttendanceCard from "@/components/ui/attendanceCard";
import { students } from "@/data/students";

import {
    RocketIcon,
    IdCardIcon,
    FileTextIcon,
    PieChartIcon,
    BoxModelIcon,
} from "@radix-ui/react-icons";

const Dashboard = () => {
    return (
        <main>
            <Navbar />
            <div
                style={{
                    height: "calc(100vh - 70px)",
                }}
                className="flex pt-[4.4%]"
            >
                <section className="w-[20%] border-r-2 border-slate-200 h-full px-4 py-4 flex flex-col gap-1 font-space fixed">
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
                </section>
                <section className="font-medium pl-[20%] pr-4">
                    <div className="grid grid-cols-6 gap-6 pl-4 mt-4 pb-16">
                        {students.map((student) => (
                            <AttendanceCard
                                key={student.id}
                                student={student}
                            />
                        ))}
                    </div>

                    <section
                        className="fixed bottom-0 border-slate-200 border-t-2 h-12 bg-white"
                        style={{
                            width: "calc(100% - 20%)",
                        }}
                    ></section>
                </section>
            </div>
        </main>
    );
};

export default Dashboard;
