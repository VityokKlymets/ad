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
    this.camera.position.set(4, 7, 10);
  };
  loadMesh = mesh => {
    const object = mesh.scene;
    this.scene.add(object);
  };
  initRenderer = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setSize(windowWidth, windowHeight);
  };
  initScene = () => {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);
    this.loader = new THREE.ColladaLoader();
    this.loader.load("/static/obj/designChair.dae", this.loadMesh);

    let ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);

    let spotLight = new THREE.SpotLight(0xffffff);
    this.scene.add(spotLight);

    let light = new THREE.DirectionalLight(0xffffff, 1, 100);
    this.scene.add(light);

    let gridHelper = new THREE.GridHelper(10, 20);
    this.scene.add(gridHelper);
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
      <div>
        <div id="renderer" />
        <style jsx global>{`
          canvas {
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  };
}

export default CollectionsPoster3D;
