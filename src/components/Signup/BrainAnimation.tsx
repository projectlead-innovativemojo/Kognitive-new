import Spline from "@splinetool/react-spline/next";

export default function BrainAnimation() {
  return (
    <main className="relative">
      <Spline
        className=""
        // style={{ pointerEvents: 'none' }}
        // scene="https://prod.spline.design/9U1CDcucwh5wRsJl/scene.splinecode"
        scene="https://prod.spline.design/9U1CDcucwh5wRsJl/scene.splinecode"  
      />
      {/* Overlay div to cover watermark (temporary, not for production) */}
      <div
        style={{
          position: 'absolute',
          bottom: 19,
          right: 16,
          // left: 0,
          maxWidth:"200px",
          width: '100%',
          height: '50px', // Adjust as needed to cover the watermark
          background: 'white',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
    </main>
  );
}
