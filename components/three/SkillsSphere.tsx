import React, { useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Html, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

type SkillItem = {
  key: string
  url: string
}

type SphereLayout = {
  radius: number
  boxPx: number
  iconPx: number
  cameraZ: number
  cameraFov: number
}

function useSphereLayout(): SphereLayout {
  const { size } = useThree()
  return useMemo(() => {
    const w = size.width
    const isMobile = w < 640
    const isTablet = w >= 640 && w < 1024
    return {
      radius: isMobile ? 2.4 : isTablet ? 3.0 : 3.4,
      boxPx: isMobile ? 42 : isTablet ? 50 : 56,
      iconPx: isMobile ? 26 : isTablet ? 32 : 36,
      cameraZ: isMobile ? 7 : 8,
      cameraFov: isMobile ? 65 : 55,
    }
  }, [size.width])
}

function SkillNode({
  position,
  url,
  name,
  onHover,
  layout,
}: {
  position: [number, number, number]
  url: string
  name: string
  onHover: (n: string | null) => void
  layout: SphereLayout
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <group position={position}>
      <Html
        center
        distanceFactor={8}
        zIndexRange={[10, 0]}
        occlude={false}
      >
        <div
          onPointerOver={() => {
            setHovered(true)
            onHover(name)
            document.body.style.cursor = "pointer"
          }}
          onPointerOut={() => {
            setHovered(false)
            onHover(null)
            document.body.style.cursor = "auto"
          }}
          style={{
            width: layout.boxPx,
            height: layout.boxPx,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 12,
            background: hovered
              ? "rgba(249,115,22,0.15)"
              : "rgba(20,20,20,0.55)",
            border: hovered
              ? "1px solid rgba(249,115,22,0.9)"
              : "1px solid rgba(255,255,255,0.08)",
            boxShadow: hovered
              ? "0 0 30px rgba(249,115,22,0.55)"
              : "0 4px 12px rgba(0,0,0,0.4)",
            transform: hovered ? "scale(1.35)" : "scale(1)",
            transition:
              "transform 180ms ease, background 180ms ease, box-shadow 180ms ease, border 180ms ease",
            cursor: "pointer",
            backdropFilter: "blur(4px)",
          }}
        >
          <img
            src={url}
            alt={name}
            style={{
              width: layout.iconPx,
              height: layout.iconPx,
              objectFit: "contain",
              pointerEvents: "none",
              userSelect: "none",
            }}
            draggable={false}
          />
        </div>
      </Html>
    </group>
  )
}

function SkillCluster({
  skills,
  onHover,
}: {
  skills: SkillItem[]
  onHover: (n: string | null) => void
}) {
  const groupRef = useRef<THREE.Group>(null!)
  const layout = useSphereLayout()
  const { camera, size } = useThree()

  useEffect(() => {
    ;(camera as THREE.PerspectiveCamera).fov = layout.cameraFov
    camera.position.set(0, 0, layout.cameraZ)
    ;(camera as THREE.PerspectiveCamera).updateProjectionMatrix()
  }, [camera, layout.cameraFov, layout.cameraZ, size.width])

  const positions = useMemo(() => {
    const n = skills.length
    const points: [number, number, number][] = []
    const offset = 2 / n
    const increment = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < n; i++) {
      const y = i * offset - 1 + offset / 2
      const r = Math.sqrt(1 - y * y)
      const phi = i * increment
      const x = Math.cos(phi) * r
      const z = Math.sin(phi) * r
      points.push([x * layout.radius, y * layout.radius, z * layout.radius])
    }
    return points
  }, [skills.length, layout.radius])

  useFrame((state, delta) => {
    if (!groupRef.current) return
    const { pointer } = state
    groupRef.current.rotation.y += delta * 0.15
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.4,
      0.03
    )
  })

  return (
    <group ref={groupRef}>
      {skills.map((s, i) => (
        <SkillNode
          key={s.key}
          position={positions[i]}
          url={s.url}
          name={s.key}
          onHover={onHover}
          layout={layout}
        />
      ))}
    </group>
  )
}

export default function SkillsSphere({
  skills,
}: {
  skills: SkillItem[]
}) {
  const [hoverName, setHoverName] = useState<string | null>(null)
  return (
    <div className="w-full h-[clamp(420px,70vh,720px)] relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[5, 5, 5]} intensity={1.0} color="#ffffff" />
        <SkillCluster skills={skills} onHover={setHoverName} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          rotateSpeed={0.5}
        />
      </Canvas>

      <div
        className={`pointer-events-none absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/60 backdrop-blur border border-[#F97316]/40 text-xs sm:text-sm uppercase tracking-widest text-[#F97316] transition-opacity duration-200 ${
          hoverName ? "opacity-100" : "opacity-0"
        }`}
      >
        {hoverName ?? ""}
      </div>
    </div>
  )
}
