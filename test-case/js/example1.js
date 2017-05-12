
var is2D = false; 
var num;
var counter = 0;
var offsetX = 100;
var offsetY = 0;
var offsetZ = 100;

var year = [];
var allTowers = [];
var industry = ["Tech", "Agency", "Consulting", "Manufacturing", "Business", "Print", "Healthcare", "Entertainment", "Nonprofit", "Education", "Finance", "Government", "Law", "Retail", "Transportation", "Other"];
var indColors = ["#076aea", "#ffe048", "#ff3260", "#fab400", "#fbcfb6", "#ff40d3", "#3b00f2", "#55fffe", "#00dca0", "#04396c", "#b09bff", "#f431b2", "#fcdff7", "#d75bff", "#a6d6f7", "#309dac"];

var industryType = new Array();
for (i=0; i<85; i++) {
 industryType[i]=new Array();
}

var industryAlign = new Array();
for (i=0; i<85; i++) {
 industryAlign[i]=new Array();
}

var yearsAtType = new Array();
for (i=0; i<85; i++) {
 yearsAtType[i]=new Array();
}

var industries = new Array(16);
for(var i=0; i<16; i++){
  industries[i] = new Array(); // 100 is just random number that I defined.
}

var alignment = new Array(6);
for(var i=0; i<6; i++){
  alignment[i] = new Array(); // 100 is just random number that I defined.
}

  var yearGrad = [1960,1961,1962,1965,1966,1967,1968,1969,1972,1973,1974,1974,1977,1977,1977,1978,1979,1983,1984,1985,1986,1988,1989,1990,1991,1992,1994,1994,1994,1995,1996,1997,1997,1997,1997,1998,1998,1999,1999,1999,2000,2001,2002,2002,2003,2003,2004,2004,2004,2004,2004,2005,2006,2006,2006,2007,2007,2008,2008,20092009,2009,2009,2010,2010,2010,2010,2011,2011,2011,2012,2012,2012,2013,2013,2013,2014,2014,2014,2014,2014,2014,2014,2015,2015,2015];
  var gradStatus = ["Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Graduate", "Undergraduate",  "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate","Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate",  "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Graduate",  "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Graduate", "Graduate", "Undergraduate", "Undergraduate", "Graduate", "Undergraduate", "Undergraduate", "Undergraduate", "Graduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Graduate", "Graduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Undergraduate", "Graduate", "Undergraduate", "Undergraduate", "Undergraduate", "Graduate"];
  var positionNum = [7,5,6,10,15,6,4,9,1,4,7,14,2,4,9,5,5,8,6,5,6,4,4,5,5,6,8,4,5,18,5,3,9,6,4,7,7,20,7,3,6,8,4,3,20,6,3,5,13,3,3,4,2,3,3,5,5,3,3,2,4,4,2,3,3,2,4,1,3,2,3,2,3,2,1,2,1,1,1,4,2,2,3,1,1,1];
   
  var currentJobName = ["Senior Designer, Princeton University Press", "Retired IBM", "Freelance design studio", "Retired", "Self employed", "Self employed", "Marc Rosen Associates", "The Corporate Design Group", "Self employed", "amNEW YORK", "Screenwriter", "President Patti Ettinger Fine Arts", "Warwick Valley Central School District", "Creative Director", "Women in Aviation International", "Children At Play", "Crystal McKenzie", "Freelance Graphic Designer", "The Perfect Cake Inc.", "Eight and a Half", "Self employed", "SGSco / Pepsi Design Lead", "Principal & Design Director, Gensler", "Partner, emphasis design, inc.", "Watson", "Oracle", "Creative Director/Experiential Graphic Design, VAKOTA", "Owner", "Kern Design", "REFASHIOND ", "VP design ", "Morgan Stanley", "Freelance UX & Research", "Coty Inc.", "Kickdrum", "Client Portfolio Manager", "LVCK, LLC", "Freelance Creative Director at TandemSeven", "J&J Design", "Commercial Type", "J C Penney ", "Whitney Museum of American Art", "Senior Lighting Designer ", "Louis Vuitton", "Disarm Studio", "Makr and Staples", "Freelance/Consultant", "Cake and Arrow", "Design manager", "Hieronymus", "The Patient Revolution", "Product Ideation Director", "CRJA-IBI Group", "SKINNY VINNY", "Ryecatcher education ", "Blue State Digital", "1stdibs", "Huge Inc", "Paper Fashion LLC ", "R/GA", "Facebook", "NBCUniversal", "Pentagram", "Marvel Entertainment", "Service Design Lead", "Smart Design", "Self-employed", "Broadway Cares/Equity Fights AIDS", "Spotify", "Intrepid Pursuits", "WeddingWire", "Designer at Blue State Digital", "Thumbtack", "Athenahealth", "HarperCollins Publishers", "La Lettera Calligraphy NYC", "OnSIP", "SapientRazorfish", "Cosential", "Industrial designer", "ASAPP (an AI startup)", "iOS developer", "Moment", "Lifesize", "IBM", "Senior designer, Mckinsey & Company"];
  var currentJobYrs = [33,11,8,44,0,15,28,15,21,4,30,10,7,5,18,6,17,34,21,6,15,16,20,20,6,12,3,13,14,2,11,6,8,9,3,15,3,6,4,9,1,5,3,5,2,6,7,2,1,6,2,9,8,10,3,3,3,3,6,5,4,2,5,5,2,3,1,5,1,2,1,4,1,2,4,1,3,3,3,2,1,1,2,1,2,2];
   var currentJobIndustry = ["Print", "Manufacturing", "Print", "Education", "Consulting", "Agency", "Cosmetic Packaging", "Agency", "Print", "Print", "Entertainment", "Fine Art", "Education", "Agency", "Nonprofit", "Education", "Agency", "Print", "Food Entertainment", "Entertainment", "Education", "Packaging graphics", "Architecture & Interiors", "Consulting", "Nonprofit", "Tech", "Cultural Organizations / Theaters", "Agency", "Agency", "Tech", "Manufacturing", "Finance", "Consulting", "Beauty", "Tech", "Finance", "Consulting", "Consulting", "Healthcare", "Branding", "Retail", "Nonprofit", "Consulting", "Retail", "Agency", "Tech", "Finance", "Agency", "Healthcare", "Agency", "Nonprofit", "Healthcare", "Landscape Architecture", "Retail", "Tech", "Agency", "Online Marketplace ", "Agency", "Artist", "Agency", "Tech", "Agency", "Consulting", "Print", "Consulting", "Design Consultancy", "Consulting", "Nonprofit", "Tech", "Tech", "Tech", "Agency", "Tech", "Healthcare", "Print", "Print", "Business", "Agency", "Tech", "Tech", "Tech", "Tech", "Consulting", "Tech", "Tech", "Consulting"];
  var currentJobAlignment = [4,4,4,4,5,5,5,5,5,4,3,5,3,4,4,2,5,5,5,5,5,4,5,4,5,3,4,5,5,5,3,3,3,3,5,4,5,3,5,5,1,4,4,4,3,3,3,4,4,5,5,4,5,5,5,4,4,4,5,3,4,5,5,2,3,4,5,3,4,5,3,5,5,3,4,5,2,3,3,4,4,5,5,4,4,4];
  var currentJobReason = ["Product", "Designer", "", "Method", "", "", "", "", "", "", "Method", "", "", "Method", "Method", "Designer", "", "Designer", "", "", "", "Method", "", "", "", "", "", "Product", "", "", "Method", "Designer", "Product", "Method", "", "", "", "Product", "Designer", "", "Method", "Designer", "Method", "", "Product", "Designer", "Method", "Product", "", "", "", "", "", "Designer", "", "Product", "Method", "Product", "", "Method", "", "", "", "Method", "Designer", "", "", "Product", "Product", "", "Method", "", "", "Designer", "Product", "", "Method", "Product", "Method", "", "", "Method", "Product", "", "Product", "The design produced"];
  var currentJobWhy = ["", "", "", "", "", "", "", "", "", "", "", "", "", "Insufficient depth of experimentation", "", "", "", "", "", "", "", "", "", "", "", "", "No systems thinking", "Not enough empathy towards the users, Function and usability guide the process, Insufficient depth of experimentation, Inadequate user research", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "Too iterative, Imbalanced focus on aspects of the product", "", "", "They didn't have a design team when I started, so I was in charge of building it out. It was an educational process for the management and other people at the company.", "", "No systems thinking, Insufficient depth of experimentation, Inadequate user research, Poor quality of production", "", "", "", "", "", "", "", "Insufficient depth of experimentation", "", "Not enough empathy towards the users, Function and usability guide the process, Too iterative, Insufficient breadth of iteration, Insufficient depth of experimentation, Inadequate user research", "", "", "", "", "", "Imbalanced focus on aspects of the product", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

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
  var lastJobWhy = ["", "", "", "", "", "", "", "", "", "", "I didn't design work…", "", "", "", "To better the product/brand", "Instructional and educational", "", "", "To better the product/brand", "To better the product/brand", "For delight and entertainment, For economic growth", "", "", "", "To better humanity, To better the product/brand, To increase connectivity and communication", "", "", "", "", "", "", "", "", "", "", "", "", "freelance work is not that deep", "For economic growth", "", "", "", "To better humanity, To advance technology/innovation, To better the product/brand, For delight and entertainment, For economic growth, To increase connectivity and communication, Education", "", "For economic growth", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "To advance technology/innovation, To better the product/brand, For delight and entertainment,, For economic growth", "", "For economic growth, To increase connectivity and communication", "", "", "", "", "", "", "", "", "", "", "", "", ""];

  var manager = new THREE.LoadingManager();
  //var filter = 99;
  var alumni = [];
  var filterObj = new Filter(false, "", -1, -1, -1, "");
  var filterDef = new Filter(false, "", -1, -1, -1, "");

	
	var container, controls, stats;
	var camera, scene, raycaster, renderer;
	var mouse = new THREE.Vector2(), INTERSECTED; 
	var objects = [];


//START CODE HERE 

	function setup() {
	   buildAlumni (yearGrad, gradStatus, positionNum, currentJobName, currentJobYrs, currentJobIndustry, currentJobAlignment, currentJobReason, currentJobWhy, nextJobName, nextJobYrs, nextJobIndustry, nextJobAlignment, nextJobReason, nextJobWhy, lastJobName, lastJobYrs, lastJobIndustry, lastJobAlignment, lastJobReason, lastJobWhy); 
	   
	   			for(var i=0; i<industryType.length; i++){ 
		    for(var j=0; j<industryType[i].length; j++){
		
		      if(industryType[i][j]=== industry[0] ) {industries[0].push(i);}
		      else if(industryType[i][j]=== industry[1]) {industries[1].push(i);}
		      else if(industryType[i][j]=== industry[2]) {industries[2].push(i);}
		      else if(industryType[i][j]=== industry[3]) {industries[3].push(i);}
		      else if(industryType[i][j]=== industry[4]) {industries[4].push(i);}
		      else if(industryType[i][j]=== industry[5]) {industries[5].push(i);}
		      else if(industryType[i][j]=== industry[6]) {industries[6].push(i);}
		      else if(industryType[i][j]=== industry[7]) {industries[7].push(i);}
		      else if(industryType[i][j]=== industry[8]) {industries[8].push(i);}
		      else if(industryType[i][j]=== industry[9]) {industries[9].push(i);}
		      else if(industryType[i][j]=== industry[10]) {industries[10].push(i);}
		      else if(industryType[i][j]=== industry[11]) {industries[11].push(i);}
		      else if(industryType[i][j]=== industry[12]) {industries[12].push(i);}
		      else if(industryType[i][j]=== industry[13]) {industries[13].push(i);}
		      else if(industryType[i][j]=== industry[14]) {industries[14].push(i);}
		      else industries[15].push(i);
		    }
	  }
	  
	  for(var i=0; i<industryAlign.length; i++){ 
		    for(var j=0; j<industryAlign[i].length; j++){
		
		      if(industryAlign[i][j]=== 0 ) {alignment[0].push(i);}
		      else if(industryAlign[i][j]=== 1) {alignment[1].push(i);}
		      else if(industryAlign[i][j]=== 2) {alignment[2].push(i);}
		      else if(industryAlign[i][j]=== 3) {alignment[3].push(i);}
		      else if(industryAlign[i][j]=== 4) {alignment[4].push(i);}
		      else {alignment[5].push(i);}
		    }
	  }
	}
	
	function Filter(stat, yrs, industry, alignment, reason) {
	  this.theStatus = stat;
	  this.yrs = yrs;
	  this.industry = industry;
	  this.alignment = alignment;
	  this.reason = reason;
	}

	
	function buildAlumni(gradyrList, gradstatusList, positionnumList, onejobNamelist, oneyrslist, oneindustrylist, onealignmentlist, onereasonlist, onewhylist, twojobNamelist, twoyrslist, twoindustrylist, twoalignmentlist, tworeasonlist, twowhylist, threejobNamelist, threeyrslist, threeindustrylist, threealignmentlist, threereasonlist, threewhylist) 
	{
		for (var i=0; i<85; i++)
	    {
	      var newResponse = new Person(); //create a new alumni object
	      
	      newResponse.buildBasic(gradyrList[i], gradstatusList[i], positionnumList[i]); 
	      //build this alumni with build funciton of alumni object
	      newResponse.buildJobs(i, onejobNamelist[i], oneyrslist[i], oneindustrylist[i], onealignmentlist[i], onereasonlist[i], onewhylist[i], twojobNamelist[i], twoyrslist[i], twoindustrylist[i], twoalignmentlist[i], tworeasonlist[i], twowhylist[i], threejobNamelist[i], threeyrslist[i], threeindustrylist[i], threealignmentlist[i], threereasonlist[i], threewhylist[i]);
	      alumni.push(newResponse);
	      
	      //add this new alumni object to alumni array
	    }
	}
	
	function getIndustryCol(theId) {
		var theColor;
		if (theId === industry[0]) { theColor = indColors[0]; }
		else if (theId === industry[1]) { theColor = indColors[1]; }
		else if (theId === industry[2]) { theColor = indColors[2]; }
		else if (theId === industry[3]) { theColor = indColors[3]; }
		else if (theId === industry[4]) { theColor = indColors[4]; }
		else if (theId === industry[5]) { theColor = indColors[5]; }
		else if (theId === industry[6]) { theColor = indColors[6]; }
		else if (theId === industry[7]) { theColor = indColors[7]; }
		else if (theId === industry[8]) { theColor = indColors[8]; }
		else if (theId === industry[9]) { theColor = indColors[9]; }
		else if (theId === industry[10]) { theColor = indColors[10]; }
		else if (theId === industry[11]) { theColor = indColors[11]; }
		else if (theId === industry[12]) { theColor = indColors[12]; }
		else if (theId === industry[13]) { theColor = indColors[13]; }
		else if (theId === industry[14]) { theColor = indColors[14]; }
		else { theColor = indColors[15]; }
		
		return theColor;
	}
	

	function clearAll() {
		scene = new THREE.Scene();
		for (var x=0; x<scene.children.length; x++) {scene.remove(scene.children[x]);}
		// filterObj.theStatus = true;
		objects = [];
		num = 0;
		counter++;
	}
	
	// var main_sum_year = 12; // this can be tweaked by users using slider
	
	function Tower(alum, theYear, theIndustries, theDuration){

	  
	  this.id = alum;
	  this.pos;
	  this.yr = [];
	  this.t = [];
	  this.d = [];
	  this.sumYear;
	
	  this.init = function() {
	    this.pos = new THREE.Vector3(1,1,1); // this can be done in many different ways
	    this.yr = theYear; // year[] will contain three numeric elements (=year) when the person started their jobs.
	    this.t = theIndustries; 
	    this.d = theDuration;
	    
	    for(var i=0; i<this.d.length; i++){
	      this.sumYear += this.d[i];
	    } 
	   }
	  
	  this.init();
	
	  this.visualize = function(){
		var yy = 0;
		var gap = 20;
		var num = 0;
		
		for ( var i = 0; i < this.d.length; i ++ ) {
			var r = this.d[i]*5;
			yy += r*.5;
			
			// var geometry = new THREE.BoxBufferGeometry(1,1,1);
			var geometry = new THREE.BoxGeometry( 1, 1, 1);
			var theColor = getIndustryCol(this.t[i]);
			var theCol = new THREE.MeshLambertMaterial( { color: theColor } );

		// FILTERING HERE ----------------------------
			if (filterObj.theStatus === true) {
				theCol = new THREE.MeshStandardMaterial( { opacity: .10, transparent: true } );
			
			for (var x=0; x<industries[filterObj.industry].length; x++)
			{
				
				if(filterObj.industry > -1 && filterObj.alignment > -1){
					for (var y=0; y<alignment[filterObj.alignment].length; y++){
						
						if ((alignment[filterObj.alignment][y] === industries[filterObj.industry][x]) && (industries[filterObj.industry][x] === this.id)) {
							theCol = new THREE.MeshLambertMaterial( { color: theColor } ); 
						}
						// else theCol = new THREE.MeshStandardMaterial( { opacity: .10, transparent: true } );
							
						}
						
				}
					else if (filterObj.industry > -1){
						
						if(industries[filterObj.industry][x] === this.id) theCol = new THREE.MeshLambertMaterial( { color: theColor } );
					}
					else if(filterObj.alignment > -1 ){
					for (var y=0; y<alignment[filterObj.alignment].length; y++){
						if (industries[filterObj.alignment][y] === this.id) theCol = new THREE.MeshLambertMaterial( { color: theColor } );
					}
				}
				}
	
			}
		// FILTERING End HERE ----------------------------
		
			var object = new THREE.Mesh( geometry, theCol);
			object.id = alum;
			object.position.x = ((alum % 10)*gap) - offsetX;
			object.position.y = (yy) - offsetY;
			object.position.z = ((Math.floor(alum/10)*gap)+200) - offsetZ;
			object.scale.x = 5;
			object.scale.y = r+.5;
			object.scale.z = 5;
			scene.add( object );
			objects.push( object );
			
			if (i === 0) {
				object.jobName = alumni[alum].currentJob.myName;
				object.jobYrs = alumni[alum].currentJob.yrs;
				object.jobSat = alumni[alum].currentJob.alignment;
				object.jobWhy = alumni[alum].currentJob.why;
				object.jobInd = alumni[alum].currentJob.industry;
				}
			else if (i === 1) {
				object.jobName = alumni[alum].nextJob.myName;
				object.jobYrs = alumni[alum].nextJob.yrs;
				object.jobSat = alumni[alum].nextJob.alignment;
				object.jobWhy = alumni[alum].nextJob.why;
				object.jobInd = alumni[alum].nextJob.industry;
				}
			else if (i === 2) {
				object.jobName = alumni[alum].lastJob.myName;
				object.jobYrs = alumni[alum].lastJob.yrs;
				object.jobSat = alumni[alum].lastJob.alignment;
				object.jobWhy = alumni[alum].lastJob.why;
				object.jobInd = alumni[alum].lastJob.industry;
				}	
					
			yy += r*.5;	
			
		}
	  }
	  
	  this.visualize2D = function(){
		var yy = 0;
		var gap = 20;
		var num = 0;
		
		for ( var i = 0; i < this.d.length; i ++ ) {
			var r = this.d[i]*5;
			yy += r*.5;
			
			var geometry = new THREE.BoxGeometry( 1, 1, 1);
			var theColor = getIndustryCol(this.t[i]);
			var theCol = new THREE.MeshLambertMaterial( { color: theColor } );
			
		//FILTERING HERE ///////////////////////////////////////////////////		
		if (filterObj.theStatus === true) {
				// theCol = new THREE.MeshStandardMaterial( { opacity: .10, transparent: true } );
			
			var newArr = industries[filterObj.industry];
			for (var z=0; z<newArr.length; z++){
				if(newArr[z] === newArr[z+1]) { newArr.splice(z+1,1); }
			}
				
			for (var x=0; x<newArr.length; x++)
			{
				// IF BOTH INDUSTRY AND ALIGNMENT SELECTED
				if(filterObj.industry > -1 && filterObj.alignment > -1){
					for (var y=0; y<alignment[filterObj.alignment].length; y++){
						if (industries[filterObj.alignment][y] === industries[filterObj.industry][x]) {theCol = new THREE.MeshLambertMaterial( { color: theColor } ); }
						else theCol = new THREE.MeshStandardMaterial( { opacity: .10, transparent: true } );
					}
				}
				// IF ONLY INDUSTRY SELECTED
				else {
					if(industries[filterObj.industry][x] === this.id) {
					theCol = new THREE.MeshLambertMaterial( { color: theColor } );
					
					makeText(x, gap, yy, industryAlign[alum][i]);
					var object = new THREE.Mesh( geometry, theCol);
					object.id = alum;
					object.position.x = (x*gap) - offsetX;
					object.position.y = yy - offsetY+2;
					object.position.z = 200- offsetZ;
					object.scale.x = 5;
					object.scale.y = r+.5;
					object.scale.z = 5;
					scene.add( object );
					objects.push( object );
					
					if (i === 0) {
						object.jobName = alumni[alum].currentJob.myName;
						object.jobYrs = alumni[alum].currentJob.yrs;
						object.jobSat = alumni[alum].currentJob.alignment;
						object.jobWhy = alumni[alum].currentJob.why;
						object.jobInd = alumni[alum].currentJob.industry;
						
						}
					else if (i === 1) {
						object.jobName = alumni[alum].nextJob.myName;
						object.jobYrs = alumni[alum].nextJob.yrs;
						object.jobSat = alumni[alum].nextJob.alignment;
						object.jobWhy = alumni[alum].nextJob.why;
						object.jobInd = alumni[alum].nextJob.industry;
						}
					else if (i === 2) {
						object.jobName = alumni[alum].lastJob.myName;
						object.jobYrs = alumni[alum].lastJob.yrs;
						object.jobSat = alumni[alum].lastJob.alignment;
						object.jobWhy = alumni[alum].lastJob.why;
						object.jobInd = alumni[alum].lastJob.industry;
						}	

					} 
						
					}
				}
			
				
			}
		
		//FOR ALL 2D NO INDUSTRY FILTER	>
	
		else {	
				makeText(alum, gap, yy, industryAlign[alum][i]);
				
				var object = new THREE.Mesh( geometry, theCol);
				object.id = alum;
				object.position.x = (alum *gap) - offsetX;
				object.position.y = yy - offsetY;
				object.position.z = 200 - offsetZ;
				object.scale.x = 5;
				object.scale.y = r+.5;
				object.scale.z = 5;
				scene.add( object );
				objects.push( object );
				
					
				if (i === 0) {
					object.jobName = alumni[alum].currentJob.myName;
					object.jobYrs = alumni[alum].currentJob.yrs;
					object.jobSat = alumni[alum].currentJob.alignment;
					object.jobWhy = alumni[alum].currentJob.why;
					object.jobInd = alumni[alum].currentJob.industry;
						}
				else if (i === 1) {
					object.jobName = alumni[alum].nextJob.myName;
					object.jobYrs = alumni[alum].nextJob.yrs;
					object.jobSat = alumni[alum].nextJob.alignment;
					object.jobWhy = alumni[alum].nextJob.why;
					object.jobInd = alumni[alum].nextJob.industry;
					}
				else if (i === 2) {
					object.jobName = alumni[alum].lastJob.myName;
					object.jobYrs = alumni[alum].lastJob.yrs;
					object.jobSat = alumni[alum].lastJob.alignment;
					object.jobWhy = alumni[alum].lastJob.why;
					object.jobInd = alumni[alum].lastJob.industry;
					}	
		}
		
		yy += r*.5;	
		}
	  }
	}
	
		function makeText(alum, gap, yy, alignmentNum) {	
				var loader = new THREE.FontLoader();
				loader.load( 'assets/Pixelar_Regular.json', function ( font ) {
				var xMid, text;
				var textShape = new THREE.BufferGeometry();
				var color = 0xffffff;
				var matDark = new THREE.LineBasicMaterial( {
					color: color,
					side: THREE.DoubleSide,
					transparent: true,
					opacity: 0.6
				} );
				var message = alignmentNum;
				var shapes = font.generateShapes( message, 5, 2 );
				var geometry = new THREE.ShapeGeometry( shapes );
				geometry.computeBoundingBox();
				xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
				geometry.translate( xMid, 0, 0 );
				// make shape ( N.B. edge view not visible )
				textShape.fromGeometry( geometry );
				text = new THREE.Mesh( textShape, matDark );
				text.position.x = (alum *gap) - offsetX;
				text.position.y = yy - offsetY;
				text.position.z = 203 - offsetZ;
				scene.add( text );
			} );
		}

	function Job(jobName, yrs, industry, alignment, reason, why) {
	  this.myName = jobName;
	  this.yrs = yrs;
	  this.industry = industry;
	  
	  var alignWord;
	  if (alignment ===1) {alignWord = "not satisfied";}
	  else if (alignment ===2) {alignWord = "rarely satisfied";}
	  else if (alignment ===3) {alignWord = "sometimes satisfied";}
	  else if (alignment ===4) {alignWord = "mostly satisfied";}
	  else {alignWord = "fully satisfied";}
	  
	  this.alignment = alignWord;
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

  this.buildJobs = function(alum, onejobName, oneyrs, oneindustry, onealignment, onereason, onewhy, twojobName, twoyrs, twoindustry, twoalignment, tworeason, twowhy, threejobName, threeyrs, threeindustry, threealignment, threereason, threewhy) {

        this.currentJob = new Job(onejobName, oneyrs, oneindustry, onealignment, onereason, onewhy);
        industryType[alum].push(oneindustry); 
        industryAlign[alum].push(onealignment); 
        yearsAtType[alum].push(oneyrs);

        if (this.positionNum >1) {
          this.nextJob = new Job(twojobName, twoyrs, twoindustry, twoalignment, tworeason, twowhy);
          industryType[alum].push(twoindustry);
          industryAlign[alum].push(twoalignment); 
          yearsAtType[alum].push(twoyrs);
        }
        if (this.positionNum >2) {
          this.lastJob = new Job(threejobName, threeyrs, threeindustry, threealignment, threereason, threewhy);
          industryType[alum].push(threeindustry);
          industryAlign[alum].push(threealignment); 
          yearsAtType[alum].push(threeyrs);
        }
	        
	    } 
	}
			
			// THIS IS QS CODE /////////////////////////////////////////


			function init() {
				container = document.getElementById("box");

				// var info = document.createElement( 'div' );
				// info.style.position = 'absolute';
				// info.style.top = '10px';
				// info.style.width = '100%';
				// info.style.textAlign = 'center';
				// info.innerHTML = '<a href="http://threejs.org" target="_blank">three.js</a> - clickable objects';
				// container.appendChild( info );

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
			
				raycaster = new THREE.Raycaster();
				renderer = new THREE.WebGLRenderer();
				renderer.setClearColor( 0xf7f7f7 );
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
			
			function buildTowers() {
				
				
				var light1 = new THREE.DirectionalLight( 0xffffff, 1 );
				light1.position.set( 1, 1, 1 ).normalize();
				scene.add( light1 );

				var light2 = new THREE.DirectionalLight( 0xffffff, 0.5 );
				light2.position.set( 0, 1, 1 ).normalize();
				scene.add( light2 );

				var light3 = new THREE.DirectionalLight( 0xffffff, 0.5 );
				light3.position.set( -1, 1, 0 ).normalize();
				scene.add( light3 );
				
				for(var x=0; x<85; x++) {
				 var TowOne = new Tower(x, yearGrad[x], industryType[x], yearsAtType[x]);
				 TowOne.init();
				 if (is2D) TowOne.visualize2D();
				 else TowOne.visualize();
				 
				 //var circle = new THREE.SphereGeometry(5,32,32);
				 //var material = new THREE.MeshBasicMaterial( { color: 0xfff00 });
				 //var object = new THREE.Mesh( circle, material);
				 //scene.add( object );
				 
				 allTowers.push(TowOne);
				}
				
			}
			
			function build2DTowers() {
				
				var light1 = new THREE.DirectionalLight( 0xffffff, 1 );
				light1.position.set( 1, 1, 1 ).normalize();
				scene.add( light1 );

				var light2 = new THREE.DirectionalLight( 0xffffff, 0.5 );
				light2.position.set( 0, 1, 1 ).normalize();
				scene.add( light2 );

				var light3 = new THREE.DirectionalLight( 0xffffff, 0.5 );
				light3.position.set( -1, 1, 0 ).normalize();
				scene.add( light3 );
				
				for(var x=0; x<85; x++) {
				 var TowOne = new Tower(x, yearGrad[x], industryType[x], yearsAtType[x]);
				 TowOne.init();
				 TowOne.visualize2D();
				 
				}
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
				camera.lookAt( scene.position );

				camera.updateMatrixWorld();
				// find intersections
				
				raycaster.setFromCamera( mouse, camera );
				var intersects = raycaster.intersectObjects( scene.children );
				if ( intersects.length > 0 ) {
					if ( INTERSECTED != intersects[ 0 ].object ) {
						
						if ( INTERSECTED && (INTERSECTED.material.hasOwnProperty("emissive")) && (INTERSECTED.material.transparent == false))
						{ INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );}
						
						INTERSECTED = intersects[ 0 ].object;
						
						if(INTERSECTED.material.hasOwnProperty("emissive") && (INTERSECTED.material.transparent == false)) {
						INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
						INTERSECTED.material.emissive.setHex( 0xffffff );
						document.getElementById("jobName").innerHTML = INTERSECTED.jobName;
						document.getElementById("jobYrs").innerHTML = INTERSECTED.jobYrs;
						document.getElementById("jobSat").innerHTML = INTERSECTED.jobSat;
						document.getElementById("jobWhy").innerHTML = INTERSECTED.jobWhy;
						document.getElementById("jobInd").innerHTML = INTERSECTED.jobInd;
						}
					}
				} 
				else {
					
					if ( INTERSECTED && (INTERSECTED.material.hasOwnProperty("emissive")) && (INTERSECTED.material.transparent == false)) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
					
					INTERSECTED = null;
				}

				renderer.render( scene, camera );

			}
	
