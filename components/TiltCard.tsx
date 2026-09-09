import React, { useEffect, useRef, useState } from "react"

type Props = {
    children: React.ReactNode
    className?: string
    max?: number
    glow?: boolean
}

export default function TiltCard({
    children,
    className = "",
    max = 12,
    glow = true,
}: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const [style, setStyle] = useState<React.CSSProperties>({})
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })
    const [hovered, setHovered] = useState(false)
    const [enableTilt, setEnableTilt] = useState(false)

    // Only enable tilt on devices that have a fine pointer (mouse/trackpad).
    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return
        const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
        const update = () => setEnableTilt(mq.matches)
        update()
        mq.addEventListener?.("change", update)
        return () => mq.removeEventListener?.("change", update)
    }, [])

    function onMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!enableTilt) return
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width
        const py = (e.clientY - rect.top) / rect.height
        const rx = (py - 0.5) * -2 * max
        const ry = (px - 0.5) * 2 * max
        setStyle({
            transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.04,1.04,1.04)`,
            transition: "transform 60ms ease-out",
        })
        setGlowPos({ x: px * 100, y: py * 100 })
    }

    function onLeave() {
        if (!enableTilt) return
        setStyle({
            transform:
                "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
            transition: "transform 400ms ease-out",
        })
        setHovered(false)
    }

    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            onMouseEnter={() => enableTilt && setHovered(true)}
            onMouseLeave={onLeave}
            style={enableTilt ? { ...style, transformStyle: "preserve-3d" } : undefined}
            className={`relative will-change-transform ${className}`}
        >
            {glow && enableTilt && (
                <div
                    className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
                    style={{
                        opacity: hovered ? 1 : 0,
                        background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(249,115,22,0.25), transparent 55%)`,
                    }}
                />
            )}
            <div style={enableTilt ? { transform: "translateZ(30px)" } : undefined}>
                {children}
            </div>
        </div>
    )
}
