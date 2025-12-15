export async function GET() {
  const res = await fetch('http://ip-api.com/json', {
    cache: 'no-store'
  });

  const data = await res.json();

  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      'content-type': 'application/json'
    }
  });
}

