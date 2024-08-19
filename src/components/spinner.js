import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

function MeshComponent() {

    useFrame(() => {
        mesh.current.rotation.y += 0.01;
     });

    const fileUrl = "/medal.gltf";
    const mesh = useRef<Mesh>(null);
    const gltf = useLoader(GLTFLoader, fileUrl);
  
    return (
      <mesh ref={mesh}>
        <primitive object={gltf.scene} />
      </mesh>
    );
}

export default MeshComponent;