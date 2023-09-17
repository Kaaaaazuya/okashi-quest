export async function GET() {
  try {
    const response = await fetch(
      'https://sysbird.jp/toriko/api/?apikey=guest&format=json',
    )
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }
    const data = await response.json()
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new Response('Failed to fetch data from Okashi API', { status: 500 })
  }
}
