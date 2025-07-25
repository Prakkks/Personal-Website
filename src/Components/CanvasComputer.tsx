/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF} from '@react-three/drei'
import { useEffect, useState } from 'react';
import { useTheme } from '../assets/themeprovider';
import type { Mesh } from 'three';



const CanvasComputer = ( props:any ) => {
   const { isDark } = useTheme();

 useEffect(() => {
  setModel(isDark ? '/models/desktop_pc/EditedComputerglb.glb' : '/models/desktop_pc/EditedComputerglb1.glb');
}, [isDark]);


const [model, setModel ] = useState('/models/desktop_pc/EditedComputerglb.glb');


const { nodes, materials } = useGLTF( model , true);

  return (
    <group {...props} dispose={null}>
      <group position={[-0.85, -5.831, -0.479]} rotation={[0, 0, 0]}>
       <group rotation={[0, -Math.PI/2,0]} scale={0.013}>
       
          <group
            position={[117.182, 25.605, -29.165]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[124.427, 154.111, 119.911]}
            >
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003 as Mesh).geometry}
              material={materials['Material.074_21.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_1 as Mesh).geometry}
              material={materials['Material.074_33.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_2 as Mesh ).geometry}
              material={materials['Material.074_39.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_3 as Mesh).geometry}
              material={materials['Material.127']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_4 as Mesh).geometry}
              material={materials['Material.074_40.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_5 as Mesh).geometry}
              material={materials['Material.074_36.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_6 as Mesh).geometry}
              material={materials['Material.074_34.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_7 as Mesh).geometry}
              material={materials['Material.074_30.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_8 as Mesh).geometry}
              material={materials['Material.074_12.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_9 as Mesh).geometry}
              material={materials['Material.074_37.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_10 as Mesh).geometry}
              material={materials['Material.074_32.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_11 as Mesh).geometry}
              material={materials['Material.074_38.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_12 as Mesh).geometry}
              material={materials['Tasten_2.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_13 as Mesh).geometry}
              material={materials['Tastatur_Seite.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_14 as Mesh).geometry}
              material={materials['Tastatur_Unterseite.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_15 as Mesh).geometry}
              material={materials['Material.128']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_16 as Mesh).geometry}
              material={materials['Material.129']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_17 as Mesh).geometry}
              material={materials['Material.074_35.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_18 as Mesh).geometry}
              material={materials['Material.074_24.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_19 as Mesh).geometry}
              material={materials['Material.074_0.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_20 as Mesh).geometry}
              material={materials['Material.130']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_21 as Mesh).geometry}
              material={materials['Material.131']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_22 as Mesh).geometry}
              material={materials['Material.132']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_23 as Mesh).geometry}
              material={materials['Material.133']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_24 as Mesh).geometry}
              material={materials['Material.074_29.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_25 as Mesh).geometry}
              material={materials['Material.134']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_26 as Mesh).geometry}
              material={materials['Material.074_1.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_27 as Mesh).geometry}
              material={materials['Material.135']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_28 as Mesh).geometry}
              material={materials['Material.074_2.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_29 as Mesh).geometry}
              material={materials['Material.136']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_30 as Mesh).geometry}
              material={materials['Material.137']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_31 as Mesh).geometry}
              material={materials['Material.074_6.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_32 as Mesh).geometry}
              material={materials['Material.074_27.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_33 as Mesh).geometry}
              material={materials['Material.138']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_34 as Mesh).geometry}
              material={materials['Material.139']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_35 as Mesh).geometry}
              material={materials['Material.140']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_36 as Mesh).geometry}
              material={materials['Material.141']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_37 as Mesh).geometry}
              material={materials['Material.142']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_38 as Mesh).geometry}
              material={materials['Material.143']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_39 as Mesh).geometry}
              material={materials['Material.144']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_40 as Mesh).geometry}
              material={materials['Material.145']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_41 as Mesh).geometry}
              material={materials['Material.146']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_42 as Mesh).geometry}
              material={materials['Material.074_7.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_43 as Mesh).geometry}
              material={materials['Material.074_8.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_44 as Mesh).geometry}
              material={materials['Material.147']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_45 as Mesh).geometry}
              material={materials['Material.074_15.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_46 as Mesh).geometry}
              material={materials['Material.074_16.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_47 as Mesh).geometry}
              material={materials['Material.148']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_48 as Mesh).geometry}
              material={materials['Material.149']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_49 as Mesh).geometry}
              material={materials['Material.150']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_50 as Mesh).geometry}
              material={materials['Material.151']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_51 as Mesh).geometry}
              material={materials['Material.152']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_52 as Mesh).geometry}
              material={materials['Material.074_22.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_53 as Mesh).geometry}
              material={materials['Material.074_23.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_54 as Mesh).geometry}
              material={materials['Material.153']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_55 as Mesh).geometry}
              material={materials['Material.154']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_56 as Mesh).geometry}
              material={materials['Material.074_25.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_57 as Mesh).geometry}
              material={materials['Material.155']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_58 as Mesh).geometry}
              material={materials['Material.156']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_59 as Mesh).geometry}
              material={materials['Material.157']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_60 as Mesh).geometry}
              material={materials['Material.074_26.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_61 as Mesh).geometry}
              material={materials['Material.158']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_62 as Mesh).geometry}
              material={materials['Material.159']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_63 as Mesh).geometry}
              material={materials['Material.074_11.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_64 as Mesh).geometry}
              material={materials['Material.074_17.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_65 as Mesh).geometry}
              material={materials['Material.074_19.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_66 as Mesh).geometry}
              material={materials['Material.074_20.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_67 as Mesh).geometry}
              material={materials['Material.160']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_68 as Mesh).geometry}
              material={materials['Material.161']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_69 as Mesh).geometry}
              material={materials['Material.162']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_70 as Mesh).geometry}
              material={materials['Material.163']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_71 as Mesh).geometry}
              material={materials['Material.074_28.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_72 as Mesh).geometry}
              material={materials['Material.164']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_73 as Mesh).geometry}
              material={materials['Material.074_31.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_74 as Mesh).geometry}
              material={materials['Material.074_3.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_75 as Mesh).geometry}
              material={materials['Material.074_10.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_76 as Mesh).geometry}
              material={materials['Material.074_5.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Plane_Material053_0003_77 as Mesh).geometry}
              material={materials['Material.074_4.003']}
            />
          </group>
          <group
            position={[-143.804, 250.193, -325.724]}
            rotation={[0, 0, Math.PI / 2]}
            scale={2.436}>
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Text_Material046_0003 as Mesh).geometry}
              material={materials['Material.165']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Text_Material046_0003_1 as Mesh).geometry}
              material={materials['Material.127']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Text_Material046_0003_2 as Mesh).geometry}
              material={materials['Material.074_32.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Text_Material046_0003_3 as Mesh).geometry}
              material={materials['Material.074_37.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Text_Material046_0003_4 as Mesh).geometry}
              material={materials['Material.074_35.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Text_Material046_0003_5 as Mesh).geometry}
              material={materials['Material.074_34.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Text_Material046_0003_6 as Mesh).geometry}
              material={materials['Material.074_38.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Text_Material046_0003_7 as Mesh).geometry}
              material={materials['Material.074_39.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Text_Material046_0003_8 as Mesh).geometry}
              material={materials['Material.074_33.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Text_Material046_0003_9 as Mesh ).geometry}
              material={materials['Tasten_2.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Text_Material046_0003_10 as Mesh ).geometry}
              material={materials['Material.074_36.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Text_Material046_0003_11 as Mesh ).geometry}
              material={materials['Material.166']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Text_Material046_0003_12 as Mesh ).geometry}
              material={materials['Material.167']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Text_Material046_0003_13 as Mesh ).geometry}
              material={materials['Material.168']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={(nodes.Text_Material046_0003_14 as Mesh ).geometry}
              material={materials['Material.074_14.003']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.psuback_psuback_0 as Mesh).geometry}
            material={materials['Material.074_13.003']}
            position={[-260.266, 77.97, -352.752]}
            rotation={[0, Math.PI / 2, 0]}
            scale={59.489}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes['rgb-hdd-cover-aorus-v1_rgb-hdd-cover-aorus-v1_0'] as Mesh).geometry}
            material={materials['Material.074_9.003']}
            position={[-93.477, 83.167, -288.796]}
            scale={36.942}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={
              (nodes['test-aorus-m2-souris-aorus-rgb2_test-aorus-m2-souris-aorus-rgb2'] as Mesh).geometry
            }
            material={materials['Material.074_18.003']}
            position={[-115.854, 150.748, -435.223]}
            scale={35.194}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/desktop_pc/EditedComputerglb.glb')
useGLTF.preload('/models/desktop_pc/EditedComputerglb1.glb')
export default CanvasComputer
