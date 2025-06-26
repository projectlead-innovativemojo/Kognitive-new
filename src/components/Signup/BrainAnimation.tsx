"use client";

const BrainAnimation = () => (
  <div className="relative w-full h-full min-h-[400px] max-w-[900px] overflow-hidden">
    <iframe
      src="https://my.spline.design/particleaibrain-pXaKjoELQP2i6wEvTPt9OfB2/"
      frameBorder="0"
      width="100%"
      height="100%"
      style={{ minHeight: 400, borderRadius: 16, width: '100%', height: '100%' }}
      allow="fullscreen"
      title="3D Brain Animation"
    />
    {/* Overlay div to cover watermark (temporary, not for production) */}
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40px', // Adjust as needed to cover the watermark
        background: 'black',
        zIndex: 10,
        pointerEvents: 'none',
      }}
    />
  </div>
);

export default BrainAnimation; 