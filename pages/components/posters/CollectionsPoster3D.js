import React, { Component } from "react";
import { canUseDOM } from "../utils/Util";
class CollectionsPoster3D extends Component {
  displayName = "CollectionsPoster3D";
  canUseDOM = canUseDOM();
  initCamera = () => {
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    this.camera.position.set(5, 4, 7);
  };
  loadMesh = mesh => {
    const geometry = mesh.scene;
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    console.log(geometry);
    this.scene.add(geometry);
  };
  initRenderer = () => {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(600,400);
  };
  initScene = () => {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.loader = new THREE.ColladaLoader();
    this.loader.load("/static/obj/designChair.dae", this.loadMesh);

    let directionLight = new THREE.DirectionalLight(0xffffff, 0.2);
    directionLight.position.set(1, 1, 0).normalize();
    this.scene.add(directionLight);

    let ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);
  };
  initControls = () => {
    this.controls = new THREE.OrbitControls(this.camera);
  };
  initTREE = () => {
    if (!this.canUseDOM) return;
    this.initCamera();
    this.initRenderer();
    this.initScene();
    this.initControls();
    const { scene, controls, renderer } = this;
    this.animate();
    controls.update();
    let target = document.querySelector("#renderer");
    target.appendChild(renderer.domElement);
  };

  animate = () => {
    requestAnimationFrame(this.animate);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };
  componentDidMount = () => {
    if (!this.canUseDOM) return;
    this.initTREE();
  };
  render = () => {
    return (
      <div id="renderer">
        <style global jsx>{`
          #renderer {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          canvas {
            border:1px solid #ccc;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  };
}

export default CollectionsPoster3D;
