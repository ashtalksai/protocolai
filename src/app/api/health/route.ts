import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json(
    { 
      status: "ok", 
      timestamp: new Date().toISOString(),
      app: "ProtocolAI",
      version: "1.0.0"
    },
    { status: 200 }
  )
}
