
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshNormalMaterial( );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var n_pressed = false;
var e_pressed = false;
var i_pressed = false;
var space_pressed = false;
const speed = 0.05;

function animate() {
    requestAnimationFrame( animate );
    if (n_pressed) {
        if (space_pressed) {
            cube.rotation.x -= speed;
        } else {
            cube.rotation.x += speed;
        }
    }
    if (e_pressed) {
        if (space_pressed) {
            cube.rotation.y -= speed;
        } else {
            cube.rotation.y += speed;
        }
    }
    if (i_pressed) {
        if (space_pressed) {
            cube.rotation.z -= speed;
        } else {
            cube.rotation.z += speed;
        }
    }
    renderer.render( scene, camera );
}
animate();

document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == '78') {
        n_pressed = true;
    }
    else if (e.keyCode == '69') {
        e_pressed = true;
    }
    else if (e.keyCode == '73') {
        i_pressed = true;
    }
    else if (e.keyCode == '32') {
        space_pressed = true;
    }
};

document.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode == '78') {
        n_pressed = false;
    }
    else if (e.keyCode == '69') {
        e_pressed = false;
    }
    else if (e.keyCode == '73') {
        i_pressed = false;
    }
    else if (e.keyCode == '32') {
        space_pressed = false;
    }
};
