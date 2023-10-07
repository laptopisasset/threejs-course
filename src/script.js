import * as THREE from "three";

const scene = new THREE.Scene();

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
