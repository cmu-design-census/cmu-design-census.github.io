var blocks = new Array(85);
    for (var i = 0; i < 85; i++) {
      blocks[i] = new Array();
    }

  var materials = [
    new THREE.TextureLoader().load( 'textures/techTexture.png' ),
    new THREE.TextureLoader().load( 'textures/agencyTexture.png' ),
    new THREE.TextureLoader().load( 'textures/manufacturingTexture.png' ),
    new THREE.TextureLoader().load( 'textures/retailTexture.png' ),
    new THREE.TextureLoader().load( 'textures/educationTexture.png' ),
    new THREE.TextureLoader().load( 'textures/consultingTexture.png' )
  ];

  var techTexture =  new THREE.MeshStandardMaterial( { color: "#0065fd" } );
  // var techTexture = new THREE.MultiMaterial( materials );

  var agencyTexture = new THREE.MeshStandardMaterial( { color: "#f5a01f" } );
  var manufacturingTexture = new THREE.MeshStandardMaterial( { color: "#df7a70" } );
  var retailTexture = new THREE.MeshStandardMaterial( { color: "#342e3d" } );
  var educationTexture = new THREE.MeshStandardMaterial( { color: "#895a09" } );
  var consultingTexture = new THREE.MeshStandardMaterial( { color: "#a7bed0" } );
  var printTexture = new THREE.MeshStandardMaterial( { color: "#4a2c7a" } );

  var rotate = -.25;
  var zoom = 1.5;
  var is2D = false;
  var alumni = [];

  var yearGrad = [1960,1961,1962,1965,1966,1967,1968,1969,1972,1973,1974,1974,1977,1977,1977,1978,1979,1983,1984,1985,1986,1988,1989,1990,1991,1992,1994,1994,1994,1995,1996,1997,1997,1997,1997,1998,1998,1999,1999,1999,2000,2001,2002,2002,2003,2003,2004,2004,2004,2004,2004,2005,2006,2006,2006,2007,2007,2008,2008,20092009,2009,2009,2010,2010,2010,2010,2011,2011,2011,2012,2012,2012,2013,2013,2013,2014,2014,2014,2014,2014,2014,2014,2015,2015,2015];
  var gradStatus = ["Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Graduate", "Undergraduate",  "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate","Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate",  "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Graduate",  "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Graduate", "Graduate", "Undergraduate", "Undergraduate", "Graduate", "Undergraduate", "Undergraduate", "Undergraduate", "Graduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Graduate", "Graduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Graduate", "Undergraduate", "Undergraduate", "Undergraduate", "Graduate"];
  var positionNum = [7,5,6,10,15,6,4,9,1,4,7,14,2,4,9,5,5,8,6,5,6,4,4,5,5,6,8,4,5,18,5,3,9,6,4,7,7,20,7,3,6,8,4,3,20,6,3,5,13,3,3,4,2,3,3,5,5,3,3,2,4,4,2,3,3,2,4,1,3,2,3,2,3,2,1,2,1,1,1,4,2,2,3,1,1,1];
   
  var currentJobName = ["Senior Designer, Princeton University Press", "Retired IBM", "Freelance design studio", "Retired", "Self employed", "Self employed", "Marc Rosen Associates", "The Corporate Design Group", "Self employed", "amNEW YORK", "Screenwriter", "President Patti Ettinger Fine Arts", "Warwick Valley Central School District", "Creative Director", "Women in Aviation International", "Children At Play", "Crystal McKenzie", "Freelance Graphic Designer", "The Perfect Cake Inc.", "Eight and a Half", "Self employed", "SGSco / Pepsi Design Lead", "Principal & Design Director, Gensler", "Partner, emphasis design, inc.", "Watson", "Oracle", "Creative Director/Experiential Graphic Design, VAKOTA", "Owner", "Kern Design", "REFASHIOND ", "VP design ", "Morgan Stanley", "Freelance UX & Research", "Coty Inc.", "Kickdrum", "Client Portfolio Manager", "LVCK, LLC", "Freelance Creative Director at TandemSeven", "J&J Design", "Commercial Type", "J C Penney ", "Whitney Museum of American Art", "Senior Lighting Designer ", "Louis Vuitton", "Disarm Studio", "Makr and Staples", "Freelance/Consultant", "Cake and Arrow", "Design manager", "Hieronymus", "The Patient Revolution", "Product Ideation Director", "CRJA-IBI Group", "SKINNY VINNY", "Ryecatcher education ", "Blue State Digital", "1stdibs", "Huge Inc", "Paper Fashion LLC ", "R/GA", "Facebook", "NBCUniversal", "Pentagram", "Marvel Entertainment", "Service Design Lead", "Smart Design", "Self-employed", "Broadway Cares/Equity Fights AIDS", "Spotify", "Intrepid Pursuits", "WeddingWire", "Designer at Blue State Digital", "Thumbtack", "Athenahealth", "HarperCollins Publishers", "La Lettera Calligraphy NYC", "OnSIP", "SapientRazorfish", "Cosential", "Industrial designer", "ASAPP (an AI startup)", "iOS developer", "Moment", "Lifesize", "IBM", "Senior designer, Mckinsey & Company"];
  var currentJobYrs = [33,11,8,44,0,15,28,15,21,4,30,10,7,5,18,6,17,34,21,6,15,16,20,20,6,12,3,13,14,2,11,6,8,9,3,15,3,6,4,9,1,5,3,5,2,6,7,2,1,6,2,9,8,10,3,3,3,3,6,5,4,2,5,5,2,3,1,5,1,2,1,4,1,2,4,1,3,3,3,2,1,1,2,1,2,2];
   var currentJobIndustry = ["Print", "Manufacturing", "Print", "Education", "Consulting", "Agency", "Cosmetic Packaging", "Agency", "Print", "Print", "Entertainment", "Fine Art", "Education", "Agency", "Nonprofit", "Education", "Agency", "Print", "Food Entertainment", "Entertainment", "Education", "Packaging graphics", "Architecture & Interiors", "Consulting", "Nonprofit", "Tech", "Cultural Organizations / Theaters", "Agency", "Agency", "Tech", "Manufacturing", "Finance", "Consulting", "Beauty", "Tech", "Finance", "Consulting", "Consulting", "Healthcare", "Branding", "Retail", "Nonprofit", "Consulting", "Retail", "Agency", "Tech", "Finance", "Agency", "Healthcare", "Agency", "Nonprofit", "Healthcare", "Landscape Architecture", "Retail", "Tech", "Agency", "Online Marketplace ", "Agency", "Artist", "Agency", "Tech", "Agency", "Consulting", "Print", "Consulting", "Design Consultancy", "Consulting", "Nonprofit", "Tech", "Tech", "Tech", "Agency", "Tech", "Healthcare", "Print", "Print", "Business", "Agency", "Tech", "Tech", "Tech", "Tech", "Consulting", "Tech", "Tech", "Consulting"];
  var currentJobAlignment = [4,4,4,4,5,5,5,5,5,4,3,5,3,4,4,2,5,5,5,5,5,4,5,4,5,3,4,5,5,5,3,3,3,3,5,4,5,3,5,5,1,4,4,4,3,3,3,4,4,5,5,4,5,5,5,4,4,4,5,3,4,5,5,2,3,4,5,3,4,5,3,5,5,3,4,5,2,3,3,4,4,5,5,4,4,4];
  var currentJobReason = ["Product", "Designer", "", "Method", "", "", "", "", "", "", "Method", "", "", "Method", "Method", "Designer", "", "Designer", "", "", "", "Method", "", "", "", "", "", "Product", "", "", "Method", "Designer", "Product", "Method", "", "", "", "Product", "Designer", "", "Method", "Designer", "Method", "", "Product", "Designer", "Method", "Product", "", "", "", "", "", "Designer", "", "Product", "Method", "Product", "", "Method", "", "", "", "Method", "Designer", "", "", "Product", "Product", "", "Method", "", "", "Designer", "Product", "", "Method", "Product", "Method", "", "", "Method", "Product", "", "Product", "The design produced"];
  var currentJobWhy = ["", "no systems thinking", "not enought iteration", "not enought iteration", "for the environment", "", "no systems thinking", "not enought iteration", "not enought iteration", "for the environment","not enought iteration", "for the environment"];

  var nextJobName = ["Design Studio", "Pitney Bowes", "Forbes custom publishing", "University of Bridgeport", "", "Siren Design", "Elizabet Arden", "Bozell Worldwide", "freelance book designer", "The Record newspaper", "Nonprofit", "Advertising", "National Technical Institute for the Deaf (NTID)", "HNW", "Flying Magazine", "Artist Party Designs", "Corning Incorporated", "Plandome Paperie", "Cable Marketing", "Number Seventeen", "Juno online", "Converter Scan", "Fitch", "212 Associates", "BodyMedia", "Telcordia", "Gensler", "", "North Castle Partners", "LMH Consulting", "VP Design", "Euro", "LDS", "Head Start Preschool", "", "", "Two Twelve", "Sein Analytics", "Siegel+Gale", "Font Bureau", "Sears holdings", "New York Times", "One Lux Studio", "Martha Stewart Omnimedia", "Freelance", "Happy", "SchoolNet", "Martha Stewart", "Health insurance company", "Thinkso Creative", "Freelance", "frog Design", "Cubellis", "Holstee", "College board", "Hovard Design", "Adaptly", "Ammunition Group", "Reebok HQ", "Electronic Ink", "Hot Studio", "MediaVest", "Target", "New York Magazine", "R/GA", "frog", "XO Group", "local newspaper", "UX Designer at Warby Parker", "Big Duck", "O3 World", "Katie McGinty for Senate", "YouTube", "IBM", "", "Niche", "", "", "", "Makerbot", "IBM", "", "SapientNitro", "Fisher Price", "", "TSA/WSBrand"];
  var nextJobYrs = [1,17,12,10,0,4,12,5,29,22,35,15,11,3,6,7,18,3,3,18,3,7,8,3,10,4,2,7,3,5,2,5,3,5,2,2,9,15,5,2,9,5,4,3,10,1,3,7,1,2,5,7,3,2,6,2,2,1,4,2,2,2,3,2,5,4,3,2,2,3,4,2,3,3,0,2,0,0,0,1,2,0,2,1,0,2];
  var nextJobIndustry = ["Agency", "Business", "Print", "Education", "", "Agency", "Cosmetics", "Agency", "Print", "Print", "Nonprofit", "Marketing", "Education", "Agency", "Print", "Business", "Manufacturing", "Print", "Agency", "Entertainment", "Tech", "Packaging", "Agency", "Consulting", "Manufacturing", "Tech", "Lifestyle", "Agency", "Agency", "Consulting", "Manufacturing", "Agency", "Consulting", "Education", "Consulting", "Agency", "Consulting", "Agency", "Consulting", "Branding", "Retail", "Print", "Consulting", "Consulting", "Agency", "Tech", "Education", "Print", "Healthcare", "Agency", "Healthcare", "Agency", "Architecture", "Retail", "Education", "Agency", "Tech", "Agency", "Footwear & Apparel Design", "Consulting", "Agency", "Agency", "Retail", "Print", "Agency", "Consulting", "Media", "Print", "Tech", "Nonprofit", "Agency", "Government", "Tech", "Tech", "", "Tech", "", "", "", "Tech", "Consulting", "", "Agency", "Toys", "", "Consulting"];
  var nextJobAlignment = [1,4,4,5,0,5,5,2,4,4,1,5,4,4,4,5,4,3,1,5,1,5,3,4,4,1,3,4,3,4,2,4,3,4,4,5,4,4,3,3,2,4,4,4,3,5,0,3,1,3,4,5,3,3,3,4,4,5,3,5,3,4,4,3,3,4,3,2,4,2,5,3,3,2,0,4,0,0,0,2,3,0,4,4,0,3];
  var nextJobReason = ["Product", "Designer", "", "", "", "", "", "Product", "", "", "Product", "", "", "Designer", "Product", "Designer", "Designer", "Designer", "Product", "", "Method", "Method", "Method", "Method", "", "Method", "Method", "Product", "Method", "Product", "Method", "Product", "Method", "", "", "", "Method", "Product", "Method", "Method", "Product", "", "Method", "Product", "Product", "", "Method", "Method", "Method", "Product", "", "", "Product", "Method", "Method", "Designer", "Designer", "", "Product", "Product", "Method", "Method", "Method", "Designer", "Method", "", "Method", "Method", "Method", "Product", "", "Product", "Product", "Designer", "", "Product", "", "", "", "Product", "Method", "", "Designer", "", "", "Method"];

  var nextJobWhy = ["", "No managerial leverage", "", "", "", "", "", "", "", "", "", "", "", "Amount of collaboration", "", "Degree of creative freedom", "Amount of collaboration", "Degree of creative freedom", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Degree of interaction with clients", "Process of ideation", "", "", "", "", "", "", "Degree of creative freedom, Amount of collaboration, How work is executed", "", "", "", "", "", "", "", "", "", "Degree of creative freedom, How work is executed", "", "", "", "", "", "", "", "", "Amount of collaboration, How work is executed", "", "", ""];

  var lastJobName = ["Main Street Press", "GTE Sylvania", "Art director at Ladies home journal", "Free lance / part time teaching", "", "health care agency", "Revlon", "Inc Design", "self employed book design/editing/production", "The Houston Post", "Record Industry and Publicity", "Publishing", "", "DRAFTFCB", "Lord Geller Federico Einstein", "Freelance medical illustrator", "Smithsonian Institution" , "", "Clothing Manufacturer/Sales Promotion and Marketing Manager", "VH1, MTV Networks", "Lincoln center", "Kirchhoff Woglberg", "", "Anthony Russell & Associates", "Sandbox", "Central Record Publications", "Russell Design", "Design agency", "Alexander Isley", "New York Fashion Tech Lab", "Similar position", "Christopher Johnson & Associates", "Virage", "WL2 Inc. (small agency)", "self employed", "Designer", "Freelance", "McCann", "Martha Stewart", "MetaDesign", "Regatta", "Heavy Meta, Freelance Designer", "Focus Products Group", "Gap Inc", "", "Callaway Digital Arts", "TD Ameritrade", "Carpenter Group", "Digital agency", "Wall to Wall Studios", "Mayo Clinic", "Maurice Villency", "", "Pollen Design", "Siegel and gale", "The History Factory", "Lead Designer at Hotlist.com", "Zodiac Aerospace", "Paper Fashion LLC", "", "J&J Global Design Headquarters", "Estée Lauder", "", "XO Group Inc", "", "Washington University", "R/GA", "", "Interaction Designer at R/GA", "", "BrightLine", "Hagopian Ink", "CRM Startup", "","","","","","","","","","", "Industrial Design Intern, Thales Avionics" , "", "Material Connexion" ];

  var lastJobYrs = [8,11,10,0,0,1,6,1,29,7,35,5,0,7,5,10,7,0,5,6,5,2,0,2,2,5,2,3,3,1,4,7,3,3,2,2,2,1,4,1,2,1,4,2,0,2,3,3,1,3,7,2,0,1,1,4,2,4,6,0,1,2,0,4,0,3,2,0,4,0,2,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1];
  var lastJobIndustry = ["Print", "Entertainment", "Print", "medical research equipment", "", "Agency", "Cosmetics", "Agency", "Print", "Print", "Entertainment", "Print", "", "Agency", "Agency", "Print", "Government", "", "Manufacturing", "Entertainment", "non- profit performing arts", "Education", "", "Consulting", "Consulting", "Newspaper / Advertising", "Education", "Agency", "Agency", "Tech", "Manufacturing", "Print", "Tech", "Agency", "Consulting", "Agency", "Consulting", "Agency", "Print", "Consulting", "Manufacturing", "Studio", "Manufacturing", "Retail", "", "Tech", "Finance", "Agency", "Agency", "Agency", "Healthcare", "Retail", "", "Consulting", "Agency", "Agency", "Tech", "Transportation", "Artist", "", "Healthcare", "Retail", "", "Tech", "", "Education", "Agency", "", "Agency", "", "Tech", "Agency", "Tech", "", "", "", "", "", "", "", "", "", "", "Aerospace", "", "Consulting"];
  var lastJobAlignment = [3,4,4,0,0,2,5,5,4,4,4,3,0,4,4,5,5,0,2,3,5,4,0,3,4,2,4,3,5,4,5,5,4,4,5,5,4,3,3,3,2,3,4,1,0,3,3,3,4,4,4,3,0,3,5,3,3,3,5,0,4,3,0,4,0,0,4,0,3,0,2,4,3,0,0,0,0,0,0,0,0,0,0,3,0,1];
  var lastJobReason = ["Product", "", "Product", "", "", "Product", "", "Product", "", "", "", ""];
  var lastJobWhy = ["to better the product", "", "to better the product", "", "", "to better the product", "", "to better the product", "", "", "", ""];



  buildAlumni (yearGrad, gradStatus, positionNum, currentJobName, currentJobYrs, currentJobIndustry, currentJobAlignment, currentJobReason, currentJobWhy, nextJobName, nextJobYrs, nextJobIndustry, nextJobAlignment, nextJobReason, nextJobWhy, lastJobName, lastJobYrs, lastJobIndustry, lastJobAlignment, lastJobReason, lastJobWhy); 
  var manager = new THREE.LoadingManager();
  var filterShow = 1;
  var filter = new Filter("x", 99, "x", 99, "x", "x");

var container, stats;
var camera, scene, raycaster, renderer;
var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 500, theta = 0;
var frustumSize = 1000;


function init() {
container = document.getElementById("box2");
// document.body.appendChild( container );
var info = document.createElement( 'div' );
info.style.position = 'absolute';
info.style.top = '10px';
info.style.width = '80%';
info.style.textAlign = 'right';
info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> webgl - interactive cubes';
// container.appendChild( info );
var aspect = window.innerWidth / window.innerHeight;


camera = new THREE.OrthographicCamera( window.innerWidth / -zoom, window.innerWidth / zoom, window.innerHeight / zoom, window.innerHeight / - zoom, - 1000, 3000 );
camera.position.x = 200;
camera.position.y = 200;

scene = new THREE.Scene();
lightsOn();

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
window.addEventListener( 'resize', onWindowResize, false );

buildFirst();

}

function lightsOn() {
  var light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( 10, 10, 10 ).normalize();
  scene.add( light );

  var light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( -10, 10, -10 ).normalize();
  scene.add( light );

  var ambientlight = new THREE.AmbientLight( 0x808080 ); // soft white light
  scene.add( ambientlight );
}

manager.onProgress = function ( item, loaded, total ) {
  progressBar.style.width = (loaded / total * 100) + '%';
};

function buildFirst() {
 console.log(is2D); 
var pos2D =-1;

for (var x=0; x<alumni.length; x++) {

filterShow = 0;
if(filter.name === "all"){ filterShow = 1; }

var tower = [];
var lastYr = 0;
var nextYr = 0;
var curYr = alumni[x].currentJob.yrs;
var boxNum = 0;

var lastPos = "";
var nextPos = ""; 
var curPos = "";    

if (alumni[x].currentJob.industry === filter.industry) {filterShow = 1; }
else if (alumni[x].currentJob.alignment === 1) {filterShow = 1;}

if (alumni[x].positionNum > 1) {
  if (alumni[x].nextJob.industry === filter.industry) {filterShow = 1; }
  else if (alumni[x].nextJob.alignment === 1) {filterShow = 1;}
  }

if (alumni[x].positionNum > 2) {
  if (alumni[x].lastJob.industry === filter.industry) {filterShow = 1;}
  else if (alumni[x].lastJob.alignment === 1) {filterShow = 1;}
 }

if(filterShow ===1){pos2D++;}

//BUILD LAST POSITION NOW --------------------------------------------------- 
if (alumni[x].positionNum > 2) { 
    lastYr = alumni[x].lastJob.yrs;
    lastPos = alumni[x].lastJob.industry;

    boxNum = lastYr;
    tower.push(alumni[x].lastJob.industry);
   
    if(is2D === false) { build(boxNum, x, 0, alumni[x].lastJob.industry, filterShow); }
    else if (is2D === true && filterShow === 1) { build(boxNum, pos2D, 0, alumni[x].lastJob.industry, filterShow); }

  }

//BUILD NEXT POSITION NOW --------------------------------------------------- 
 if (alumni[x].positionNum > 1) {
    //filter whole NEXT position code 
   nextYr = alumni[x].nextJob.yrs;
   nextPos = alumni[x].nextJob.industry;
   boxNum = nextYr;    
   tower.push(alumni[x].nextJob.industry);

  if(is2D === false) { build(boxNum, x, lastYr, alumni[x].nextJob.industry, filterShow); }
  else if (is2D === true && filterShow === 1) { build(boxNum, pos2D, lastYr, alumni[x].nextJob.industry, filterShow); }
  }

    //BUILD NEXT POSITION NOW ---------------------------------------------------
if (alumni[x].positionNum >= 1) {
  boxNum = curYr;
  curPos = alumni[x].currentJob.industry;
  tower.push( alumni[x].currentJob.industry);
  
  if(is2D === false) { build(boxNum, x, (lastYr + nextYr), alumni[x].currentJob.industry, filterShow); }
  else if (is2D === true && filterShow === 1) { build(boxNum, pos2D, (lastYr + nextYr), alumni[x].currentJob.industry, filterShow); }
   
  }
  blocks[x] = tower;
 } //end alumniForLoop
}


function build(boxNum, moveOver, moveUp, theIndustry, filterOption){
  var color;

  if(theIndustry === "Tech"){ color = techTexture; }
  else if(theIndustry === "Agency") { color = agencyTexture; }
  else if(theIndustry === "Consulting") { color = consultingTexture; }
  else if(theIndustry === "Retail") { color = retailTexture; }
  else if(theIndustry === "Manufacturing") { color = manufacturingTexture; }
  else if(theIndustry === "Education") { color = educationTexture; }
  else if(theIndustry === "Print") { color = printTexture; }
  else { color =  new THREE.MeshStandardMaterial( { color: "#ffffff" } ); }

  currentPosition = [];
  for (x=0; x<boxNum; x++) {
  var geometry = new THREE.BoxGeometry( 20, 20, 20 ); 
   // var material = new THREE.MeshBasicMaterial( { map: color } );

  var object = new THREE.Mesh( geometry, color );

  object.position.x = ((moveOver % 10) *40);
  object.position.y = (moveUp*21)+(x*21);
  object.position.z = ( Math.floor(moveOver/10) *40);
  currentPosition.push(object);

    if (is2D) {
      object.position.x = moveOver*40;
      object.position.y = (moveUp*21)+(x*21);
      object.position.z = 0;
    }

  if (filterOption === 1) {
  object.material = color;
  renderer.render( scene, camera );
  }

  else if (filterOption === 0) { 
  var transparentMesh = new THREE.MeshStandardMaterial( {
  opacity: .10,
  transparent: true } );

  object.material = transparentMesh;
  renderer.render( scene, camera );
  } 

   if(is2D === false) {scene.add( object );}
   if(is2D === true && filterOption === 1) {scene.add( object );}
  } //end box creation loop
 }


function onWindowResize() {
var aspect = window.innerWidth / window.innerHeight;
camera.left   = - frustumSize * aspect / 2;
camera.right  =   frustumSize * aspect / 2;
camera.top    =   frustumSize / 2;
camera.bottom = - frustumSize / 2;
camera.updateProjectionMatrix();
renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
event.preventDefault();
mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function animate() {
    requestAnimationFrame( animate );
    render();
    // filterIndustry("Manufacturing");
    stats.update();
}


function render() {

if (is2D === false) {

  var timer = Date.now() * 0.0001;
  // var rotate = .25;
  camera.position.x = Math.cos( timer *Math.PI ) * 200;
  camera.position.z = Math.sin( timer *Math.PI ) * 200; 
  camera.position.y = 200; 
}

if( is2D === true) {

  if (Math.round(camera.position.z) < 200) { camera.position.z += 1;}

  if (Math.round(camera.position.x) > 0) { camera.position.x -= 1;}
  if (Math.round(camera.position.x) < 0) { camera.position.x += 1;}

  if (Math.round(camera.position.y) > 0) { camera.position.y -= 1;}
  renderer.render( scene, camera );
  }

camera.left = window.innerWidth / -zoom;  
camera.right = window.innerWidth / zoom;
camera.top = window.innerHeight / zoom;
camera.bottom =  window.innerHeight / - zoom;
camera.updateProjectionMatrix();

camera.lookAt( scene.position );
renderer.render( scene, camera );

}

// rotation
var alumni = [];


function setup() {
   createCanvas(windowWidth, windowHeight, WEBGL);
   // camera(0,mouseY,0, -height/2, 0.1, 100);

   buildAlumni (yearGrad, gradStatus, positionNum, currentJobName, currentJobYrs, currentJobIndustry, currentJobAlignment, currentJobReason, currentJobWhy, nextJobName, nextJobYrs, nextJobIndustry, nextJobAlignment, nextJobReason, nextJobWhy, lastJobName, lastJobYrs, lastJobIndustry, lastJobAlignment, lastJobReason, lastJobWhy); 
   var filter = new Filter("Apple", 5, "Tech", 3, "Product", "to better the product");

}


function buildAlumni(gradyrList, gradstatusList, positionnumList, onejobNamelist, oneyrslist, oneindustrylist, onealignmentlist, onereasonlist, onewhylist, twojobNamelist, twoyrslist, twoindustrylist, twoalignmentlist, tworeasonlist, twowhylist, threejobNamelist, threeyrslist, threeindustrylist, threealignmentlist, threereasonlist, threewhylist) 
{
    for (var i=0; i<85; i++)
    {
      var newResponse = new Person(); //create a new alumni object
      
      newResponse.buildBasic(gradyrList[i], gradstatusList[i], positionnumList[i]); 
      //build this alumni with build funciton of alumni object
      newResponse.buildJobs(onejobNamelist[i], oneyrslist[i], oneindustrylist[i], onealignmentlist[i], onereasonlist[i], onewhylist[i], twojobNamelist[i], twoyrslist[i], twoindustrylist[i], twoalignmentlist[i], tworeasonlist[i], twowhylist[i], threejobNamelist[i], threeyrslist[i], threeindustrylist[i], threealignmentlist[i], threereasonlist[i], threewhylist[i]);
      alumni.push(newResponse);
      //add this new alumni object to alumni array
    }
}


function Job(jobName, yrs, industry, alignment, reason, why) {
  this.myName = jobName;
  this.yrs = yrs;
  this.industry = industry;
  this.alignment = alignment;
  this.reason = reason;
  this.why = why;
}


function Filter(jobName, yrs, industry, alignment, reason, why) {
  this.myName = jobName;
  this.yrs = yrs;
  this.industry = industry;
  this.alignment = alignment;
  this.reason = reason;
  this.why = why;
}



// MAKING THE ALUMNI RESPONSE -------------------------------------

function Person() {

  this.x;
  this.y;
  this.size;
  this.positionNum;
  this.gradYr;
  this.gradStatus ="default";
  this.currentJob;
  this.nextJob;
  this.lastJob;

  this.buildBasic = function(gradYr, gradStatus, positionNum) {
        this.gradYr = gradYr;
        this.gradStatus = gradStatus;
        this.positionNum = positionNum;
    }

  this.buildJobs = function(onejobName, oneyrs, oneindustry, onealignment, onereason, onewhy, twojobName, twoyrs, twoindustry, twoalignment, tworeason, twowhy, threejobName, threeyrs, threeindustry, threealignment, threereason, threewhy) {

        this.currentJob = new Job(onejobName, oneyrs, oneindustry, onealignment, onereason, onewhy);
        if (this.positionNum >1) {
          this.nextJob = new Job(twojobName, twoyrs, twoindustry, twoalignment, tworeason, twowhy);
        }
        if (this.positionNum >2) {
          this.lastJob = new Job(threejobName, threeyrs, threeindustry, threealignment, threereason, threewhy);
        }
    } 


}
