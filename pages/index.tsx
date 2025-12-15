type IpData = {
  query: string;
  country: string;
  regionName: string;
  city: string;
  isp: string;
};

export async function getServerSideProps() {
  const res = await fetch('http://ip-api.com/json');
  const data: IpData = await res.json();

  return {
    props: {
      ipData: data
    }
  };
}

export default function Home({ ipData }: { ipData: IpData }) {
  return (
    <main style={{ padding: 24, fontFamily: 'monospace' }}>
      <h1>Hello from Deno Deploy 🌍</h1>

      <h2>IP 信息（服务端请求）：</h2>
      <pre>
        {JSON.stringify(ipData, null, 2)}
      </pre>
    </main>
  );
}

