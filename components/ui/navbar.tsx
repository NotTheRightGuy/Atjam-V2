import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
export const Navbar = () => {
    return (
        <div className="border-b-2 border-slate-200 px-4 py-2 flex items-center fixed w-screen bg-white z-10">
            <Card className="w-fit py-2 px-5">
                <div className="flex justify-between items-center gap-4">
                    <Avatar className="h-8 w-8 border-2 border-slate-200">
                        <AvatarImage src="https://api.dicebear.com/8.x/pixel-art/svg?seed=Cleo"></AvatarImage>
                        <AvatarFallback>DS</AvatarFallback>
                    </Avatar>
                    <div className="font-space font-medium">Dev Sanghvi</div>
                </div>
            </Card>
            <div className="text-2xl pl-28 font-semibold font-space">
                Attendance
            </div>
            <div className="flex gap-3 ml-10 text-sm items-center">
                <div>Present</div>
                <Switch />
                <div>Absent</div>
            </div>
        </div>
    );
};
