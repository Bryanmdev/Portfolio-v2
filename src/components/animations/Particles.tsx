"use client";

import React, { useRef, useEffect } from "react";

export function Particles({ className = "" }: { className?: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particlesArray: Particle[] = [];
        let animationFrameId: number;

        const mouse = {
            x: null as number | null,
            y: null as number | null,
            radius: 150
        };

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        };

        const handleMouseOut = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseOut);

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener("resize", resize);

        class Particle {
            x: number;
            y: number;
            size: number;
            baseX: number;
            baseY: number;
            density: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.baseX = x;
                this.baseY = y;
                this.size = Math.random() * 1.5 + 0.5; // very small dots
                this.density = (Math.random() * 30) + 1;
            }

            draw() {
                if (!ctx) return;
                // Subtle grey/zinc color for the dots
                ctx.fillStyle = "rgba(161, 161, 170, 0.5)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                if (mouse.x != null && mouse.y != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const maxDistance = mouse.radius;
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = forceDirectionX * force * this.density;
                    const directionY = forceDirectionY * force * this.density;

                    if (distance < mouse.radius) {
                        // Push away from the mouse
                        this.x -= directionX;
                        this.y -= directionY;
                    } else {
                        // Return to origin
                        if (this.x !== this.baseX) {
                            const dxDist = this.x - this.baseX;
                            this.x -= dxDist / 15;
                        }
                        if (this.y !== this.baseY) {
                            const dyDist = this.y - this.baseY;
                            this.y -= dyDist / 15;
                        }
                    }
                } else {
                    // Return to origin when mouse is out
                    if (this.x !== this.baseX) {
                        const dxDist = this.x - this.baseX;
                        this.x -= dxDist / 15;
                    }
                    if (this.y !== this.baseY) {
                        const dyDist = this.y - this.baseY;
                        this.y -= dyDist / 15;
                    }
                }
                this.draw();
            }
        }

        const init = () => {
            particlesArray = [];
            // Adjust density based on screen size (less particles on smaller screens)
            const numberOfParticles = (canvas.width * canvas.height) / 8000;
            for (let i = 0; i < numberOfParticles; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particlesArray.push(new Particle(x, y));
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }

            // Connect particles
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const dx = particlesArray[a].x - particlesArray[b].x;
                    const dy = particlesArray[a].y - particlesArray[b].y;
                    const distance = dx * dx + dy * dy;

                    if (distance < 8000) {
                        const opacityValue = 1 - (distance / 8000);
                        ctx.strokeStyle = `rgba(161, 161, 170, ${opacityValue * 0.15})`; // Subtle zinc lines
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        resize();
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseOut);
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 ${className}`}
        />
    );
}
