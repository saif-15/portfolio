import React, { useMemo, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Points, PointMaterial, Float } from "@react-three/drei"
import * as THREE from "three"

function Starfield({ count = 4000 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 8 + Math.random() * 22
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.02
    ref.current.rotation.x += delta * 0.008
    const { pointer } = state
    ref.current.rotation.x += pointer.y * delta * 0.15
    ref.current.rotation.y += pointer.x * delta * 0.15
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#F97316"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  )
}

function SecondaryStars({ count = 1500 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 40
      arr[i * 3 + 1] = (Math.random() - 0.5) * 40
      arr[i * 3 + 2] = (Math.random() - 0.5) * 40
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y -= delta * 0.01
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  )
}

function FloatingShape({
  position,
  color,
  scale = 1,
  shape = "knot",
}: {
  position: [number, number, number]
  color: string
  scale?: number
  shape?: "knot" | "ico" | "octa"
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.3
    meshRef.current.rotation.y += delta * 0.2
  })
  const geo =
    shape === "knot" ? (
      <torusKnotGeometry args={[0.6, 0.18, 128, 16]} />
    ) : shape === "ico" ? (
      <icosahedronGeometry args={[0.8, 0]} />
    ) : (
      <octahedronGeometry args={[0.9, 0]} />
    )
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geo}
        <meshStandardMaterial
          color={color}
          wireframe
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  )
}

function ScrollCamera() {
  const { camera } = useThree()
  useFrame(() => {
    const doc = typeof document !== "undefined" ? document.documentElement : null
    if (!doc) return
    // The page scrolls inside a snap container; but we can also read window.scrollY as fallback
    const scrollEl = document.getElementById("scroll-root")
    const t = scrollEl
      ? scrollEl.scrollTop / Math.max(1, scrollEl.scrollHeight - scrollEl.clientHeight)
      : window.scrollY / Math.max(1, doc.scrollHeight - doc.clientHeight)

    // Gentle parallax on the camera driven by scroll
    const targetY = -t * 4
    const targetZ = 6 + Math.sin(t * Math.PI) * 1.2
    camera.position.y += (targetY - camera.position.y) * 0.05
    camera.position.z += (targetZ - camera.position.z) * 0.05
    camera.lookAt(0, camera.position.y * 0.4, 0)
  })
  return null
}

export default function SceneBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["#0a0a0a"]} />
        <fog attach="fog" args={["#0a0a0a", 10, 40]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#F97316" />
        <pointLight position={[-10, -6, -6]} intensity={0.6} color="#3b82f6" />

        <Starfield />
        <SecondaryStars />

        <FloatingShape position={[-4, 1.5, -2]} color="#F97316" shape="knot" scale={0.9} />
        <FloatingShape position={[4.2, -1.2, -3]} color="#3b82f6" shape="ico" scale={0.8} />
        <FloatingShape position={[0, -3.5, -4]} color="#a855f7" shape="octa" scale={0.7} />
        <FloatingShape position={[-3.5, -4.5, -5]} color="#22d3ee" shape="knot" scale={0.6} />
        <FloatingShape position={[3.8, 3.2, -4]} color="#F97316" shape="octa" scale={0.65} />

        <ScrollCamera />
      </Canvas>
    </div>
  )
}
