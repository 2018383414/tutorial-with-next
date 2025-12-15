export async function GET() {
  const res = await fetch('http://ip-api.com/json', {
    cache: 'no-store'
  });

  const data = await res.json();

  return Response.json({
    region: Deno.env.get('DENO_REGION') ?? 'unknown',
    ipApi: data
  });
}

