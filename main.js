import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const canvas = document.getElementById("canvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
const light = new THREE.DirectionalLight( 0xFFFFFF , 10);
light.position.set (10, 10, 10);
light.lookAt (0,0,0);
scene.add(light);

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();

loader.setPath('./static/');
loader.load(
  // resource URL
  'scene_inprogress_panel.gltf',
    function ( gltf ) {
        gltf.scene.scale.set( .5, .5, .5 );
        console.log (gltf)
        scene.add( gltf.scene );

      /*gltf.animations; // Array<THREE.AnimationClip>
      gltf.scene; // THREE.Group
      gltf.scenes; // Array<THREE.Group>
      gltf.cameras; // Array<THREE.Camera>
      gltf.asset; // Object
  */
        renderer.render(scene, camera);
  },
  // called while loading is progressing
  function ( xhr ) {

      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

  },
  // called when loading has errors
  function ( error ) {

      console.log( 'An error happened '+ error  );

  }
);


/*
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00, emissive: 0x0000ff, emissiveIntensity: .5 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


document.getElementById('toggleRotate').addEventListener ('click',  toggleRotate);

function setMeshes(e)  {
    e.stopPropagation ()
    e.preventDefault()
    let  xor = canvas.clientWidth / 2;
    let yor =  canvas.clientHeight / 2;
    let x = e.clientX - xor
    let y = e.clientY - yor
    console.log (x, y ,xor , yor)
    const ver = new Float32Array( [
        -1.0, -1.0,  1.0, // v0
         1.0, -1.0,  1.0, // v1
         1.0,  1.0,  1.0, // v2
      
         1.0,  1.0,  1.0, // v3
        -1.0,  1.0,  1.0, // v4
        -1.0, -1.0,  1.0  // v5
      ] );
      
      // itemSize = 3 because there are 3 values (components) per vertex
      geometry.setAttribute( 'position', new THREE.BufferAttribute( ver, 3 ) );

      const mesh = new THREE.Mesh( geometry, material );
      scene.add (mesh)
      /*
      const geometry = new THREE.BufferGeometry();
      
      const vertices = new Float32Array( [
        -1.0, -1.0,  1.0, // v0
         1.0, -1.0,  1.0, // v1
         1.0,  1.0,  1.0, // v2
        -1.0,  1.0,  1.0, // v3
      ] );
      geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
      
      const indices = [
        0, 1, 2,
        2, 3, 0,
      ];
      
      geometry.setIndex( indices );
      geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
      
      const mesh = new THREE.Mesh( geometry, material );
      */
   //canvas.addEventListener ('mouseup', addMeshes);
    //const geo = new THREE.BufferGeometry( x , y, (x + y));
    //const cube = new THREE.Mesh( geo, material );
   // cube.geometry.addGroup (geo.groups)
    //cube.addGroup (geo.groups)
//}
function addMeshes(e)  {
    e.stopPropagation ()
    e.preventDefault()
    let x = e.clientX
    let y = e.clientY
    let  xor = canvas.clientWidth / 2;
    let yor =  canvas.clientHeight / 2;

    const geo = new THREE.BufferGeometry( x, y , x * y );
    cube.geometry.addGroup (geo.groups)
    cube.geometry.setFromPoints (cube.geometry.index)
} 

camera.position.z = 5;

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
let isRotate = false;

function toggleRotate()  {
    if (isRotate) isRotate = false;
    else isRotate = true;
}
//canvas.addEventListener ('mousedown',  setMeshes);

function animate() {
	requestAnimationFrame( animate );
    // if (isRotate) {
    //     cube.rotation.x += 0.01;
    //     cube.rotation.y += 0.01;
    // }
	renderer.render( scene, camera );
}

animate();

