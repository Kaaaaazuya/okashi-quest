export async function GET(request: Request) {
  const url = new URL(request.url)
  const keyword = url.searchParams.get('keyword')
  let apiUrl = 'https://sysbird.jp/toriko/api/?apikey=guest&format=json'

  if (keyword) {
    apiUrl += `&keyword=${encodeURIComponent(keyword)}`
  }

  try {
    const response = await fetch(apiUrl)
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
