import { NextResponse } from 'next/server'

export const revalidate = 60

export async function GET() {
  // Placeholder mocked tweets. Replace with Twitter API logic when keys are provided.
  const tweets = [
    { id: '1', text: 'Just a Community. That’s the pitch.', created_at: new Date().toISOString() },
    { id: '2', text: 'Show up. Share. Be kind. That’s the alpha.', created_at: new Date().toISOString() },
    { id: '3', text: 'No roadmap, just people.', created_at: new Date().toISOString() },
  ]
  return NextResponse.json({ tweets })
}


