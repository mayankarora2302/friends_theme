'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Hearts() {
    const heartsRef = useRef<THREE.Group>(null);
    const heartGeometry = useRef<THREE.ShapeGeometry | null>(null);

    useEffect(() => {
        // Create heart shape
        const heartShape = new THREE.Shape();
        heartShape.moveTo(0, 0);
        heartShape.bezierCurveTo(0, -0.3, -0.6, -0.3, -0.6, 0);
        heartShape.bezierCurveTo(-0.6, 0.3, 0, 0.6, 0, 1);
        heartShape.bezierCurveTo(0, 0.6, 0.6, 0.3, 0.6, 0);
        heartShape.bezierCurveTo(0.6, -0.3, 0, -0.3, 0, 0);

        heartGeometry.current = new THREE.ShapeGeometry(heartShape);
    }, []);

    useFrame((state) => {
        if (heartsRef.current) {
            heartsRef.current.children.forEach((heart, i) => {
                heart.position.y += 0.01;
                heart.rotation.z += 0.01;

                if (heart.position.y > 10) {
                    heart.position.y = -10;
                    heart.position.x = (Math.random() - 0.5) * 20;
                }
            });
        }
    });

    return (
        <group ref={heartsRef}>
            {[...Array(20)].map((_, i) => (
                <mesh
                    key={i}
                    geometry={heartGeometry.current || undefined}
                    position={[
                        (Math.random() - 0.5) * 20,
                        (Math.random() - 0.5) * 20,
                        (Math.random() - 0.5) * 10,
                    ]}
                    scale={0.3}
                >
                    <meshBasicMaterial color="#FF69B4" transparent opacity={0.6} />
                </mesh>
            ))}
        </group>
    );
}

export default function FloatingHearts() {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <Hearts />
            </Canvas>
        </div>
    );
}
