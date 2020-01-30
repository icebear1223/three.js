const common = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    //设置绘制对象，基于webGL的渲染器，还有基于canvas和svg等等
    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xeeeeee, 1.0));
    renderer.setSize(window.innerWidth, window.innerHeight);

    //设置平面
    //设置平面宽高和平面的宽高段数，宽高段数可以使平面更加精细，具体怎么调不清楚
    const planeGeometry = new THREE.PlaneGeometry(70, 50, 1, 1);
    //设置平面材质，这里只设置了颜色
    const planeMeterial = new THREE.MeshLambertMaterial({ color: 0xcccccc });
    //创建平面
    const plane = new THREE.Mesh(planeGeometry, planeMeterial);

    //设置平面的旋转角度和定位
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 0;
    //打开地面阴影
    plane.receiveShadow = true;
    //添加平面
    scene.add(plane);

    return {
        scene,
        renderer,
        plane,
        camera
    }
}