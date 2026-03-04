import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

/**
 * FlipReveal.jsx
 * Reusable GSAP 3D flip word reveal.
 * No hardcoded text — pass words/colors via props from any page.
 */
export default function FlipReveal({
  frontText,
  backText,
  // section background (container)
  defaultSectionBg = "red",
  hoverSectionBg = "blue",
  // "pill" styling for each word
  frontTextColor = "white",
  frontPillBg = "red",
  backTextColor = "black",
  backPillBg = "blue",
  // optional customization
  className = "",
  style = {},
  borderRadius = "14px",
}) {
  const sectionRef = useRef(null);
  const wordRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const tlRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const word = wordRef.current;
    const front = frontRef.current;
    const back = backRef.current;

    if (!section || !word || !front || !back) return;

    // Set measuring word so width doesn't collapse when faces are absolute
    const measure =
      (frontText || "").length >= (backText || "").length
        ? frontText
        : backText;
    word.dataset.measure = measure || "";

    // Initial states
    gsap.set(section, {
      perspective: 1000,
      backgroundColor: defaultSectionBg,
    });

    gsap.set(word, {
      transformStyle: "preserve-3d",
      translateZ: 0,
      filter: "drop-shadow(0px 6px 16px rgba(0,0,0,0.25))",
    });

    gsap.set([front, back], { backfaceVisibility: "hidden" });

    gsap.set(front, {
      rotateX: 0,
      transformOrigin: "50% 0%",
      color: frontTextColor,
      backgroundColor: frontPillBg,
    });

    gsap.set(back, {
      rotateX: -90,
      transformOrigin: "50% 100%",
      color: backTextColor,
      backgroundColor: backPillBg,
    });

    // Timeline (paused; play/reverse on hover/focus)
    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power2.out" },
    });

    tl.to(
      section,
      { backgroundColor: hoverSectionBg, duration: 0.4, ease: "power2.inOut" },
      0
    )
      .to(
        word,
        {
          translateZ: 30,
          filter: "drop-shadow(0px 18px 30px rgba(0,0,0,0.35))",
          duration: 0.25,
        },
        0
      )
      .to(front, { rotateX: 90, duration: 0.28, ease: "power2.in" }, 0)
      .to(back, { rotateX: 0, duration: 0.32 }, 0.12)
      .to(
        word,
        {
          translateZ: 0,
          filter: "drop-shadow(0px 8px 18px rgba(0,0,0,0.28))",
          duration: 0.22,
          ease: "power2.inOut",
        },
        0.25
      );

    tlRef.current = tl;

    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, [
    frontText,
    backText,
    defaultSectionBg,
    hoverSectionBg,
    frontTextColor,
    frontPillBg,
    backTextColor,
    backPillBg,
  ]);

  const playIn = () => tlRef.current && tlRef.current.play();
  const playOut = () => tlRef.current && tlRef.current.reverse();

  return (
    <div
      ref={sectionRef}
      className={`flipSection ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius,
        cursor: "pointer",
        outline: "none",
        ...style,
      }}
      onMouseEnter={playIn}
      onMouseLeave={playOut}
      onFocus={playIn}
      onBlur={playOut}
      tabIndex={0}
      aria-label={`${frontText} reveals ${backText}`}
    >
      <span
        ref={wordRef}
        className="flipWord"
        style={{
          position: "relative",
          display: "inline-block",
          fontWeight: 800,
          letterSpacing: "0.05em",
          lineHeight: 1,
          transform: "translateZ(0)",
          willChange: "transform, filter",
        }}
      >
        {/* Hidden measuring string to keep width stable */}
        <span
          aria-hidden="true"
          style={{
            visibility: "hidden",
            display: "inline-block",
          }}
        >
          {(frontText || "").length >= (backText || "").length
            ? frontText
            : backText}
        </span>

        {/* Faces */}
        <span
          ref={frontRef}
          className="face front"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: 8,
            backfaceVisibility: "hidden",
          }}
        >
          {frontText}
        </span>

        <span
          ref={backRef}
          className="face back"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: 8,
            backfaceVisibility: "hidden",
          }}
        >
          {backText}
        </span>
      </span>
    </div>
  );
}
