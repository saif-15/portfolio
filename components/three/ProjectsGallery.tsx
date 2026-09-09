import React, { useMemo, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import * as THREE from "three"

export type Project = {
  title: string
  description: string
  tech: string[]
  color: string
}

type Layout = {
  slotAngle: number
  arcRadius: number
  cardWorldW: number
  cardWorldH: number
  cardPxW: number
  cardPxH: number
  distanceFactor: number
  cameraZ: number
  cameraFov: number
  isMobile: boolean
}

function useResponsiveLayout(): Layout {
  const { viewport, size } = useThree()
  return useMemo(() => {
    const w = size.width
    const isMobile = w < 640
    const isTablet = w >= 640 && w < 1024

    const slotAngle = isMobile ? 0.55 : isTablet ? 0.42 : 0.35
    const arcRadius = isMobile ? 5.5 : isTablet ? 6.0 : 6.4
    const cardWorldW = isMobile ? 2.6 : isTablet ? 3.0 : 3.2
    const cardWorldH = isMobile ? 3.2 : isTablet ? 3.7 : 4.0
    const cardPxW = isMobile ? 220 : isTablet ? 248 : 268
    const cardPxH = isMobile ? 280 : isTablet ? 306 : 330
    const distanceFactor = isMobile ? 2.4 : 2.0
    const cameraZ = isMobile ? 4.8 : 5.5
    const cameraFov = isMobile ? 55 : 45

    return {
      slotAngle,
      arcRadius,
      cardWorldW,
      cardWorldH,
      cardPxW,
      cardPxH,
      distanceFactor,
      cameraZ,
      cameraFov,
      isMobile,
    }
  }, [size.width])
}

function ProjectCard({
  project,
  index,
  active,
  onSelect,
  count,
  layout,
}: {
  project: Project
  index: number
  active: number
  count: number
  onSelect: () => void
  layout: Layout
}) {
  const groupRef = useRef<THREE.Group>(null!)
  const [hovered, setHovered] = useState(false)

  useFrame((_, delta) => {
    if (!groupRef.current) return
    const rel = index - active
    const angle = rel * layout.slotAngle
    const targetX = Math.sin(angle) * layout.arcRadius
    const targetZ = -layout.arcRadius + Math.cos(angle) * layout.arcRadius
    const targetRotY = -angle
    const isActive = rel === 0
    const targetScale = isActive ? 1.05 : hovered ? 0.95 : 0.82
    const targetY = isActive ? 0.15 : 0

    const g = groupRef.current
    g.position.x = THREE.MathUtils.damp(g.position.x, targetX, 6, delta)
    g.position.z = THREE.MathUtils.damp(g.position.z, targetZ, 6, delta)
    g.position.y = THREE.MathUtils.damp(g.position.y, targetY, 6, delta)
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetRotY, 6, delta)
    g.scale.setScalar(THREE.MathUtils.damp(g.scale.x, targetScale, 6, delta))
  })

  const isActive = index === active

  return (
    <group ref={groupRef}>
      {/* Glow back plate */}
      <mesh position={[0, 0, -0.06]}>
        <planeGeometry args={[layout.cardWorldW + 0.2, layout.cardWorldH + 0.2]} />
        <meshBasicMaterial
          color={project.color}
          transparent
          opacity={isActive ? 0.18 : 0.06}
          side={THREE.DoubleSide}
        />
      </mesh>

      <Html
        transform
        occlude={false}
        distanceFactor={layout.distanceFactor}
        zIndexRange={[10, 0]}
        style={{ pointerEvents: "auto" }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation()
            onSelect()
          }}
          onMouseEnter={() => {
            setHovered(true)
            if (isActive) document.body.style.cursor = "pointer"
          }}
          onMouseLeave={() => {
            setHovered(false)
            document.body.style.cursor = "auto"
          }}
          style={{
            width: layout.cardPxW,
            height: layout.cardPxH,
            padding: layout.isMobile ? "16px 14px" : "22px 20px",
            borderRadius: 16,
            background:
              "linear-gradient(160deg, rgba(30,30,30,0.92) 0%, rgba(15,15,15,0.92) 100%)",
            border: isActive
              ? `1.5px solid ${project.color}`
              : "1px solid rgba(255,255,255,0.08)",
            boxShadow: isActive
              ? `0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${project.color}55`
              : "0 12px 30px rgba(0,0,0,0.5)",
            backdropFilter: "blur(6px)",
            display: "flex",
            flexDirection: "column",
            gap: layout.isMobile ? 8 : 10,
            color: "#fff",
            cursor: "pointer",
            transition: "border-color 240ms ease, box-shadow 240ms ease",
            userSelect: "none",
            fontFamily:
              "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              height: 4,
              width: 44,
              borderRadius: 999,
              background: project.color,
              boxShadow: `0 0 12px ${project.color}`,
            }}
          />
          <div
            style={{
              fontSize: layout.isMobile ? 16 : 18,
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: 0.2,
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              fontSize: layout.isMobile ? 11.5 : 12.5,
              lineHeight: 1.55,
              color: "rgba(230,230,230,0.85)",
              flex: 1,
              overflow: "hidden",
            }}
          >
            {project.description}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              marginTop: 4,
            }}
          >
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: layout.isMobile ? 9.5 : 10.5,
                  padding: layout.isMobile ? "3px 7px" : "4px 8px",
                  borderRadius: 999,
                  border: `1px solid ${project.color}66`,
                  color: project.color,
                  background: `${project.color}12`,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <div
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.4)",
              textTransform: "uppercase",
              letterSpacing: 2,
              marginTop: 2,
            }}
          >
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </div>
        </div>
      </Html>
    </group>
  )
}

