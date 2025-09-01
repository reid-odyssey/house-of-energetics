export default function DebugPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Debug Page</h1>
      <p>If you can see this, the app is working!</p>
      <div>
        <h2>Environment Info:</h2>
        <p>Mount Path: {process.env.COSMIC_MOUNT_PATH || 'Not set'}</p>
        <p>Current URL: {typeof window !== 'undefined' ? window.location.href : 'Server-side'}</p>
        <p>Base Path: {typeof window !== 'undefined' ? window.location.pathname : 'Server-side'}</p>
      </div>
      <div>
        <h2>Navigation Test:</h2>
        <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>Go to Home</a>
      </div>
    </div>
  )
}
