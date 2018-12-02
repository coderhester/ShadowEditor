import BaseLoader from './BaseLoader';

/**
 * SEA3DLoader
 * @author tengge / https://github.com/tengge1
 */
function SEA3DLoader() {
    BaseLoader.call(this);
}

SEA3DLoader.prototype = Object.create(BaseLoader.prototype);
SEA3DLoader.prototype.constructor = SEA3DLoader;

SEA3DLoader.prototype.load = function (url, options) {
    return new Promise(resolve => {
        var loader = new THREE.SEA3D({
            autoPlay: true, // Auto play animations
            container: options.scene, // Container to add models
            progressive: true // Progressive download
        });

        loader.onComplete = function () {
            resolve(new THREE.Object3D());
        };

        loader.load(url);
    });
};

export default SEA3DLoader;