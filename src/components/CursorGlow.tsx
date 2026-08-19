export default function CursorGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] hidden lg:block"
      aria-hidden="true"
    >
      <div
        className="orb-ambient absolute h-[600px] w-[600px] rounded-full mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(108,43,217,0.10) 0%, rgba(255,45,120,0.06) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}