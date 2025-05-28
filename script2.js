import * as THREE from 'three';
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const canvas = document.getElementById('canvas');

//Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F6F4F8');

//create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//create two objects
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial({color: '#464585', emissive: '#464585'});

const donught = new THREE.Mesh(geometry, material);

const BoxGeometry = new THREE.BoxGeometry(2,0.1,2);//w,h,d
const BoxMaterial = new THREE.MeshLambertMaterial({color: '#C9B24C', emissive: '#C9B24C'});

const box = new THREE.Mesh(BoxGeometry, BoxMaterial);
box.position.y = -1.5;


scene.add(donught);
scene.add(box);

//create a light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1,1,1);

scene.add(light);

//create a renderer
const renderer = new THREE.WebGLRenderer({canvas});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio); // it is imp. for mobile-devices



//create an orbitControl
const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true; //make controls smoother
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;


//create animation
function animate() {
    requestAnimationFrame(animate);
    
    donught.rotation.x +=0.01;
    donught.rotation.y +=0.01;

    box.rotation.y +=0.005;
   

    

    controls.update();
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);