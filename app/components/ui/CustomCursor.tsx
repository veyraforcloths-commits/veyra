"use client";

import { useEffect, useRef, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

interface LetterSpark {
  id: number;
  x: number;
  y: number;
  char: "V" | "K";
  rot: number;
}

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [sparks, setSparks] = useState<LetterSpark[]>([]);

  // Mouse exact position
  const mousePosRef = useRef({ x: -100, y: -100 });

  // Physics state for dynamic liquid outer ring
  const trailPosRef = useRef({ x: -100, y: -100 });
  const velocityRef = useRef({ vx: 0, vy: 0, speed: 0, angle: 0 });

  // Trailing 'V' and 'K' monogram ghost nodes
  const ghost1Ref = useRef({ x: -100, y: -100 }); // 'V'
  const ghost2Ref = useRef({ x: -100, y: -100 }); // 'K'
  const ghost3Ref = useRef({ x: -100, y: -100 }); // 'V'
  const ghost4Ref = useRef({ x: -100, y: -100 }); // 'K'

  // Last spark position for interval distance check
  const lastSparkPosRef = useRef({ x: -100, y: -100 });
  const sparkToggleRef = useRef(false);

  // DOM node direct refs for zero-latency 120fps GPU transforms
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ghost1ElRef = useRef<HTMLDivElement>(null);
  const ghost2ElRef = useRef<HTMLDivElement>(null);
  const ghost3ElRef = useRef<HTMLDivElement>(null);
  const ghost4ElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect touch / coarse pointer devices
    const isTouch =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }

    // Enable custom cursor styling on desktop
    document.body.classList.add("has-custom-cursor");

    const onMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check interactive hover
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(
        'a, button, input, textarea, select, [role="button"], [data-cursor="pointer"], .cursor-pointer'
      );

      setIsHovered(!!interactiveEl);
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsClicked(true);
      // Spawn ripple shockwave
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev.slice(-3), newRipple]);
    };

    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => {
      setIsVisible(false);
      setIsClicked(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // 60-120fps hardware-accelerated render loop
    let animId: number;
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const render = () => {
      const mx = mousePosRef.current.x;
      const my = mousePosRef.current.y;

      // 1. Center pointer star
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
      }

      // 2. Smooth lerp for main reticle ring
      const prevTx = trailPosRef.current.x;
      const prevTy = trailPosRef.current.y;
      const tx = lerp(prevTx, mx, 0.22);
      const ty = lerp(prevTy, my, 0.22);
      trailPosRef.current = { x: tx, y: ty };

      // 3. Velocity vector for liquid stretch
      const dx = mx - tx;
      const dy = my - ty;
      const rawSpeed = Math.sqrt(dx * dx + dy * dy);
      const currentSpeed = lerp(velocityRef.current.speed, rawSpeed, 0.2);
      let angle = velocityRef.current.angle;

      if (rawSpeed > 1.2) {
        angle = Math.atan2(dy, dx) * (180 / Math.PI);
      }
      velocityRef.current = { vx: dx, vy: dy, speed: currentSpeed, angle };

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }

      // 4. Trailing Monogram Letters: 'V' and 'K' physics chain
      // Motion-triggered opacity: V and K letters smoothly appear while moving, fading away when stationary
      const motionFade = Math.min(Math.max((currentSpeed - 0.8) * 0.18, 0), 1);

      // Ghost 1: 'V' (closest to reticle)
      const g1x = lerp(ghost1Ref.current.x, tx, 0.24);
      const g1y = lerp(ghost1Ref.current.y, ty, 0.24);
      ghost1Ref.current = { x: g1x, y: g1y };
      if (ghost1ElRef.current) {
        ghost1ElRef.current.style.transform = `translate3d(${g1x}px, ${g1y}px, 0) rotate(${angle * 0.22}deg)`;
        ghost1ElRef.current.style.opacity = `${motionFade * 0.85}`;
      }

      // Ghost 2: 'K'
      const g2x = lerp(ghost2Ref.current.x, g1x, 0.19);
      const g2y = lerp(ghost2Ref.current.y, g1y, 0.19);
      ghost2Ref.current = { x: g2x, y: g2y };
      if (ghost2ElRef.current) {
        ghost2ElRef.current.style.transform = `translate3d(${g2x}px, ${g2y}px, 0) rotate(${angle * 0.18}deg)`;
        ghost2ElRef.current.style.opacity = `${motionFade * 0.7}`;
      }

      // Ghost 3: 'V'
      const g3x = lerp(ghost3Ref.current.x, g2x, 0.15);
      const g3y = lerp(ghost3Ref.current.y, g2y, 0.15);
      ghost3Ref.current = { x: g3x, y: g3y };
      if (ghost3ElRef.current) {
        ghost3ElRef.current.style.transform = `translate3d(${g3x}px, ${g3y}px, 0) rotate(${angle * 0.14}deg)`;
        ghost3ElRef.current.style.opacity = `${motionFade * 0.55}`;
      }

      // Ghost 4: 'K' (tail end)
      const g4x = lerp(ghost4Ref.current.x, g3x, 0.11);
      const g4y = lerp(ghost4Ref.current.y, g3y, 0.11);
      ghost4Ref.current = { x: g4x, y: g4y };
      if (ghost4ElRef.current) {
        ghost4ElRef.current.style.transform = `translate3d(${g4x}px, ${g4y}px, 0) rotate(${angle * 0.1}deg)`;
        ghost4ElRef.current.style.opacity = `${motionFade * 0.4}`;
      }

      // 5. Emit floating 'V' and 'K' stardust sparks when moving actively
      const sparkDist = Math.hypot(
        mx - lastSparkPosRef.current.x,
        my - lastSparkPosRef.current.y
      );

      if (rawSpeed > 7 && sparkDist > 45) {
        lastSparkPosRef.current = { x: mx, y: my };
        sparkToggleRef.current = !sparkToggleRef.current;
        const newSpark: LetterSpark = {
          id: Date.now() + Math.random(),
          x: mx + (Math.random() - 0.5) * 16,
          y: my + (Math.random() - 0.5) * 16,
          char: sparkToggleRef.current ? "V" : "K",
          rot: (Math.random() - 0.5) * 26,
        };
        setSparks((prev) => [...prev.slice(-6), newSpark]);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  // Clean up ripples and sparks
  const removeRipple = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  const removeSpark = (id: number) => {
    setSparks((prev) => prev.filter((s) => s.id !== id));
  };

  if (isTouchDevice) return null;

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[9999] overflow-hidden transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      {/* 1. Floating 'V' & 'K' Stardust Sparks (Emitted on movement) */}
      {sparks.map((spark) => (
        <span
          key={spark.id}
          onAnimationEnd={() => removeSpark(spark.id)}
          className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 font-serif font-black text-black pointer-events-none select-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] animate-letter-float"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
            fontSize: spark.char === "V" ? "13px" : "11px",
            ["--spark-rot" as string]: `${spark.rot}deg`,
          }}
        >
          {spark.char}
        </span>
      ))}

      {/* 2. Trailing 'V' & 'K' Monogram Ghost Chain */}
      {/* Tail 4: 'K' */}
      <div
        ref={ghost4ElRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-[9px] font-serif font-bold text-black pointer-events-none will-change-transform select-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] transition-opacity duration-200 ease-out"
      >
        K
      </div>

      {/* Tail 3: 'V' */}
      <div
        ref={ghost3ElRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-[10.5px] font-serif font-black text-black pointer-events-none will-change-transform select-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] transition-opacity duration-200 ease-out"
      >
        V
      </div>

      {/* Tail 2: 'K' */}
      <div
        ref={ghost2ElRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-[12px] font-serif font-black text-black pointer-events-none will-change-transform select-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] transition-opacity duration-200 ease-out"
      >
        K
      </div>

      {/* Tail 1: 'V' (closest to reticle) */}
      <div
        ref={ghost1ElRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-[14px] font-serif font-black text-black pointer-events-none will-change-transform select-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)] transition-opacity duration-200 ease-out"
      >
        V
      </div>

      {/* 3. Click Shockwave Ripples */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          onAnimationEnd={() => removeRipple(ripple.id)}
          className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/60 pointer-events-none animate-cursor-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
          }}
        />
      ))}

      {/* 4. Normal Outer Circle (Clean Smooth Fluid Ring) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform rounded-full transition-[width,height,border-color,background-color] duration-200 ease-out"
        style={{
          width: isHovered ? "52px" : "34px",
          height: isHovered ? "52px" : "34px",
          borderRadius: "50%",
          border: isHovered
            ? "1.5px solid rgba(10, 10, 10, 0.75)"
            : "1.2px solid rgba(10, 10, 10, 0.35)",
          backgroundColor: isHovered
            ? "rgba(10, 10, 10, 0.05)"
            : "rgba(10, 10, 10, 0.015)",
          backdropFilter: isHovered ? "blur(1px)" : "none",
          boxShadow: isHovered
            ? "0 8px 20px rgba(0, 0, 0, 0.12)"
            : "0 2px 8px rgba(0, 0, 0, 0.04)",
        }}
      />

      {/* 5. Center Normal Circle Point */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none will-change-transform flex items-center justify-center transition-transform duration-100 ease-out"
      >
        <div
          className={`rounded-full bg-black ring-1 ring-white/80 shadow-sm transition-all duration-150 ease-out ${
            isClicked ? "scale-75" : isHovered ? "scale-85" : "scale-100"
          }`}
          style={{
            width: "7px",
            height: "7px",
          }}
        />
      </div>
    </div>
  );
}
