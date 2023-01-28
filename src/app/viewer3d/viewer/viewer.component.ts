import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from 'three';
const THREE_ADDON = require('three-addons');


@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements AfterViewInit {
  @Input() height : number = 500;
  @Input() width : number = 500;
  @Input() fov : number = 75;
  @Input() cameraPosZ : number = 1000;
  @Input() nearPlane : number = 1;
  @Input() farPlane : number  = 100000;

  @ViewChild('canvas') canvasRef !: ElementRef;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  renderer = new THREE.WebGLRenderer();
  scene !: THREE.Scene;
  camera !: THREE.Camera;
  mesh !: THREE.Mesh;

  debugMesh !: THREE.Mesh;

  light1 = new THREE.AmbientLight(0xffffff, 0.1);
  light2 = new THREE.DirectionalLight(0xffffff, 2);

  // orgbitControl !: any; // Type for three addon not implemented yet

  constructor () {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);

    this.camera = new THREE.PerspectiveCamera(this.fov, this.width/this.height, this.nearPlane, this.farPlane);
    this.camera.position.z = 5;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({color: 0xff0000});
    this.mesh = new THREE.Mesh(geometry, material);

    const debugGeometry = new THREE.SphereGeometry(0.4, 30, 30);
    const debugMaterial = new THREE.MeshPhongMaterial({ color : 0xff00ff });
    this.debugMesh = new THREE.Mesh(debugGeometry, debugMaterial);

    this.debugMesh.position.x = 2;

    this.light2.position.set(-1,2,4)

    this.scene.add(this.mesh);
    this.scene.add(this.debugMesh);
    this.scene.add(this.light1);
    this.scene.add(this.light2);

    // this.orgbitControl = new THREE_ADDON.OrbitControl(this.camera, this.canvas);
    console.log(this.camera);
  }

  private initRendering(){
    this.renderer = new THREE.WebGLRenderer({ canvas : this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }

  ngAfterViewInit() {
    this.initRendering();
    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate())
    this.mesh.rotation.x += 0.01;
    // this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  }

  onMouseMove(event : any){
    // console.log(event);
  }

  onMouseDown(event : any) {
    console.log(event);
  }

  onMouseUp(event : any){
    console.log(event);
  }
}
