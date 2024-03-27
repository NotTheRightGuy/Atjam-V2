import { NextRequest } from "next/server";
import client from "@/db";

export async function GET(){
    const data = await client.class.findMany();
    return Response.json(data);
}

export async function POST(req: NextRequest){
    const body = await req.json();
    console.log(body);

    return Response.json({message: "Class created"});
}
