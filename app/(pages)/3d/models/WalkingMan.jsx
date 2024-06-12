import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import walkingManScene from "@/public/assets/3d/walkingMen.glb";

const WalkingMan = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(walkingManScene);
  const { actions } = useAnimations(animations, ref);

  //   useFrame(() => {
  //   });
  useEffect(() => {
    if (!isRotating) {
      actions["mixamo.com"]?.play();
    }else{
      actions["mixamo.com"]?.stop();
    }
  }, [actions,isRotating]);
  return (
    <>
      <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
    </>
  
  );
};

export default WalkingMan;

// import { useAnimations, useGLTF } from "@react-three/drei";
// import planeScene from "../assets/3d/plane.glb";
// import { useEffect, useRef } from "react";

// const Plane = ({ isRotating, ...props }) => {
//   const ref = useRef();
//   const { scene, animations } = useGLTF(planeScene);
//   const { actions } = useAnimations(animations, ref);

//   useEffect(() => {
//     if (!isRotating) {
//       actions["Take 001"].play();
//     } else{
//       actions["Take 001"].stop();
//     }
//   }, [actions, isRotating]);
//   return (
//     <mesh {...props} ref={ref}>
//       <primitive object={scene} />
//     </mesh>
//   );
// };

// export default Plane;
