
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( 1, 16, 16);
var map = new THREE.TextureLoader().load( './assets/markcastle/uvmap.png' );
map.wrapS = map.wrapT = THREE.RepeatWrapping;
map.anisotropy = 16;
var material = new THREE.MeshPhongMaterial( { map: map, side: THREE.DoubleSide } );
// var material = new THREE.MeshNormalMaterial( );
var light = new THREE.AmbientLight( 0xffffff );
scene.add( light );

var geom = new THREE.Mesh( geometry, material );
scene.add( geom );
camera.position.z = 5;

var n_pressed = false;
var e_pressed = false;
var i_pressed = false;
var r_pressed = false;
var space_pressed = false;
const speed = 0.05;

function animate() {
    requestAnimationFrame( animate );
    var x = 0;
    var y = 0;
    var z = 0;
    var s = 0;
    if (n_pressed) { x += 1; s += 1; }
    if (e_pressed) { y += 1; s += 1; }
    if (i_pressed) { z += 1; s += 1; }
    q = new THREE.Quaternion(
        x,
        y,
        z,
        Math.sqrt(s) * speed/2).normalize();
    if (space_pressed) {
        geom.applyQuaternion(q.conjugate());
    } else {
        geom.applyQuaternion(q);
    }
    geom.applyQuaternion(q);
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
    else if (e.keyCode == '82') {
        r_pressed = true;
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
