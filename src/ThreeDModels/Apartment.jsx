import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Apartment() {
    const gltf = useLoader(GLTFLoader, '/stylish_apartment/scene.gltf')
    return (
        <primitive object={gltf.scene} />
    );
}

export default Apartment;