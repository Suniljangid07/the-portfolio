"use client";

import { useMemo, useRef } from "react";
import type { Group } from "three";
import { AdditiveBlending, Color, Vector3 } from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Points, PointMaterial, Sphere, Stars } from "@react-three/drei";
import { useMotionValueEvent, type MotionValue } from "framer-motion";

type SceneCanvasProps = {
  scrollProgress: MotionValue<number>;
};

const sectionOffsets = [0, -9, -18, -27, -36, -45, -54, -63];

function createPointCloud() {
  const cloud = [];

  for (let index = 0; index < 1400; index += 1) {
    const seed = index + 1;
    const x = Math.sin(seed * 12.9898) * 43758.5453;
    const y = Math.sin(seed * 78.233) * 12345.6789;
    const z = Math.sin(seed * 39.425) * 98765.4321;

    cloud.push(((x - Math.floor(x)) - 0.5) * 28);
    cloud.push(((y - Math.floor(y)) - 0.5) * 82);
    cloud.push(((z - Math.floor(z)) - 0.5) * 22);
  }

  return new Float32Array(cloud);
}

function SceneContent({ scrollProgress }: SceneCanvasProps) {
  const rootRef = useRef<Group>(null);
  const skillRingRef = useRef<Group>(null);
  const architectureRef = useRef<Group>(null);
  const targetProgress = useRef(0);
  const lookAt = useMemo(() => new Vector3(), []);

  const points = useMemo(() => createPointCloud(), []);

  useMotionValueEvent(scrollProgress, "change", (latest) => {
    targetProgress.current = latest;
  });

  useFrame((state, delta) => {
    const cameraY = -targetProgress.current * 63;
    const mouseX = state.pointer.x * 1.2;
    const mouseY = state.pointer.y * 0.9;

    state.camera.position.x += (mouseX - state.camera.position.x) * delta * 1.5;
    state.camera.position.y += (cameraY + mouseY * 1.4 - state.camera.position.y) * delta * 1.6;
    state.camera.position.z += (8 + Math.abs(state.pointer.x) * 0.8 - state.camera.position.z) * delta;

    lookAt.set(mouseX * 0.4, cameraY, 0);
    state.camera.lookAt(lookAt);

    if (rootRef.current) {
      rootRef.current.rotation.z += delta * 0.03;
    }

    if (skillRingRef.current) {
      skillRingRef.current.rotation.y += delta * 0.28;
      skillRingRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.18;
    }

    if (architectureRef.current) {
      architectureRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={rootRef}>
      <color attach="background" args={["#03060d"]} />
      <fog attach="fog" args={["#03060d", 10, 35]} />
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 6]} intensity={2.2} color="#79d7ff" />
      <pointLight position={[-4, -15, 4]} intensity={18} color="#5b7cff" />
      <pointLight position={[4, -44, 4]} intensity={22} color="#67f5d6" />
      <Stars radius={100} depth={60} count={3500} factor={4} saturation={0} fade speed={1.1} />

      <Points positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#9fdfff"
          size={0.045}
          sizeAttenuation
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </Points>

      <group position={[4.8, sectionOffsets[0] - 2.2, -1.6]}>
        <Float speed={1.2} floatIntensity={1.8} rotationIntensity={0.7}>
          <Sphere args={[1.35, 48, 48]} position={[0, 0, -1]}>
            <meshStandardMaterial
              color="#78cfff"
              emissive={new Color("#52e0ff")}
              emissiveIntensity={0.7}
              roughness={0.1}
              metalness={0.4}
              wireframe
            />
          </Sphere>
        </Float>
        {[-1.9, -0.75, 0.75, 1.9].map((x, index) => (
          <Float key={x} speed={1.3 + index * 0.25} floatIntensity={1.4}>
            <mesh position={[x, -1.25 + index * 0.38, -1.9 + index * 0.15]}>
              <boxGeometry args={[0.76, 0.38, 0.22]} />
              <meshStandardMaterial color={index % 2 === 0 ? "#5b7cff" : "#67f5d6"} />
            </mesh>
          </Float>
        ))}
      </group>

      <group position={[0, sectionOffsets[1], -1]}>
        {[-2.8, 0, 2.8].map((x, index) => (
          <Float key={x} speed={1 + index * 0.18} floatIntensity={1.2}>
            <mesh position={[x, index * -1.2, 0]}>
              <octahedronGeometry args={[1.2 - index * 0.15]} />
              <meshStandardMaterial
                color={["#5ce1ff", "#f48dff", "#67f5d6"][index]}
                roughness={0.15}
                metalness={0.35}
                emissive={["#5ce1ff", "#f48dff", "#67f5d6"][index]}
                emissiveIntensity={0.35}
                wireframe={index === 1}
              />
            </mesh>
          </Float>
        ))}
      </group>

      <group ref={skillRingRef} position={[0, sectionOffsets[2], 0]}>
        {Array.from({ length: 12 }).map((_, index) => {
          const angle = (index / 12) * Math.PI * 2;
          return (
            <Float key={index} speed={1.2 + index * 0.08} floatIntensity={0.8}>
              <mesh
                position={[
                  Math.cos(angle) * 3.3,
                  Math.sin(angle * 2) * 0.9,
                  Math.sin(angle) * 3.3,
                ]}
              >
                <sphereGeometry args={[0.34, 24, 24]} />
                <meshStandardMaterial
                  color={
                    index % 3 === 0 ? "#5ce1ff" : index % 3 === 1 ? "#5b7cff" : "#67f5d6"
                  }
                  emissive={
                    index % 3 === 0 ? "#5ce1ff" : index % 3 === 1 ? "#5b7cff" : "#67f5d6"
                  }
                  emissiveIntensity={0.55}
                />
              </mesh>
            </Float>
          );
        })}
      </group>

      <group position={[0, sectionOffsets[3], -1]}>
        <Line points={[[-3, 0, 0], [0, 1.4, -0.8], [3, -0.8, 0.6]]} color="#5ce1ff" lineWidth={1} />
        <Line points={[[-2.8, -1.8, -0.4], [0, 0.2, 0.9], [2.8, 1.6, -0.3]]} color="#f48dff" lineWidth={1} />
        {[
          [-3, 0, 0],
          [0, 1.4, -0.8],
          [3, -0.8, 0.6],
          [-2.8, -1.8, -0.4],
          [0, 0.2, 0.9],
          [2.8, 1.6, -0.3],
        ].map((position, index) => (
          <mesh key={index} position={position as [number, number, number]}>
            <sphereGeometry args={[0.22, 24, 24]} />
            <meshStandardMaterial
              color={index % 2 === 0 ? "#67f5d6" : "#5ce1ff"}
              emissive="#5ce1ff"
              emissiveIntensity={0.6}
            />
          </mesh>
        ))}
      </group>

      <group position={[0, sectionOffsets[4], 0]}>
        {[-3.2, 0, 3.2].map((x, index) => (
          <mesh key={x} position={[x, 0.5 - index * 0.6, -0.2]}>
            <boxGeometry args={[1.1, 4.2 - index * 0.8, 1.1]} />
            <meshStandardMaterial
              color={["#5b7cff", "#5ce1ff", "#67f5d6"][index]}
              transparent
              opacity={0.3 + index * 0.1}
              emissive={["#5b7cff", "#5ce1ff", "#67f5d6"][index]}
              emissiveIntensity={0.22}
            />
          </mesh>
        ))}
      </group>

      <group ref={architectureRef} position={[0, sectionOffsets[5], 0]}>
        {Array.from({ length: 3 }).map((_, index) => (
          <mesh key={index} position={[0, -index * 1.5, 0]} rotation={[0.3, index * 0.4, 0]}>
            <torusGeometry args={[2.1 + index * 0.75, 0.08, 12, 120]} />
            <meshStandardMaterial
              color={index === 0 ? "#5ce1ff" : index === 1 ? "#67f5d6" : "#f48dff"}
              emissive={index === 0 ? "#5ce1ff" : index === 1 ? "#67f5d6" : "#f48dff"}
              emissiveIntensity={0.6}
            />
          </mesh>
        ))}
      </group>

      <group position={[0, sectionOffsets[6], 0]}>
        {Array.from({ length: 9 }).map((_, index) => {
          const row = Math.floor(index / 3);
          const column = index % 3;
          return (
            <mesh
              key={index}
              position={[-2.4 + column * 2.4, row * -1.8, Math.sin(index) * 0.5]}
              rotation={[0.3, row * 0.4, 0]}
            >
              <planeGeometry args={[1.2, 0.8]} />
              <meshStandardMaterial
                color={row === 1 ? "#67f5d6" : "#5b7cff"}
                transparent
                opacity={0.45}
              />
            </mesh>
          );
        })}
      </group>

      <group position={[0, sectionOffsets[7], 0]}>
        <Float speed={1.4} floatIntensity={1.1}>
          <mesh>
            <icosahedronGeometry args={[1.8, 0]} />
            <meshStandardMaterial
              color="#f48dff"
              emissive="#5ce1ff"
              emissiveIntensity={0.5}
              wireframe
            />
          </mesh>
        </Float>
      </group>
    </group>
  );
}

export function SceneCanvas({ scrollProgress }: SceneCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 48 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      className="h-full w-full"
    >
      <SceneContent scrollProgress={scrollProgress} />
    </Canvas>
  );
}
