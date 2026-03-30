export default function PulsingDot() {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-400"></span>
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
    </span>
  );
}
