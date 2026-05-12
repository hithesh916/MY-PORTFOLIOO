"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const frameCount = 40;
  const images = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const loadImages = async () => {
      const basePath = "/MY-PORTFOLIOO";
      let loaded = 0;
      // Use the actual number of files found (40)
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = `${basePath}/assets/frames/ezgif-frame-${String(i).padStart(3, "0")}.png`;
        await new Promise((resolve) => {
          img.onload = () => {
            loaded++;
            resolve(null);
          };
          img.onerror = () => {
            loaded++;
            resolve(null);
          };
        });
        images.current.push(img);
      }
      setImagesLoaded(true);
    };

    loadImages();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const render = (index: number) => {
      if (images.current[index] && images.current[index].complete) {
        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        const img = images.current[index];
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        // "cover" behavior for canvas
        if (canvasRatio > imgRatio) {
          drawHeight = canvas.width / imgRatio;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
        }

        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    const playhead = { frame: 0 };

    // Resize handling
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(Math.round(playhead.frame));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial resize

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=600%", // Slightly longer for smoother feel
        scrub: 1, // Increased scrub for smoother interpolation
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(playhead, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => render(Math.round(playhead.frame)),
    }, 0);

    // Text Animations (synchronizing with scroll)
    tl.to(text1Ref.current, { opacity: 0, y: -50, duration: 0.1 }, 0.1);
    tl.fromTo(text2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.1 }, 0.3);
    tl.to(text2Ref.current, { opacity: 0, y: -50, duration: 0.1 }, 0.6);
    tl.fromTo(text3Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.1 }, 0.8);

    return () => {
      window.removeEventListener("resize", handleResize);
      tl.kill();
    };
  }, [imagesLoaded]);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black">
          <div className="text-white text-xl animate-pulse font-light tracking-widest">
            LOADING EXPERIENCE
          </div>
        </div>
      )}
      
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] opacity-70"></div>
        {/* Grain effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] mix-blend-overlay"></div>
      </div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <div ref={text1Ref} className="absolute flex flex-col items-center gap-4 w-full px-4 text-center">
          <h1 className="text-white text-5xl md:text-8xl font-bold tracking-tighter drop-shadow-2xl">
            Hithesh.
          </h1>
          <p className="text-gray-300 text-lg md:text-3xl font-light tracking-wide">
            Engineering the future.
          </p>
        </div>

        <div ref={text2Ref} className="absolute flex flex-col items-center gap-4 opacity-0 w-full px-4 text-center">
          <h2 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl leading-tight">
            Software Developer.<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
              Building the future.
            </span>
          </h2>
        </div>

        <div ref={text3Ref} className="absolute flex flex-col items-center gap-4 opacity-0 w-full px-4 text-center">
          <h2 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter">
            Vibe Coder.
          </h2>
          <button 
            className="mt-8 px-8 py-4 bg-white text-black rounded-full font-medium text-lg pointer-events-auto hover:scale-105 transition-transform duration-300"
            onClick={() => {
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Discover My Work
          </button>
        </div>
      </div>
    </div>
  );
}
