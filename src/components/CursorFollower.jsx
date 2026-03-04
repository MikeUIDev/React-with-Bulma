import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CursorFollower({ className = "" }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let pos = { x: mouse.x, y: mouse.y };

    const speed = 0.15; // smaller = more lag

    const moveMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", moveMouse);

    // Smooth trailing using GSAP ticker
    const tick = () => {
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;

      gsap.set(cursor, { x: pos.x, y: pos.y });
    };

    gsap.ticker.add(tick);

    // Hover disappear on links
    const onEnter = () => {
      gsap.to(cursor, {
        scale: 0.1,
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const hoverTargets = document.querySelectorAll("a, button");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      gsap.ticker.remove(tick);

      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className={`cursor-dot ${className}`} />;
}
