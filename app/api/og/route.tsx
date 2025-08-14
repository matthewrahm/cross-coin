import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#faf8f4',
          fontSize: 64,
          color: '#111',
        }}
      >
        Just a Community
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}


