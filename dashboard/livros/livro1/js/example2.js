
let camera, scene, renderer;
let start = 20;
let qtd = 20;
let auto = false;
let narracao = [];
var mouseScroll, title;
var clicado = [12];
var mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();

init();





function init() {


    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.set(0, start, 2);


    // create scene
    scene = new THREE.Scene();

    //add sound elements
    var listener = new THREE.AudioListener();
    camera.add(listener);
    var sound = new THREE.Audio(listener);
    var audioLoader = new THREE.AudioLoader();
    audioLoader.load('sounds/soundForest.mp3', function (buffer) {
        sound.setBuffer(buffer);
        sound.setLoop(true);
        sound.setVolume(0.5);
        sound.play();
    });


    // generate some boxes in a column
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(3, 2), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/florest.jpg'), color: 0xffffff }));
    mesh.position.y = start;
    scene.add(mesh);

    title = new THREE.Mesh(new THREE.PlaneGeometry(1.5, .5), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('textos/title.png'), transparent: true }))
    mesh.add(title)

    var chapeuzin = (new THREE.Mesh(new THREE.PlaneGeometry(.2, .3), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/Chapeuzinho.png'), transparent: true })))
    chapeuzin.position.y = start + .4;
    scene.add(chapeuzin);

    var by = new THREE.Mesh(new THREE.PlaneGeometry(.7, .2), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('textos/by.png'), transparent: true }))
    by.position.y = 0.8
    mesh.add(by)

    mouseScroll = new THREE.Mesh(new THREE.PlaneGeometry(.3, .3), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/scrollitem.png'), transparent: true }))
    mouseScroll.position.y = start - .7;
    scene.add(mouseScroll);

    var n1 = (new THREE.Mesh(new THREE.PlaneGeometry(1, .3), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('textos/text1.png'), transparent: true })))
    n1.position.y = start - 1.5;
    scene.add(n1);

    var n2 = (new THREE.Mesh(new THREE.PlaneGeometry(1, .1), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('textos/text2.png'), transparent: true })))
    n2.position.y = start - 2;
    scene.add(n2);

    var balao = new THREE.Mesh(new THREE.PlaneGeometry(2, .8), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/dialogo1.png'), transparent: true }))
    balao.position.y = start - 2.5;
    balao.position.x = -.2;
    scene.add(balao)

    var n3 = (new THREE.Mesh(new THREE.PlaneGeometry(1.4, .3), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('textos/text3.png'), transparent: true })))
    n3.position.x = 0.2
    n3.position.y = 0.1;
    balao.add(n3);

    var n4 = (new THREE.Mesh(new THREE.PlaneGeometry(1.4, .3), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('textos/text4.png'), transparent: true })))
    n4.position.y = start - 3.5;
    scene.add(n4);

    var n5 = (new THREE.Mesh(new THREE.PlaneGeometry(1.4, .3), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('textos/text5.png'), transparent: true })))
    n5.position.y = start - 4;
    scene.add(n5);


    var balao1 = new THREE.Mesh(new THREE.PlaneGeometry(1, .8), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/dialogo1.png'), transparent: true }))
    balao1.position.y = start - 4.8;
    balao1.position.x = -.2;
    scene.add(balao1);

    var n5 = (new THREE.Mesh(new THREE.PlaneGeometry(.7, .1), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('textos/text6.png'), transparent: true })))
    n5.position.x = .1;
    n5.position.y = .1;
    balao1.add(n5);

    var balao2 = new THREE.Mesh(new THREE.PlaneGeometry(1, .8), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/dialogo1.png'), transparent: true }))
    balao2.position.y = start - 5.5;
    balao2.position.x = -.2;
    scene.add(balao2);

    var n6 = (new THREE.Mesh(new THREE.PlaneGeometry(.7, .1), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('textos/text7.png'), transparent: true })))
    n6.position.x = .1;
    n6.position.y = .1;
    balao2.add(n6);



    var n7 = (new THREE.Mesh(new THREE.PlaneGeometry(.7, .1), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('textos/text8.png'), transparent: true })))
    n7.position.x = .1;
    n7.position.y = .1;
    scene.add(n7);


    var n8 = (new THREE.Mesh(new THREE.PlaneGeometry(.8, .1), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('textos/text9.png'), transparent: true })))
    n8.position.y = 0;
    scene.add(n8);

    var n9 = (new THREE.Mesh(new THREE.PlaneGeometry(.8, .1), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('textos/text10.png'), transparent: true })))
    n9.position.y = start - 7.5;
    scene.add(n9);

    for (let i = 0; i <= 10; i++) {

        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(.5, .5), new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/loli2.png'), transparent: true }));
        mesh.position.y = i;
        scene.add(mesh);


    }


    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    var a = document.body.appendChild(renderer.domElement);
    renderer.setClearColor(0xacebc1);










    //variaveis para auxiliar animaç~eos
    var yoyo = true;
    var initialY = chapeuzin.position.y;
    var jump = true;
    var sobe = true;


    /*
     * Função de animação
     */
    function animate() {


        // console.log(chapeuzin.position.y, initialY);
        jumpanimation();
        scrollanimation();

        render();
        requestAnimationFrame(animate);
        renderer.render(scene, camera);

    }
    setInterval(function () { jump = true }, 2000);

    function jumpanimation() {

        if (sobe && jump) {
            chapeuzin.position.y += 0.008;
            if (chapeuzin.position.y >= 20.5) sobe = false;
        } else if (!sobe && jump) {
            chapeuzin.position.y -= 0.008;
            if (chapeuzin.position.y <= initialY) {
                jump = false;
                sobe = true;
            }
        }
    }

    function scrollanimation() {
        // efeito yoyo
        if (yoyo) {
            mouseScroll.position.y -= 0.001;
        } else {
            mouseScroll.position.y += 0.001;
        }
        //periodo de animação aberto 19.20 - 19.30, animando mouse scroll
        if (mouseScroll.position.y <= 19.20) {
            yoyo = false
        }
        if (mouseScroll.position.y >= 19.30) {
            yoyo = true;
        }
    }
    animate();

    window.addEventListener('wheel', onMouseWheel, false);
    window.addEventListener('resize', onWindowResize, false);
    window.addEventListener('click', onMouseMove, false);
}



function onMouseMove(event) {

    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

}
function render() {
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(scene.children);
    
    for (var i = 0; i < intersects.length; i++) {

        console.log(intersects[i].object.id);
        if (intersects[i].object.id == 14 && !(intersects[i].object.id in clicado)) {
            clicado.push(intersects[i].object.id);
            alert(1);
        }else{
            break;
        }

    }
}



var inter;

function stopscroll() {
    clearInterval(inter)
    document.getElementById('but').style.backgroundColor = "red";
}

function initscroll() {
    camera.position.y -= 0.01;
    if (camera.position.y <= 0) {
        stopscroll();
    }
}

function autoscroll() {
    // console.log("Click", auto);
    if (auto == true) {
        auto = false;
        stopscroll();
    } else {
        auto = true;
        inter = setInterval(initscroll, 100);
        document.getElementById('but').style.backgroundColor = "green";
    }

}
function onMouseWheel(event) {
    var firefox = typeof InstallTrigger !== 'undefined';
    event.preventDefault();
    if (firefox) {
        console.log("Mozilla motion");
        camera.position.y -= event.deltaY * 0.02;
    } else {
        console.log("Chrome motion");
        camera.position.y -= event.deltaY * 0.0002;
    }

    console.log(camera.position.y);
    // prevent scrolling beyond a min/max value
    camera.position.clampScalar(0, qtd);

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}


