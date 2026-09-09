import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MeshDistortMaterial, Sphere, Torus } from "@react-three/drei"
import * as THREE from "three"

function Orb() {
  const groupRef = useRef<THREE.Group>(null!)
  const ringRef = useRef<THREE.Mesh>(null!)
  const ring2Ref = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    if (groupRef.current) {
      const { pointer } = state
      groupRef.current.rotation.y += delta * 0.15
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        pointer.y * 0.35,
        0.05
      )
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.4
      ringRef.current.rotation.y += delta * 0.6
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x -= delta * 0.5
      ring2Ref.current.rotation.z += delta * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      <Sphere args={[1.5, 128, 128]}>
        <MeshDistortMaterial
          color="#F97316"
          emissive="#F97316"
          emissiveIntensity={0.35}
          distort={0.45}
          speed={2.4}
          roughness={0.2}
          metalness={0.6}
        />
      </Sphere>

      <Torus ref={ringRef} args={[2.3, 0.02, 16, 200]}>
        <meshStandardMaterial
          color="#F97316"
          emissive="#F97316"
          emissiveIntensity={1.2}
        />
      </Torus>
      <Torus ref={ring2Ref} args={[2.7, 0.015, 16, 200]}>
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={1.1}
        />
      </Torus>
    </group>
  )
}

export default function HeroOrb() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#F97316" />
        <pointLight position={[-5, -3, -3]} intensity={0.8} color="#3b82f6" />
        <Orb />
      </Canvas>
    </div>
  )
}
