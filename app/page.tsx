export default function Home() {
  return (
    <div className="w-full flex items-center justify-center">
      <main className="w-full flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="my-2">Vision Of Internal Dimension</div>
          <iframe
            width="853"
            height="480"
            src={`https://my.matterport.com/show/?m=${process.env.MATTERPORT_URL}`}
            allowFullScreen
            allow="xr-spatial-tracking"
            className="flex items-center justify-center"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
