(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Matching_atlas_1", frames: [[1525,437,433,433],[762,873,629,478],[862,0,795,435],[0,436,761,434],[0,0,860,434],[763,437,760,434],[0,872,760,434]]},
		{name:"Matching_atlas_2", frames: [[0,0,987,882],[989,0,987,882],[0,884,987,882],[989,884,987,882]]}
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



(lib.arrow = function() {
	this.initialize(ss["Matching_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arrow_1 = function() {
	this.initialize(ss["Matching_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.asdasd = function() {
	this.initialize(img.asdasd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2138,2463);


(lib.backgorund = function() {
	this.initialize(img.backgorund);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,8192,8192);


(lib.Blank = function() {
	this.initialize(ss["Matching_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.buttonletsgo = function() {
	this.initialize(img.buttonletsgo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2750,1134);


(lib.Heartshape = function() {
	this.initialize(ss["Matching_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.heart = function() {
	this.initialize(ss["Matching_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.note = function() {
	this.initialize(img.note);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5022,2913);


(lib.note_1 = function() {
	this.initialize(img.note_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4860,2589);


(lib.Pentagon = function() {
	this.initialize(ss["Matching_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Pentagon_1 = function() {
	this.initialize(ss["Matching_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Seeya = function() {
	this.initialize(img.Seeya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2905,2970);


(lib.Sqare = function() {
	this.initialize(ss["Matching_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Squaretext = function() {
	this.initialize(ss["Matching_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Star = function() {
	this.initialize(ss["Matching_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Star_1 = function() {
	this.initialize(ss["Matching_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Textmatching = function() {
	this.initialize(img.Textmatching);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3619,1398);


(lib.Thanks = function() {
	this.initialize(img.Thanks);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3341,2607);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.startBtn = function(mode,startPosition,loop,reversed) {
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
		playSound("clicksound");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.buttonletsgo();
	this.instance.setTransform(0,0,0.1559,0.136);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,428.9,154.3);


(lib.star_mc4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Star_1();
	this.instance.setTransform(0,0,0.3684,0.3226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star_mc4, new cjs.Rectangle(0,0,280,140), null);


(lib.star_mc3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Star_1();
	this.instance.setTransform(0,0,0.3684,0.3226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star_mc3, new cjs.Rectangle(0,0,280,140), null);


(lib.star_mc2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Star_1();
	this.instance.setTransform(0,0,0.3684,0.3226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star_mc2, new cjs.Rectangle(0,0,280,140), null);


(lib.star_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Star_1();
	this.instance.setTransform(0,0,0.3684,0.3226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star_btn, new cjs.Rectangle(0,0,280,140), null);


(lib.square_mc4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Squaretext();
	this.instance.setTransform(0,0,0.3684,0.3226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.square_mc4, new cjs.Rectangle(0,0,280,140), null);


(lib.square_mc2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Squaretext();
	this.instance.setTransform(0,0,0.3684,0.3226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.square_mc2, new cjs.Rectangle(0,0,280,140), null);


(lib.square_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Squaretext();
	this.instance.setTransform(0,0,0.3684,0.3226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.square_mc, new cjs.Rectangle(0,0,280,140), null);


(lib.pentagon_mc4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Pentagon_1();
	this.instance.setTransform(0,0,0.3256,0.3226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pentagon_mc4, new cjs.Rectangle(0,0,280,140), null);


(lib.pentagon_mc3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Pentagon_1();
	this.instance.setTransform(0,0,0.3256,0.3226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pentagon_mc3, new cjs.Rectangle(0,0,280,140), null);


(lib.pentagon_mc2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Pentagon_1();
	this.instance.setTransform(0,0,0.3256,0.3226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pentagon_mc2, new cjs.Rectangle(0,0,280,140), null);


(lib.pentagon_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Pentagon_1();
	this.instance.setTransform(0,0,0.3256,0.3226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,140);


(lib.heart_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.heart();
	this.instance.setTransform(0,0,0.3679,0.3226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,280,140);


(lib.dropZone3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Blank();
	this.instance.setTransform(0,0,0.3522,0.3218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dropZone3, new cjs.Rectangle(0,0,280,140), null);


(lib.dropZone2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Blank();
	this.instance.setTransform(0,0,0.3522,0.3218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dropZone2, new cjs.Rectangle(0,0,280,140), null);


(lib.dropZone_mc4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Blank();
	this.instance.setTransform(0,0,0.3522,0.3218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dropZone_mc4, new cjs.Rectangle(0,0,280,140), null);


(lib.drop_btn = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Blank();
	this.instance.setTransform(0,0,0.3522,0.3218);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drop_btn, new cjs.Rectangle(0,0,280,140), null);


(lib.square_mc3 = function(mode,startPosition,loop,reversed) {
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
	this.square_mc3 = new lib.square_mc2();
	this.square_mc3.name = "square_mc3";
	this.square_mc3.setTransform(140,70,1,1,0,0,0,140,70);

	this.timeline.addTween(cjs.Tween.get(this.square_mc3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.square_mc3, new cjs.Rectangle(0,0,280,140), null);


// stage content:
(lib.Matching = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {q1:19,q2:39,q3:59,q4:79,thanks:99};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,19,39,59,79,99];
	// timeline functions:
	this.frame_0 = function() {
		this.stop(); 
		this.musicStarted = false;
		createjs.Sound.registerSound("sounds/backgroundmusic.mp3", "backgroundmusic");
		function handleButtonClick() {
		    
		    if (!this.musicStarted) {
		        createjs.Sound.play("backgroundmusic", {loop: -1, volume: 0.5});
		        this.musicStarted = true;
		    }
		    this.gotoAndStop("q1"); 
		}
		this.startBtn.addEventListener("click", handleButtonClick.bind(this));
		var root = this;
		this.stop();
		this.startBtn.addEventListener("click", function() {
		    root.gotoAndStop("q1");
		}.bind(this));
	}
	this.frame_19 = function() {
		this.stop();
		
		let root = this;
		let dropZone = this.dropZone_mc;
		function isHit(mc, target) {
		    let b1 = mc.getBounds();
		    let b2 = target.getBounds();
		    if (!b1 || !b2) return false;
		    let p1 = mc.localToGlobal(b1.x, b1.y);
		    let p2 = target.localToGlobal(b2.x, b2.y);
		
		    return !(p1.x + b1.width < p2.x ||
		             p1.x > p2.x + b2.width ||
		             p1.y + b1.height < p2.y ||
		             p1.y > p2.y + b2.height);
		}
		function enableDrag(mc, isCorrect, nextLabel) {
		    mc.startX = mc.x;
		    mc.startY = mc.y;
		
		    mc.on("mousedown", function(evt) {
		        root.addChild(mc); 
		        mc.offset = {x: mc.x - evt.stageX, y: mc.y - evt.stageY};
		    });
		
		    mc.on("pressmove", function(evt) {
		        mc.x = evt.stageX + mc.offset.x;
		        mc.y = evt.stageY + mc.offset.y;
		    });
		
		    mc.on("pressup", function(evt) {
		        if (isHit(mc, dropZone)) {
		            if (isCorrect) {
		                createjs.Tween.get(mc).to({x: dropZone.x, y: dropZone.y}, 300)
		                    .call(function(){
		                        root.gotoAndStop(nextLabel);
		                    });
		            } else {
		                createjs.Tween.get(mc).to({x: mc.startX, y: mc.startY}, 300, createjs.Ease.backOut);
		            }
		        } else {
		            createjs.Tween.get(mc).to({x: mc.startX, y: mc.startY}, 300, createjs.Ease.backOut);
		        }
		    });
		}
		enableDrag(this.pentagon_mc, false, "q2");
		enableDrag(this.heart_mc, true,  "q2");
		enableDrag(this.star_mc, false,  "q2");
	}
	this.frame_39 = function() {
		this.stop();
		
		let root = this;
		let dropZone = this.dropZone_mc;
		function isHit(mc, target) {
		    let b1 = mc.getBounds();
		    let b2 = target.getBounds();
		    if (!b1 || !b2) return false;
		    let p1 = mc.localToGlobal(b1.x, b1.y);
		    let p2 = target.localToGlobal(b2.x, b2.y);
		
		    return !(p1.x + b1.width < p2.x ||
		             p1.x > p2.x + b2.width ||
		             p1.y + b1.height < p2.y ||
		             p1.y > p2.y + b2.height);
		}
		function enableDrag(mc, isCorrect, nextLabel) {
		    mc.startX = mc.x;
		    mc.startY = mc.y;
		
		    mc.on("mousedown", function(evt) {
		        root.addChild(mc); // bring to front
		        mc.offset = {x: mc.x - evt.stageX, y: mc.y - evt.stageY};
		    });
		
		    mc.on("pressmove", function(evt) {
		        mc.x = evt.stageX + mc.offset.x;
		        mc.y = evt.stageY + mc.offset.y;
		    });
		
		    mc.on("pressup", function(evt) {
		        if (isHit(mc, dropZone)) {
		            if (isCorrect) {
		                createjs.Tween.get(mc).to({x: dropZone.x, y: dropZone.y}, 300)
		                    .call(function(){
		                        root.gotoAndStop("q3");
		                    });
		            } else {
		                createjs.Tween.get(mc).to({x: mc.startX, y: mc.startY}, 300, createjs.Ease.backOut);
		            }
		        } else {
		            createjs.Tween.get(mc).to({x: mc.startX, y: mc.startY}, 300, createjs.Ease.backOut);
		        }
		    });
		}
		enableDrag(this.pentagon_mc2, true,  "q3");
		enableDrag(this.square_mc2,   false, "q3");
		enableDrag(this.star_mc2,     false, "q3");
	}
	this.frame_59 = function() {
		this.stop();
		
		let root = this;
		let dropZone = this.dropZone_mc;
		function isHit(mc, target) {
		    let b1 = mc.getBounds();
		    let b2 = target.getBounds();
		    if (!b1 || !b2) return false;
		    let p1 = mc.localToGlobal(b1.x, b1.y);
		    let p2 = target.localToGlobal(b2.x, b2.y);
		
		    return !(p1.x + b1.width < p2.x ||
		             p1.x > p2.x + b2.width ||
		             p1.y + b1.height < p2.y ||
		             p1.y > p2.y + b2.height);
		}
		function enableDrag(mc, isCorrect, nextLabel) {
		    mc.startX = mc.x;
		    mc.startY = mc.y;
		
		    mc.on("mousedown", function(evt) {
		        root.addChild(mc);
		        mc.offset = {x: mc.x - evt.stageX, y: mc.y - evt.stageY};
		    });
		
		    mc.on("pressmove", function(evt) {
		        mc.x = evt.stageX + mc.offset.x;
		        mc.y = evt.stageY + mc.offset.y;
		    });
		
		    mc.on("pressup", function(evt) {
		        if (isHit(mc, dropZone)) {
		            if (isCorrect) {
		                createjs.Tween.get(mc).to({x: dropZone.x, y: dropZone.y}, 300)
		                    .call(function(){
		                        root.gotoAndStop("q4");
		                    });
		            } else {
		                createjs.Tween.get(mc).to({x: mc.startX, y: mc.startY}, 300, createjs.Ease.backOut);
		            }
		        } else {
		            createjs.Tween.get(mc).to({x: mc.startX, y: mc.startY}, 300, createjs.Ease.backOut);
		        }
		    });
		}
		
		// ✅ Q2 setup (correct = pentagon_mc, next = q3)
		enableDrag(this.pentagon_mc3, false,  "q4");
		enableDrag(this.square_mc3,   true, "q4");
		enableDrag(this.star_mc3,     false, "q4");
	}
	this.frame_79 = function() {
		this.stop();
		
		let root = this;
		let dropZone = this.dropZone_mc;
		function isHit(mc, target) {
		    let b1 = mc.getBounds();
		    let b2 = target.getBounds();
		    if (!b1 || !b2) return false;
		    let p1 = mc.localToGlobal(b1.x, b1.y);
		    let p2 = target.localToGlobal(b2.x, b2.y);
		
		    return !(p1.x + b1.width < p2.x ||
		             p1.x > p2.x + b2.width ||
		             p1.y + b1.height < p2.y ||
		             p1.y > p2.y + b2.height);
		}
		function enableDrag(mc, isCorrect, nextLabel) {
		    mc.startX = mc.x;
		    mc.startY = mc.y;
		
		    mc.on("mousedown", function(evt) {
		        root.addChild(mc);
		        mc.offset = {x: mc.x - evt.stageX, y: mc.y - evt.stageY};
		    });
		
		    mc.on("pressmove", function(evt) {
		        mc.x = evt.stageX + mc.offset.x;
		        mc.y = evt.stageY + mc.offset.y;
		    });
		
		    mc.on("pressup", function(evt) {
		        if (isHit(mc, dropZone)) {
		            if (isCorrect) {
		                createjs.Tween.get(mc).to({x: dropZone.x, y: dropZone.y}, 300)
		                    .call(function(){
		                        root.gotoAndStop("thanks");
		                    });
		            } else {
		                createjs.Tween.get(mc).to({x: mc.startX, y: mc.startY}, 300, createjs.Ease.backOut);
		            }
		        } else {
		            createjs.Tween.get(mc).to({x: mc.startX, y: mc.startY}, 300, createjs.Ease.backOut);
		        }
		    });
		}
		enableDrag(this.pentagon_mc4, false,  "thanks");
		enableDrag(this.square_mc4,   false, "thanks");
		enableDrag(this.star_mc4,     true, "thanks");
	}
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(20).call(this.frame_59).wait(20).call(this.frame_79).wait(20).call(this.frame_99).wait(21));

	// letter
	this.instance = new lib.Textmatching();
	this.instance.setTransform(400,146,0.1655,0.1478);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},19).wait(101));

	// Drag
	this.startBtn = new lib.startBtn();
	this.startBtn.name = "startBtn";
	this.startBtn.setTransform(744.4,388.2,1,1,0,0,0,214.4,77.2);
	new cjs.ButtonHelper(this.startBtn, 0, 1, 2, false, new lib.startBtn(), 3);

	this.dropZone_mc = new lib.drop_btn();
	this.dropZone_mc.name = "dropZone_mc";
	this.dropZone_mc.setTransform(887,266,1,1,0,0,0,140,70);

	this.star_mc = new lib.star_btn();
	this.star_mc.name = "star_mc";
	this.star_mc.setTransform(956,568,1,1,0,0,0,140,70);

	this.heart_mc = new lib.heart_btn();
	this.heart_mc.name = "heart_mc";
	this.heart_mc.setTransform(653,568,1,1,0,0,0,140,70);

	this.pentagon_mc = new lib.pentagon_btn();
	this.pentagon_mc.name = "pentagon_mc";
	this.pentagon_mc.setTransform(340,568,1,1,0,0,0,140,70);

	this.dropZone_mc_1 = new lib.dropZone2();
	this.dropZone_mc_1.name = "dropZone_mc_1";
	this.dropZone_mc_1.setTransform(892,276,1,1,0,0,0,140,70);

	this.star_mc2 = new lib.star_mc2();
	this.star_mc2.name = "star_mc2";
	this.star_mc2.setTransform(954,578,1,1,0,0,0,140,70);

	this.square_mc2 = new lib.square_mc();
	this.square_mc2.name = "square_mc2";
	this.square_mc2.setTransform(636,578,1,1,0,0,0,140,70);

	this.pentagon_mc2 = new lib.pentagon_mc2();
	this.pentagon_mc2.name = "pentagon_mc2";
	this.pentagon_mc2.setTransform(338,578,1,1,0,0,0,140,70);

	this.square_mc3 = new lib.square_mc3();
	this.square_mc3.name = "square_mc3";
	this.square_mc3.setTransform(636,578,1,1,0,0,0,140,70);

	this.star_mc3 = new lib.star_mc3();
	this.star_mc3.name = "star_mc3";
	this.star_mc3.setTransform(954,578,1,1,0,0,0,140,70);

	this.pentagon_mc3 = new lib.pentagon_mc3();
	this.pentagon_mc3.name = "pentagon_mc3";
	this.pentagon_mc3.setTransform(338,578,1,1,0,0,0,140,70);

	this.instance_1 = new lib.Blank();
	this.instance_1.setTransform(752,206,0.3522,0.3218);

	this.dropZone_mc_2 = new lib.dropZone3();
	this.dropZone_mc_2.name = "dropZone_mc_2";
	this.dropZone_mc_2.setTransform(892,276,1,1,0,0,0,140,70);

	this.square_mc2_1 = new lib.square_mc2();
	this.square_mc2_1.name = "square_mc2_1";
	this.square_mc2_1.setTransform(636,578,1,1,0,0,0,140,70);

	this.dropZone_mc4 = new lib.dropZone_mc4();
	this.dropZone_mc4.name = "dropZone_mc4";
	this.dropZone_mc4.setTransform(892,276,1,1,0,0,0,140,70);

	this.star_mc4 = new lib.star_mc4();
	this.star_mc4.name = "star_mc4";
	this.star_mc4.setTransform(954,578,1,1,0,0,0,140,70);

	this.square_mc4 = new lib.square_mc4();
	this.square_mc4.name = "square_mc4";
	this.square_mc4.setTransform(636,578,1,1,0,0,0,140,70);

	this.pentagon_mc4 = new lib.pentagon_mc4();
	this.pentagon_mc4.name = "pentagon_mc4";
	this.pentagon_mc4.setTransform(338,578,1,1,0,0,0,140,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.startBtn}]}).to({state:[{t:this.pentagon_mc},{t:this.heart_mc},{t:this.star_mc},{t:this.dropZone_mc}]},19).to({state:[{t:this.pentagon_mc2},{t:this.square_mc2},{t:this.star_mc2},{t:this.dropZone_mc_1}]},20).to({state:[{t:this.instance_1},{t:this.pentagon_mc3},{t:this.star_mc3},{t:this.square_mc3}]},20).to({state:[{t:this.pentagon_mc3},{t:this.square_mc2_1},{t:this.star_mc3},{t:this.dropZone_mc_2}]},1).to({state:[{t:this.pentagon_mc4},{t:this.square_mc4},{t:this.star_mc4},{t:this.dropZone_mc4}]},19).to({state:[]},20).wait(21));

	// background
	this.instance_2 = new lib.arrow();
	this.instance_2.setTransform(445,353,0.1963,0.1446);

	this.instance_3 = new lib.note_1();
	this.instance_3.setTransform(260,127,0.155,0.1421);

	this.instance_4 = new lib.backgorund();
	this.instance_4.setTransform(-140,-99,0.1895,0.1);

	this.instance_5 = new lib.arrow_1();
	this.instance_5.setTransform(546,206,0.2636,0.272);

	this.instance_6 = new lib.Heartshape();
	this.instance_6.setTransform(276,149,0.2397,0.2505);

	this.instance_7 = new lib.note();
	this.instance_7.setTransform(45,10,0.2428,0.239);

	this.instance_8 = new lib.Pentagon();
	this.instance_8.setTransform(242,150,0.2391,0.2494);

	this.instance_9 = new lib.Sqare();
	this.instance_9.setTransform(273,166,0.2391,0.2494);

	this.instance_10 = new lib.Star();
	this.instance_10.setTransform(242,162,0.2391,0.2494);

	this.instance_11 = new lib.asdasd();
	this.instance_11.setTransform(753,126,0.1974,0.1919);

	this.instance_12 = new lib.Thanks();
	this.instance_12.setTransform(-49,41,0.2296,0.2527);

	this.instance_13 = new lib.Seeya();
	this.instance_13.setTransform(668,66,0.183,0.1996);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).to({state:[{t:this.instance_4},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},19).to({state:[{t:this.instance_4},{t:this.instance_7},{t:this.instance_5},{t:this.instance_8}]},20).to({state:[{t:this.instance_4},{t:this.instance_7},{t:this.instance_5},{t:this.instance_9}]},20).to({state:[{t:this.instance_4},{t:this.instance_7},{t:this.instance_5},{t:this.instance_10}]},20).to({state:[{t:this.instance_4},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]},20).wait(21));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(500,261,912.3,459.29999999999995);
// library properties:
lib.properties = {
	id: '4E2CD7F775FDA247850B48EC6ADEAB6B',
	width: 1280,
	height: 720,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/asdasd.png?1759387023041", id:"asdasd"},
		{src:"images/backgorund.png?1759387023041", id:"backgorund"},
		{src:"images/buttonletsgo.png?1759387023041", id:"buttonletsgo"},
		{src:"images/note.png?1759387023041", id:"note"},
		{src:"images/note_1.png?1759387023041", id:"note_1"},
		{src:"images/Seeya.png?1759387023041", id:"Seeya"},
		{src:"images/Textmatching.png?1759387023041", id:"Textmatching"},
		{src:"images/Thanks.png?1759387023041", id:"Thanks"},
		{src:"images/Matching_atlas_1.png?1759387023017", id:"Matching_atlas_1"},
		{src:"images/Matching_atlas_2.png?1759387023017", id:"Matching_atlas_2"},
		{src:"sounds/clicksound.mp3?1759387023041", id:"clicksound"}
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
an.compositions['4E2CD7F775FDA247850B48EC6ADEAB6B'] = {
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