import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function BlendReveal({
  frontText,
  backText,
  className = "", // container class
  frontClassName = "", // front word class
  backClassName = "", // back word class
  duration = 0.25,
}) {
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const tlRef = useRef(null);

  useLayoutEffect(() => {
    const front = frontRef.current;
    const back = backRef.current;
    if (!front || !back) return;

    // Initial: front visible, back hidden (overlayed in same spot)
    gsap.set(front, { autoAlpha: 1 });
    gsap.set(back, { autoAlpha: 0 });

    // Hover in: front fades out, back fades in (blends)
    const tl = gsap.timeline({ paused: true });
    tl.to(front, { autoAlpha: 0, duration, ease: "power2.out" }, 0).to(
      back,
      { autoAlpha: 1, duration, ease: "power2.out" },
      0
    );

    tlRef.current = tl;

    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, [duration, frontText, backText]);

  const onEnter = () => tlRef.current && tlRef.current.play();
  const onLeave = () => tlRef.current && tlRef.current.reverse();

  const measure =
    (frontText || "").length >= (backText || "").length ? frontText : backText;

  return (
    <span
      className={`blendSection ${className}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      tabIndex={0}
    >
      <span className="blendWord">
        {/* width stabilizer so overlay doesn't shift */}
        <span className="blendSizer">{measure}</span>

        {/* overlayed words (same exact position) */}
        <span ref={frontRef} className={`blendFace ${frontClassName}`}>
          {frontText}
        </span>
        <span ref={backRef} className={`blendFace ${backClassName}`}>
          {backText}
        </span>
      </span>
    </span>
  );
}
