export default function Home() {
  return (
    <html>
      <head>
        <title>House of Energetics</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ color: 'green' }}>House of Energetics - LIVE TEST</h1>
        <p>This is a minimal test page to verify deployment works.</p>
        <div style={{ background: 'yellow', padding: '10px', margin: '10px 0' }}>
          <strong>If you can see this, the app is working!</strong>
        </div>
        <script dangerouslySetInnerHTML={{
          __html: `
            console.log('Page loaded successfully');
            console.log('Location:', window.location.href);
            document.body.style.border = '5px solid red';
          `
        }} />
      </body>
    </html>
  )
}
