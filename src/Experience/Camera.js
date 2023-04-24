import * as THREE from 'three'
import Experience from './Experience.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Mouse from "./Mouse";

export default class Camera
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.target = new THREE.Vector3(0, 20, 0);

        this.setInstance()
    }

    setInstance()
    {
        this.instance = new THREE.PerspectiveCamera(60, this.sizes.width / this.sizes.height, 0.1, 100)
        this.instance.position.set(0, 21.5, 15)
        this.instance.lookAt(this.target)
        this.scene.add(this.instance)

    }
    resize()
    {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    isObjectInView( object) {
        const frustum = new THREE.Frustum();
        const cameraViewProjectionMatrix = new THREE.Matrix4();

        // Récupère la matrice de projection de la caméra et la combine avec la matrice de transformation de la caméra
        cameraViewProjectionMatrix.multiplyMatrices(this.instance.projectionMatrix, this.instance.matrixWorldInverse);

        // Met à jour le frustum avec la matrice combinée
        frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);

        // Vérifie si l'objet est dans le frustum (champ de vision de la caméra)
        return frustum.intersectsObject(object);
    }


    update()
    {
        this.instance.lookAt(this.target)

        // this.controls.update()
    }
}