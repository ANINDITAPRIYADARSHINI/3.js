import * as THREE from 'three';

// Create a Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F6F4F8');

//Create a Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//Create an Object
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshLambertMaterial({color: '#C9B24C', emissive: '#C9B24C'});

const cube = new THREE.Mesh(geometry, material);

scene.add(cube);


//Create a Light
const light = new THREE.DirectionalLight(0xD4D3D3, 10);
light.position.set(1,1,1);

scene.add(light);


// Create a Renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//Create Animation

function animate(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);