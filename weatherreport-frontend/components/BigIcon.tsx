"use client";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const BigIcon: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			// Initialize Three.js scene here
			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			const renderer = new THREE.WebGLRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			containerRef.current?.appendChild(renderer.domElement);
			camera.position.z = 5;

			// geometry
			const geometry = new THREE.SphereGeometry(2, 32, 32);
            const textureimg= new THREE.TextureLoader().load('textures/TheSun.png');
			const material = new THREE.MeshBasicMaterial({
                map: textureimg,
				//color: 0xff0000, // Couleur de base rouge
				//vertexColors: THREE.FaceColors, // Utilise les couleurs spécifiées pour chaque face
			});

			// Appliquer un dégradé de rouge à orange sur la sphère
			// for (let i = 0; i < geometry.faces.length; i += 2) {
			// 	const color = new THREE.Color();
			// 	const ratio = i / geometry.faces.length;
			// 	color.setRGB(1, 1 - ratio, 0); // Rouge à Orange
			// 	geometry.faces[i].color.copy(color);
			// 	geometry.faces[i + 1].color.copy(color);
			// }

			const sphere = new THREE.Mesh(geometry, material);
			scene.add(sphere);

			camera.position.z = 5;

			const animate = () => {
				requestAnimationFrame(animate);
				sphere.rotation.x += 0.001;
				sphere.rotation.y += 0.01;
				renderer.render(scene, camera);
			};
            
			animate();
		}
	}, []);

	return <div ref={containerRef} />;
};

export default BigIcon;
