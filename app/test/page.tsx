export default function TestPage() {
  return (
    <html>
      <head>
        <title>Test Page</title>
      </head>
      <body>
        <h1>BASIC TEST PAGE</h1>
        <p>If you see this, routing works</p>
        <script dangerouslySetInnerHTML={{
          __html: `console.log('Test page loaded'); document.body.style.background = 'yellow';`
        }} />
      </body>
    </html>
  )
}
