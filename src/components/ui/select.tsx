// components/IndustryDropdown.tsx
"use client";
import React, {useEffect, useRef, useState} from "react";

type Option = { value: string; label: string; bullets: string[] };

export default function IndustryDropdown({
  options,
  value,
  onChange,
  placeholder = "Select an option",
}: {
  options: Option[];
  value: Option | null;
  onChange: (opt: Option) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState<number>(-1);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Close on Esc
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Keyboard navigation
  const move = (dir: 1 | -1) => {
    const enabled = options.filter((_, i) => i !== 0); // skip disabled first
    if (enabled.length === 0) return;
    const currentIndexInEnabled = Math.max(
      0,
      enabled.findIndex((o) => o.value === value?.value)
    );
    const nextEnabledIndex =
      (currentIndexInEnabled + (dir === 1 ? 1 : enabled.length - 1)) %
      enabled.length;
    const actualIndex = options.findIndex(
      (o) => o.value === enabled[nextEnabledIndex].value
    );
    setHighlight(actualIndex);
  };

  const selectIndex = (i: number) => {
    const opt = options[i];
    if (!opt || i === 0) return;
    onChange(opt);
    setOpen(false);
  };

  return (
    <div ref={wrapRef} className="relative w-full">
      {/* Trigger (looks like an input) */}
      <button
        type="button"
        className="w-full h-[50px] rounded-[10px] border border-[#0F0F1A] bg-white px-3 flex items-center justify-between"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            if (!open) setOpen(true);
            move(1);
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (!open) setOpen(true);
            move(-1);
          } else if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (!open) setOpen(true);
            else if (highlight >= 0) selectIndex(highlight);
          }
        }}
      >
        <span className={value ? "text-[#0F0F1A]" : "text-gray-400 text-left truncate"}>
          {value ? value.label : placeholder}
        </span>
        <svg className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none">
          <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {/* Popover list — no backdrop, no body lock */}
      {open && (
        <div
          role="listbox"
          aria-activedescendant={highlight >= 0 ? `opt-${highlight}` : undefined}
          className="absolute z-50 mt-2 w-full rounded-[10px] bg-white border border-[#0F0F1A] shadow-[0px_7px_29px_0px_#64646F33]"
          // Important: not full-screen; no fixed positioning; no body styles touched.
        >
          <div
            className="py-2 max-h-64 overflow-auto no-scrollbar"
            style={{
              WebkitOverflowScrolling: "touch",
              overscrollBehavior: "contain",
            }}
            onMouseLeave={() => setHighlight(-1)}
          >
            {options.map((opt, idx) => {
              const disabled = idx === 0;
              const isActive = idx === highlight;
              const isSelected = value?.value === opt.value;
              return (
                <div
                  id={`opt-${idx}`}
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={disabled}
                  tabIndex={-1}
                  onMouseEnter={() => setHighlight(idx)}
                  onMouseDown={(e) => e.preventDefault()} // avoid blurring trigger
                  onClick={() => selectIndex(idx)}
                  className={[
                    "px-3 py-2 text-[16px] cursor-pointer select-none flex items-center gap-2",
                    disabled ? "text-gray-400 cursor-not-allowed" : "text-[#0F0F1A]",
                    isActive && !disabled ? "bg-gray-100" : "",
                  ].join(" ")}
                >
                  {idx === 0 ? opt.label : `${idx}- ${opt.label}`}
                  {isSelected && !disabled && (
                    <span className="ml-auto inline-block">✓</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
