import './style.css';
import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
	width: 800,
	height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// Clock
const clock = new THREE.Clock();

// Animations
const tick = () => {
	// Clock
	const elapsedTime = clock.getElapsedTime(); // this time is expressed in seconds
	// console.log(elapsedTime);

	// Update object: we make the object move
	// mesh.position.x += 0.01; // slide to the right
	// mesh.rotation.y = elapsedTime; // or rotate per y-axis
	// mesh.rotation.y = elapsedTime * Math.PI * 2; // rotates one revolution per second
	// mesh.position.y = Math.sin(elapsedTime);
	// mesh.position.x = Math.cos(elapsedTime);

	// Update camera: it's the camera that is moving here
	camera.position.x = Math.sin(elapsedTime);
	camera.position.y = Math.cos(elapsedTime);
	camera.lookAt(mesh.position);

	// Render
	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};

tick();
