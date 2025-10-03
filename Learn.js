(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Learn_atlas_1", frames: [[0,396,821,395],[823,396,547,548],[0,793,821,395],[0,0,864,394],[823,946,522,531],[0,1190,821,395]]},
		{name:"Learn_atlas_2", frames: [[1351,1006,615,587],[0,0,987,881],[0,1280,682,596],[0,883,1099,395],[1351,397,606,607],[989,0,1002,395],[684,1280,665,583]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Star = function() {
	this.initialize(ss["Learn_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8192,8192);


(lib.Block = function() {
	this.initialize(ss["Learn_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Buttonread = function() {
	this.initialize(img.Buttonread);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2376,1133);


(lib.circleletter = function() {
	this.initialize(ss["Learn_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.circle = function() {
	this.initialize(ss["Learn_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.heartletter = function() {
	this.initialize(ss["Learn_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.heart = function() {
	this.initialize(ss["Learn_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Learn_1 = function() {
	this.initialize(img.Learn_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2978,2119);


(lib.note = function() {
	this.initialize(img.note);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3966,2112);


(lib.Pentagonletter = function() {
	this.initialize(ss["Learn_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pentagon = function() {
	this.initialize(ss["Learn_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.showshape = function() {
	this.initialize(img.showshape);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3243,1051);


(lib.Squareletter = function() {
	this.initialize(ss["Learn_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Square = function() {
	this.initialize(ss["Learn_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Starletter = function() {
	this.initialize(ss["Learn_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.triangleletter = function() {
	this.initialize(ss["Learn_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Triangle = function() {
	this.initialize(ss["Learn_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.showshape();
	this.instance.setTransform(598,263,0.1834,0.2408);

	this.instance_1 = new lib.Learn_1();
	this.instance_1.setTransform(0,0,0.2096,0.2009);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1192.8,516.1);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("startsoundwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.Star();
	this.instance.setTransform(27,25,0.1758,0.1841);

	this.instance_1 = new lib.Block();
	this.instance_1.setTransform(0,0,0.165,0.1791);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162.9,157.8);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("pentagonsoundwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.pentagon();
	this.instance.setTransform(27,25,0.1784,0.1781);

	this.instance_1 = new lib.Block();
	this.instance_1.setTransform(0,0,0.165,0.1791);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162.9,157.8);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("heartsoundwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.heart();
	this.instance.setTransform(27,25,0.1585,0.1814);

	this.instance_1 = new lib.Block();
	this.instance_1.setTransform(0,0,0.165,0.1791);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162.9,157.8);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("trianglesoundwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.Triangle();
	this.instance.setTransform(27,27,0.1625,0.1854);

	this.instance_1 = new lib.Block();
	this.instance_1.setTransform(0,0,0.165,0.1791);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162.9,157.8);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("circlesoundwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.circle();
	this.instance.setTransform(27,32,0.1976,0.1973);

	this.instance_1 = new lib.Block();
	this.instance_1.setTransform(0,0,0.165,0.1791);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162.9,157.8);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("squaresoundwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.Square();
	this.instance.setTransform(27,27,0.2071,0.2036);

	this.instance_1 = new lib.Block();
	this.instance_1.setTransform(0,0,0.165,0.1791);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162.9,157.8);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.note();
	this.instance.setTransform(0,0,0.2121,0.205);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,841.1,432.9);


(lib.Readbtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Buttonread();
	this.instance.setTransform(0,0,0.2122,0.2358);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,504.1,267.2);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(596.4,258,1,1,0,0,0,596.4,258);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1192.8,516.1);


// stage content:
(lib.Learn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {learn:20};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.stop(); 
		
		createjs.Sound.registerSound("sounds/clicksound.mp3", "clicksound");
		
		function clickHandler() {
		    createjs.Sound.play("clicksound");
		    this.gotoAndStop("learn"); 
		}
		this.readbtn.addEventListener("click", clickHandler.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));

	// letter
	this.Lean = new lib.Symbol1("synched",0);
	this.Lean.name = "Lean";
	this.Lean.setTransform(580.4,264,1,1,0,0,0,596.4,258);

	this.instance = new lib.Starletter();
	this.instance.setTransform(883,567,0.2838,0.281);

	this.instance_1 = new lib.heartletter();
	this.instance_1.setTransform(235,576,0.2838,0.281);

	this.instance_2 = new lib.Pentagonletter();
	this.instance_2.setTransform(569,577,0.212,0.281);

	this.instance_3 = new lib.circleletter();
	this.instance_3.setTransform(556,313,0.2838,0.281);

	this.instance_4 = new lib.Squareletter();
	this.instance_4.setTransform(230,313,0.2697,0.2817);

	this.instance_5 = new lib.triangleletter();
	this.instance_5.setTransform(882,313,0.2334,0.281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Lean}]}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},19).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(20));

	// button
	this.readbtn = new lib.Readbtn();
	this.readbtn.name = "readbtn";
	this.readbtn.setTransform(942.1,551.6,1,1,0,0,0,252.1,133.6);
	new cjs.ButtonHelper(this.readbtn, 0, 1, 1);

	this.instance_6 = new lib.Symbol8();
	this.instance_6.setTransform(1000.45,504.15,1,1,0,0,0,81.4,78.9);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 2, false, new lib.Symbol8(), 3);

	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(681.45,504.15,1,1,0,0,0,81.4,78.9);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 2, false, new lib.Symbol7(), 3);

	this.instance_8 = new lib.Symbol6();
	this.instance_8.setTransform(347.45,504.15,1,1,0,0,0,81.4,78.9);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.Symbol6(), 3);

	this.instance_9 = new lib.Symbol5();
	this.instance_9.setTransform(1000.45,233.15,1,1,0,0,0,81.4,78.9);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.Symbol5(), 3);

	this.instance_10 = new lib.Symbol4();
	this.instance_10.setTransform(675.45,233.15,1,1,0,0,0,81.4,78.9);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 2, false, new lib.Symbol4(), 3);

	this.instance_11 = new lib.Symbol3();
	this.instance_11.setTransform(347.45,233.15,1,1,0,0,0,81.4,78.9);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 2, false, new lib.Symbol3(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.readbtn}]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},19).wait(21));

	// background
	this.instance_12 = new lib.Symbol2("synched",0);
	this.instance_12.setTransform(806.5,453.4,1,1,0,0,0,420.5,216.4);

	this.instance_13 = new lib.background();
	this.instance_13.setTransform(-16,-11,0.1612,0.0933);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},19).wait(21));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(624,349,680.5,404.20000000000005);
// library properties:
lib.properties = {
	id: 'FF824ED3C30BEE4AB99586BC64C26E61',
	width: 1280,
	height: 720,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/background.png?1759387849462", id:"background"},
		{src:"images/Buttonread.png?1759387849462", id:"Buttonread"},
		{src:"images/Learn_1.png?1759387849462", id:"Learn_1"},
		{src:"images/note.png?1759387849462", id:"note"},
		{src:"images/showshape.png?1759387849462", id:"showshape"},
		{src:"images/Learn_atlas_1.png?1759387849391", id:"Learn_atlas_1"},
		{src:"images/Learn_atlas_2.png?1759387849391", id:"Learn_atlas_2"},
		{src:"sounds/circlesoundwav.mp3?1759387849462", id:"circlesoundwav"},
		{src:"sounds/heartsoundwav.mp3?1759387849462", id:"heartsoundwav"},
		{src:"sounds/pentagonsoundwav.mp3?1759387849462", id:"pentagonsoundwav"},
		{src:"sounds/squaresoundwav.mp3?1759387849462", id:"squaresoundwav"},
		{src:"sounds/startsoundwav.mp3?1759387849462", id:"startsoundwav"},
		{src:"sounds/trianglesoundwav.mp3?1759387849462", id:"trianglesoundwav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FF824ED3C30BEE4AB99586BC64C26E61'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;