type Segment = {
  label: string;
  color: string;
  width: string;
};

type SegmentedBarProps = {
  segments: Segment[];
};

export function SegmentedBar({ segments }: SegmentedBarProps) {
  return (
    <div>
      <div className="flex h-2 overflow-hidden rounded-full bg-gray-500">
        {segments.map((segment) => (
          <div
            key={segment.label}
            className={segment.color}
            style={{ width: segment.width }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
        {segments.map((segment) => (
          <span key={segment.label}>{segment.label}</span>
        ))}
      </div>
    </div>
  );
}
