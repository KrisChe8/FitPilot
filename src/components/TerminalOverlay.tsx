const TerminalOverlay = () => {
  return (
    <div>
      <div className="relative bg-[var(--cyber-terminal-bg)] backdrop-blur-sm border border-[var(--border-g)] rounded-lg p-3 overflow-hidden font-mono mt-[20px]">
        {/* Status bar */}
        <div className="flex items-center justify-between mb-2 border-b border-[var(--border-g)] pb-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
            <p className="text-xs text-[var(--primary)]">SYSTEM ACTIVE</p>
          </div>
          <p className="text-xs text-[var(--muted-foreground)]">ID:78412.93</p>
        </div>

        <p className="text-sm text-[var(--foreground)] mb-2 tracking-tight">
          <span className="text-[var(--primary)]">/</span> WORKOUT ANALYSIS
          COMPLETE
        </p>

        <div className="space-y-1.5 text-xs text-[var(--muted-foreground)]">
          <div className="flex items-center">
            <div className="text-[var(--primary)] mr-2">01</div>
            <span>30 min strength training (upper body)</span>
          </div>
          <div className="flex items-center">
            <div className="text-[var(--primary)] mr-2">02</div>
            <span>20 min cardio (moderate intensity)</span>
          </div>
          <div className="flex items-center">
            <div className="text-[var(--primary)] mr-2">03</div>
            <span>10 min flexibility (recovery)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TerminalOverlay;
