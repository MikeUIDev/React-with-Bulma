import React, { useLayoutEffect, useMemo, useRef, useCallback } from "react";
import { gsap } from "gsap";

export default function HoverMoveText({
  as: Tag = "span",
  text = "",
  className = "",
  intensity = 14,
  radius = 120,
  duration = 0.35,
  mode = "repel", // "repel" | "attract"
}) {
  const containerRef = useRef(null);
  const settersRef = useRef([]);

  const finalText = useMemo(
    () => (typeof text === "string" ? text : ""),
    [text]
  );

  // Split into tokens while preserving spaces + newlines
  const tokens = useMemo(() => {
    // Split by whitespace but keep delimiters
    // This keeps " " tokens so we can render spacing correctly
    return finalText.split(/(\s+)/);
  }, [finalText]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const letters = Array.from(container.querySelectorAll("[data-char]"));
    if (!letters.length) {
      settersRef.current = [];
      return;
    }

    gsap.set(letters, {
      willChange: "transform",
      force3D: true,
      transformOrigin: "50% 50%",
    });

    settersRef.current = letters.map((el) => ({
      el,
      xTo: gsap.quickTo(el, "x", { duration, ease: "power3.out" }),
      yTo: gsap.quickTo(el, "y", { duration, ease: "power3.out" }),
    }));

    return () => {
      settersRef.current.forEach((s) => {
        s.xTo(0);
        s.yTo(0);
      });
      settersRef.current = [];
    };
  }, [finalText, duration]);

  const onPointerMove = useCallback(
    (e) => {
      const setters = settersRef.current;
      if (!setters.length) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const sign = mode === "attract" ? 1 : -1;

      for (const s of setters) {
        const r = s.el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;

        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const dist = Math.hypot(dx, dy);

        const t = gsap.utils.clamp(0, 1, 1 - dist / radius);
        const falloff = t * t;

        const angle = Math.atan2(dy, dx);

        const x = sign * Math.cos(angle) * intensity * falloff;
        const y = sign * Math.sin(angle) * intensity * falloff;

        s.xTo(x);
        s.yTo(y);
      }
    },
    [intensity, radius, mode]
  );

  const onPointerLeave = useCallback(() => {
    for (const s of settersRef.current) {
      s.xTo(0);
      s.yTo(0);
    }
  }, []);

  return (
    <Tag
      ref={containerRef}
      className={`cursor-pointer select-none ${className}`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{
        // Optional: helps normal wrapping behavior
        wordBreak: "normal",
        overflowWrap: "normal",
      }}
    >
      {tokens.map((tok, idx) => {
        // Whitespace token (spaces/tabs/newlines)
        if (/^\s+$/.test(tok)) {
          // Preserve newlines if any
          const parts = tok.split("\n");
          if (parts.length > 1) {
            return parts.map((p, i) => (
              <React.Fragment key={`${idx}-${i}`}>
                {p.replace(/ /g, "\u00A0")}
                {i < parts.length - 1 ? <br /> : null}
              </React.Fragment>
            ));
          }

          // Preserve spaces
          return <span key={idx}>{tok.replace(/ /g, "\u00A0")}</span>;
        }

        // ✅ Word wrapper keeps the whole word together (no mid-word wrap)
        return (
          <span
            key={idx}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {Array.from(tok).map((ch, i) => (
              <span key={i} data-char style={{ display: "inline-block" }}>
                {ch}
              </span>
            ))}
          </span>
        );
      })}
    </Tag>
  );
}
