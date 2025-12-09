import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

const Model = ({ url }) => {
  const { scene } = useGLTF(url);

  return (
    <primitive
      object={scene}
      scale={2} // Моделын хэмжээ томруулна
      position={[0, -1.5, 0]} // Модел төвд байрлана
    />
  );
};

const ModelViewer = ({ modelUrl }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.5, 5], fov: 50 }}
      style={{ width: "100%", height: "100%" }} // Бүтэн дэлгэц
    >
      {/* Орчны гэрэл */}
      <ambientLight intensity={0.6} />
      <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={1.5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Модель */}
      <Suspense fallback={null}>
        <Model url={modelUrl} />
        <Environment preset="city" /> {/* HDRI орчны гэрэл */}
      </Suspense>

      {/* Модель дээр эргүүлэх, zoom хийх боломж */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxDistance={10}
        minDistance={2}
      />
    </Canvas>
  );
};

export default ModelViewer;
