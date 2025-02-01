import { Canvas } from "@react-three/fiber";
import Apartment from "../ThreeDModels/Apartment";
import { CameraControls } from "@react-three/drei";

function ThreeDView() {
  return (
    <div className="flex flex-col w-full h-full overflow-scroll no-scrollbar">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Apartment />
        <CameraControls />
      </Canvas>
    </div>
  );
}

export default ThreeDView;