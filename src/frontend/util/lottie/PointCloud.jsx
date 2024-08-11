import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function PointCloud() {
  const pointsRef = useRef();

  // Function to generate points on a sphere
  const generateSpherePoints = (numPoints, radius) => {
    const positions = new Float32Array(numPoints * 3);
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions.set([x, y, z], i * 3);
    }
    return positions;
  };

  const numPoints = 500;
  const radius = 5;
  const spherePoints = generateSpherePoints(numPoints, radius);

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <OrbitControls enableZoom={false} />

      <points ref={pointsRef}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={["attributes", "position"]}
            array={spherePoints}
            count={spherePoints.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          attach="material"
          color="#ff6347"
          size={0.1}
          sizeAttenuation
        />
      </points>

      <lineSegments>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attachObject={["attributes", "position"]}
            array={spherePoints}
            count={spherePoints.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial attach="material" color="#ffa500" />
      </lineSegments>
    </Canvas>
  );
}

export default PointCloud;