function Scene({
  projects,
  active,
  setActive,
}: {
  projects: Project[]
  active: number
  setActive: (i: number) => void
}) {
  const layout = useResponsiveLayout()
  const { camera, size } = useThree()

  // Adjust camera to viewport
  React.useEffect(() => {
    ;(camera as THREE.PerspectiveCamera).fov = layout.cameraFov
    camera.position.set(0, 0.2, layout.cameraZ)
    ;(camera as THREE.PerspectiveCamera).updateProjectionMatrix()
  }, [camera, layout.cameraFov, layout.cameraZ, size.width])

  return (
    <>
      {projects.map((p, i) => (
        <ProjectCard
          key={p.title}
          project={p}
          index={i}
          active={active}
          count={projects.length}
          onSelect={() => setActive(i)}
          layout={layout}
        />
      ))}
    </>
  )
}

export default function ProjectsGallery({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0)
  const n = projects.length

  return (
    <div className="w-full h-[clamp(440px,70vh,720px)] relative">
      <Canvas
        camera={{ position: [0, 0.2, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[4, 4, 6]} intensity={1.0} color="#ffffff" />
        <React.Suspense fallback={null}>
          <Scene projects={projects} active={active} setActive={setActive} />
        </React.Suspense>
      </Canvas>

      <button
        aria-label="Previous project"
        onClick={() => setActive((active - 1 + n) % n)}
        className="absolute left-1 sm:left-3 md:left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 border border-white/15 text-white hover:border-[#F97316] hover:text-[#F97316] transition-colors flex items-center justify-center text-lg backdrop-blur z-10"
      >
        ‹
      </button>
      <button
        aria-label="Next project"
        onClick={() => setActive((active + 1) % n)}
        className="absolute right-1 sm:right-3 md:right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 border border-white/15 text-white hover:border-[#F97316] hover:text-[#F97316] transition-colors flex items-center justify-center text-lg backdrop-blur z-10"
      >
        ›
      </button>

      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {projects.map((_, i) => (
          <button
            key={i}
            aria-label={`Show project ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-8 bg-[#F97316]" : "w-2 bg-gray-600 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
