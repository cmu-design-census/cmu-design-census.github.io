
			var container, controls, stats;
			var camera, scene, raycaster, renderer;
			var mouse = new THREE.Vector2(), INTERSECTED;;
			var objects = [];
			var colors = [0xffde00, 0xffcc00, 0xff0000, 0x0000ff, 0xff00ff, 0x000000, 0x00cc00, 0x00cccc, 0x00ccff];
			var industries = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"];
// 			init();
// 			animate();

			function init() {

				container = document.getElementById("box2");
				// document.body.appendChild( container );

				var info = document.createElement( 'div' );
				info.style.position = 'absolute';
				info.style.top = '10px';
				info.style.width = '100%';
				info.style.textAlign = 'center';
				info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> - clickable objects';
				container.appendChild( info );

				camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.set( 0, 300, 500 );

				controls = new THREE.TrackballControls( camera );
				controls.rotateSpeed = 1.0;
				controls.zoomSpeed = 1.2;
				controls.panSpeed = 0.8;
				controls.noZoom = false;
				controls.noPan = false;
				controls.staticMoving = true;
				controls.dynamicDampingFactor = 0.3;

				scene = new THREE.Scene();

				var light1 = new THREE.DirectionalLight( 0xffffff, 1 );
				light1.position.set( 1, 1, 1 ).normalize();
				scene.add( light1 );

				var light2 = new THREE.DirectionalLight( 0xffffff, 0.5 );
				light2.position.set( 0, 1, 1 ).normalize();
				scene.add( light2 );

				var light3 = new THREE.DirectionalLight( 0xffffff, 0.5 );
				light3.position.set( -1, 1, 0 ).normalize();
				scene.add( light3 );

				var yy = 0;
				var total = 30;
				var gap = 15;
				var num = 0;
				for ( var i = 0; i < total; i ++ ) {
					var ind = Math.floor(Math.random()*colors.length);
					var r = Math.round(Math.random() * 30)*4;
					if(i%3==0) yy = 0;
					yy += r*.5;
					var geometry = new THREE.BoxBufferGeometry(1,1,1);
					var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: colors[ind]} ) );
					object.id = industries[ind];
					object.position.x = Math.floor(i/3)*gap;
					object.position.y = yy;
					object.position.z = 200;
					object.scale.x = 10;
    				object.scale.y = r;
    				object.scale.z = 10;
					scene.add( object );
					objects.push( object );
					yy += r*.5;	
				}

				for (var i=0; i<objects.length; i++){
					objects[i].translateX(-(total/3)*.5*gap);
				}

				//
				raycaster = new THREE.Raycaster();
				renderer = new THREE.WebGLRenderer();
				renderer.setClearColor( 0xf0f0f0 );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.sortObjects = false;
				container.appendChild(renderer.domElement);
				stats = new Stats();
				container.appendChild( stats.dom );


				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'mousedown', onDocumentMouseDown, false );
				document.addEventListener( 'touchstart', onDocumentTouchStart, false );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function onDocumentTouchStart( event ) {

				event.preventDefault();
				event.clientX = event.touches[0].clientX;
				event.clientY = event.touches[0].clientY;
				onDocumentMouseDown( event );

			}

			function onDocumentMouseMove( event ) {
				event.preventDefault();
				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
			}

			function onDocumentMouseDown( event ) {
				event.preventDefault();
				mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
			}

			//

			function animate() {
				requestAnimationFrame( animate );
				render();
				stats.update();
			}

			var radius = 600;
			var theta = 0;

			function render() {
				theta += 0.02;
				controls.update();
				//camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
				//camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
				//camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
				camera.lookAt( scene.position );

				camera.updateMatrixWorld();
				// find intersections
				raycaster.setFromCamera( mouse, camera );
				var intersects = raycaster.intersectObjects( scene.children );
				if ( intersects.length > 0 ) {
					if ( INTERSECTED != intersects[ 0 ].object ) {
						if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
						INTERSECTED = intersects[ 0 ].object;
						INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
						INTERSECTED.material.emissive.setHex( 0xffffff );
					}
				} else {
					if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
					INTERSECTED = null;
				}

				renderer.render( scene, camera );

			}
