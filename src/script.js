import * as THREE from "three";

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0.7, -0.6, 1);

mesh.scale.x = 2;
mesh.scale.y = 0.5;
mesh.scale.z = 0.5;

mesh.rotateX(Math.PI * 0.25);
mesh.rotation.y = Math.PI * 0.25;

scene.add(mesh);

console.log(mesh.position.length());

const sizes = {
  width: 800,
  height: 600,
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

console.log(mesh.position.distanceTo(camera.position));

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
