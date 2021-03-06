import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';

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
// const clock = new THREE.Clock();

// Using the gsap library, which has its on "tick"
// We are telling what object we animate, to what location, for what duration and after what delay (optional)
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 }); // make the cube come back

// Animations
const tick = () => {
	// Clock
	// const elapsedTime = clock.getElapsedTime(); // this time is expressed in seconds
	// console.log(elapsedTime);

	// Update object: we make the object move
	// mesh.position.x += 0.01; // slide to the right
	// mesh.rotation.y = elapsedTime; // or rotate per y-axis
	// mesh.rotation.y = elapsedTime * Math.PI * 2; // rotates one revolution per second
	// mesh.position.y = Math.sin(elapsedTime);
	// mesh.position.x = Math.cos(elapsedTime);

	// Update camera: it's the camera that is moving here
	// camera.position.x = Math.sin(elapsedTime);
	// camera.position.y = Math.cos(elapsedTime);
	// camera.lookAt(mesh.position);

	// Render
	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};

tick();
