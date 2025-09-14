(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.badania = function() {
	this.initialize(img.badania);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,595,595);


(lib.bgu = function() {
	this.initialize(img.bgu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1921,1921);


(lib.biogaia = function() {
	this.initialize(img.biogaia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,654,227);


(lib.bulletsu1 = function() {
	this.initialize(img.bulletsu1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,367,261);


(lib.bulletsu2 = function() {
	this.initialize(img.bulletsu2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,250);


(lib.claim = function() {
	this.initialize(img.claim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,930,180);


(lib.legalu = function() {
	this.initialize(img.legalu);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1120,300);


(lib.patent = function() {
	this.initialize(img.patent);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,401,401);


(lib.probiotics = function() {
	this.initialize(img.probiotics);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1080,1080);


(lib.Protectisdrops = function() {
	this.initialize(img.Protectisdrops);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,473);


(lib.Protectistabs = function() {
	this.initialize(img.Protectistabs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,694,333);


(lib.serce = function() {
	this.initialize(img.serce);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,204);


(lib.sprawdz = function() {
	this.initialize(img.sprawdz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,709,216);


(lib.znaczek = function() {
	this.initialize(img.znaczek);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,316,476);// helper functions:

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


(lib.stamp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.instance = new lib.patent();
	this.instance.setTransform(-66,-66,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stamp, new cjs.Rectangle(-66,-66,132.3,132.3), null);


(lib.sprawdz_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.instance = new lib.sprawdz();
	this.instance.setTransform(-141.8,-43.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sprawdz_1, new cjs.Rectangle(-141.8,-43.2,283.6,86.4), null);


(lib.serce_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.instance = new lib.serce();
	this.instance.setTransform(-27,-8.1,0.1997,0.1997,-30.0544);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.serce_1, new cjs.Rectangle(-27,-27.6,54.1,54.8), null);


(lib.probiotics_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.instance = new lib.probiotics();
	this.instance.setTransform(-270,-270,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.probiotics_1, new cjs.Rectangle(-270,-270,540,540), null);


(lib.packs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.instance = new lib.Protectistabs();
	this.instance.setTransform(-79,-58,0.5,0.5);

	this.instance_1 = new lib.Protectisdrops();
	this.instance_1.setTransform(-253,-118,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.packs, new cjs.Rectangle(-253,-118,521,236.5), null);


(lib.legalu_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// legal_u_png
	this.instance = new lib.legalu();
	this.instance.setTransform(-126,-27,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// znaczek_png
	this.instance_1 = new lib.znaczek();
	this.instance_1.setTransform(-322.5,-95.2,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legalu_1, new cjs.Rectangle(-559.2,-95.2,1289.5,199.2), null);


(lib.claim_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.instance = new lib.claim();
	this.instance.setTransform(-306.9,-59.4,0.66,0.66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.claim_1, new cjs.Rectangle(-306.9,-59.4,613.8,118.8), null);


(lib.circle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.instance = new lib.badania();
	this.instance.setTransform(-98,-98,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.circle, new cjs.Rectangle(-98,-98,196.3,196.3), null);


(lib.bg1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.instance = new lib.bgu();
	this.instance.setTransform(-672,-672,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(-672,-672,1344.7,1344.7), null);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.instance = new lib.sprawdz_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},24,cjs.Ease.quadInOut).to({scaleX:1,scaleY:1},25,cjs.Ease.quadInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-47.5,312,95);


(lib.bullets22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_4
	this.instance = new lib.serce_1();
	this.instance.setTransform(-170.05,24.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Warstwa_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3NImIgJxLMAujAAAIAKRLg");
	mask.setTransform(0.5,55);

	// bullets_u1_png
	this.instance_1 = new lib.bulletsu2();
	this.instance_1.setTransform(-128,-88,0.7,0.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bullets22, new cjs.Rectangle(-197,-3.1,307,90.1), null);


(lib.bullets21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_4
	this.instance = new lib.serce_1();
	this.instance.setTransform(-170.05,-75.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Warstwa_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3NImIgJxLMAujAAAIAKRLg");
	mask.setTransform(0.5,-55);

	// bullets_u1_png
	this.instance_1 = new lib.bulletsu2();
	this.instance_1.setTransform(-128,-88,0.7,0.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bullets21, new cjs.Rectangle(-197,-103.1,307,103.1), null);


(lib.bullets13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_2
	this.instance = new lib.serce_1();
	this.instance.setTransform(-170.05,40.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Warstwa_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3RIcIAAw3MAujAAAIAAQ3g");
	mask.setTransform(0,69.175);

	// bullets_u1_png
	this.instance_1 = new lib.bulletsu1();
	this.instance_1.setTransform(-128,-81.85,0.7,0.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bullets13, new cjs.Rectangle(-197,12.9,325.9,88), null);


(lib.bullets12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_2
	this.instance = new lib.serce_1();
	this.instance.setTransform(-170.05,-19.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Warstwa_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3REEIAAoHMAujAAAIAAIHg");
	mask.setTransform(0,-14.85);

	// bullets_u1_png
	this.instance_1 = new lib.bulletsu1();
	this.instance_1.setTransform(-128,-81.85,0.7,0.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bullets12, new cjs.Rectangle(-197,-47.1,325.9,58.3), null);


(lib.bullets11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_4
	this.instance = new lib.serce_1();
	this.instance.setTransform(-170.05,-79.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Warstwa_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3REEIAAoHMAujAAAIAAIHg");
	mask.setTransform(0,-74.85);

	// bullets_u1_png
	this.instance_1 = new lib.bulletsu1();
	this.instance_1.setTransform(-128,-81.85,0.7,0.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bullets11, new cjs.Rectangle(-197,-107.1,325.9,58.3), null);


(lib.bullets2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1___kopia
	this.instance = new lib.bullets22();
	this.instance.setTransform(80,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:0,alpha:1},24,cjs.Ease.quartOut).wait(16).to({_off:true},1).wait(64).to({_off:false},0).wait(1));

	// Warstwa_1
	this.instance_1 = new lib.bullets21();
	this.instance_1.setTransform(80,0);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:0,alpha:1},24,cjs.Ease.quartOut).wait(35).to({_off:true},1).wait(64).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197,-110,427.1,220);


(lib.bullets1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1___kopia___kopia
	this.instance = new lib.bullets13();
	this.instance.setTransform(80,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:0,alpha:1},24,cjs.Ease.quartOut).wait(46).to({_off:true},1).wait(24).to({_off:false},0).wait(1));

	// Warstwa_1___kopia
	this.instance_1 = new lib.bullets12();
	this.instance_1.setTransform(80,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:0,alpha:1},24,cjs.Ease.quartOut).wait(61).to({_off:true},1).wait(24).to({_off:false},0).wait(1));

	// Warstwa_1
	this.instance_2 = new lib.bullets11();
	this.instance_2.setTransform(80,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:0,alpha:1},24,cjs.Ease.quartOut).wait(75).to({_off:true},1).wait(24).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197,-107.1,426.1,230.3);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.instance = new lib.probiotics_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},1499).wait(1));

	// Warstwa_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAEA").s().p("Eh8/B9AMAAAj5/MD5/AAAMAAAD5/g");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1500));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-800,-800,1600.1,1600);


(lib.anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {go:74};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_274 = function() {
		this.gotoAndPlay("go");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(274).call(this.frame_274).wait(26));

	// bullets2
	this.instance = new lib.bullets2("synched",0,false);
	this.instance.setTransform(-108.45,-330.55,1.1,1.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).wait(60).to({mode:"single",startPosition:124},0).to({alpha:0},15).to({_off:true},1).wait(85));

	// bullets1
	this.instance_1 = new lib.bullets1("synched",0,false);
	this.instance_1.setTransform(-108.45,-330.55,1.1,1.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(100).to({mode:"single",startPosition:124},0).to({alpha:0},15).to({_off:true},1).wait(74).to({_off:false,alpha:1,mode:"synched",startPosition:0,loop:false},0).wait(86));

	// stamp
	this.instance_2 = new lib.stamp();
	this.instance_2.setTransform(259.15,-488.85,2,2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},24,cjs.Ease.backOut).wait(91).to({alpha:0},15).wait(86));

	// circle
	this.instance_3 = new lib.circle();
	this.instance_3.setTransform(199,-360.95,1.5,1.5,0,0,0,0.1,-0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,y:-361,alpha:1},24,cjs.Ease.cubicOut).wait(101).to({alpha:0},15).wait(86));

	// packs
	this.instance_4 = new lib.packs();
	this.instance_4.setTransform(-2.75,-20.15,1.3,1.3,0,0,0,-0.4,-0.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-0.1,regY:-0.1,scaleX:1.1,scaleY:1.1,x:-2.8,y:-20.25,alpha:1},49,cjs.Ease.quartOut).wait(75).to({scaleX:1.0999,scaleY:1.0999,x:-2.75,y:-20.2},0).to({regY:-0.2,scaleX:1,scaleY:1,x:-2.8,y:-20.25},10,cjs.Ease.cubicInOut).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:-2.75},15,cjs.Ease.cubicOut).wait(50).to({regX:-0.1,regY:-0.2,x:-2.7,y:-20.2},0).to({regX:-0.2,scaleX:1,scaleY:1,x:-2.8},10,cjs.Ease.cubicInOut).to({regX:-0.1,regY:-0.1,scaleX:1.1,scaleY:1.1,y:-20.25},15,cjs.Ease.cubicOut).wait(76));

	// claim
	this.instance_5 = new lib.claim_1();
	this.instance_5.setTransform(0.85,240.15,0.8,0.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1).to({scaleX:0.8376,scaleY:0.8376,x:0.8485,y:240.1485,alpha:0.0417},0).wait(1).to({scaleX:0.8674,scaleY:0.8674,x:0.8475,y:240.1475,alpha:0.0833},0).wait(1).to({scaleX:0.8913,scaleY:0.8913,x:0.8467,y:240.1467,alpha:0.125},0).wait(1).to({scaleX:0.9107,scaleY:0.9107,x:0.8461,y:240.1461,alpha:0.1667},0).wait(1).to({scaleX:0.9266,scaleY:0.9266,x:0.8458,y:240.1458,alpha:0.2083},0).wait(1).to({scaleX:0.9396,scaleY:0.9396,x:0.8455,y:240.1455,alpha:0.25},0).wait(1).to({scaleX:0.9505,scaleY:0.9505,x:0.8454,y:240.1454,alpha:0.2917},0).wait(1).to({scaleX:0.9595,scaleY:0.9595,alpha:0.3333},0).wait(1).to({scaleX:0.967,scaleY:0.967,alpha:0.375},0).wait(1).to({scaleX:0.9733,scaleY:0.9733,x:0.8455,y:240.1455,alpha:0.4167},0).wait(1).to({scaleX:0.9785,scaleY:0.9785,x:0.8457,y:240.1457,alpha:0.4583},0).wait(1).to({scaleX:0.9829,scaleY:0.9829,x:0.8459,y:240.1459,alpha:0.5},0).wait(1).to({scaleX:0.9866,scaleY:0.9866,x:0.8461,y:240.1461,alpha:0.5417},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:0.8464,y:240.1464,alpha:0.5833},0).wait(1).to({scaleX:0.9921,scaleY:0.9921,x:0.8466,y:240.1466,alpha:0.625},0).wait(1).to({scaleX:0.9941,scaleY:0.9941,x:0.847,y:240.147,alpha:0.6667},0).wait(1).to({scaleX:0.9957,scaleY:0.9957,x:0.8473,y:240.1473,alpha:0.7083},0).wait(1).to({scaleX:0.9971,scaleY:0.9971,x:0.8476,y:240.1476,alpha:0.75},0).wait(1).to({scaleX:0.9981,scaleY:0.9981,x:0.848,y:240.148,alpha:0.7917},0).wait(1).to({scaleX:0.9988,scaleY:0.9988,x:0.8484,y:240.1484,alpha:0.8333},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,x:0.8488,y:240.1488,alpha:0.875},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,x:0.8492,y:240.1492,alpha:0.9167},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,x:0.8496,y:240.1496,alpha:0.9583},0).wait(1).to({scaleX:1,scaleY:1,x:0.9,y:240.2,alpha:1},0).wait(272));

	// cta
	this.instance_6 = new lib.cta();
	this.instance_6.setTransform(-0.15,380,0.8,0.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).wait(1).to({scaleX:0.8376,scaleY:0.8376,x:-0.1485,y:379.9965,alpha:0.0417},0).wait(1).to({scaleX:0.8674,scaleY:0.8674,x:-0.1475,y:379.9933,alpha:0.0833},0).wait(1).to({scaleX:0.8913,scaleY:0.8913,x:-0.1467,y:379.9904,alpha:0.125},0).wait(1).to({scaleX:0.9107,scaleY:0.9107,x:-0.1461,y:379.9878,alpha:0.1667},0).wait(1).to({scaleX:0.9266,scaleY:0.9266,x:-0.1458,y:379.9853,alpha:0.2083},0).wait(1).to({scaleX:0.9396,scaleY:0.9396,x:-0.1455,y:379.983,alpha:0.25},0).wait(1).to({scaleX:0.9505,scaleY:0.9505,x:-0.1454,y:379.9808,alpha:0.2917},0).wait(1).to({scaleX:0.9595,scaleY:0.9595,y:379.9787,alpha:0.3333},0).wait(1).to({scaleX:0.967,scaleY:0.967,y:379.9766,alpha:0.375},0).wait(1).to({scaleX:0.9733,scaleY:0.9733,x:-0.1455,y:379.9747,alpha:0.4167},0).wait(1).to({scaleX:0.9785,scaleY:0.9785,x:-0.1457,y:379.9727,alpha:0.4583},0).wait(1).to({scaleX:0.9829,scaleY:0.9829,x:-0.1459,y:379.9709,alpha:0.5},0).wait(1).to({scaleX:0.9866,scaleY:0.9866,x:-0.1461,y:379.969,alpha:0.5417},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:-0.1464,y:379.9672,alpha:0.5833},0).wait(1).to({scaleX:0.9921,scaleY:0.9921,x:-0.1466,y:379.9654,alpha:0.625},0).wait(1).to({scaleX:0.9941,scaleY:0.9941,x:-0.147,y:379.9636,alpha:0.6667},0).wait(1).to({scaleX:0.9957,scaleY:0.9957,x:-0.1473,y:379.9619,alpha:0.7083},0).wait(1).to({scaleX:0.9971,scaleY:0.9971,x:-0.1476,y:379.9601,alpha:0.75},0).wait(1).to({scaleX:0.9981,scaleY:0.9981,x:-0.148,y:379.9584,alpha:0.7917},0).wait(1).to({scaleX:0.9988,scaleY:0.9988,x:-0.1484,y:379.9567,alpha:0.8333},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,x:-0.1488,y:379.955,alpha:0.875},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,x:-0.1492,y:379.9533,alpha:0.9167},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,x:-0.1496,y:379.9517,alpha:0.9583},0).wait(1).to({scaleX:1,scaleY:1,x:-0.2,y:380,alpha:1},0).wait(267));

	// biogaia
	this.instance_7 = new lib.biogaia();
	this.instance_7.setTransform(-318,-598,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(300));

	// legal
	this.instance_8 = new lib.legalu_1();
	this.instance_8.setTransform(88,519.6,1,1,0,0,0,85.5,4.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(300));

	// bg
	this.instance_9 = new lib.bg();
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(134).to({_off:false},0).to({alpha:1},15).wait(50).to({alpha:0},15).to({_off:true},11).wait(75));

	// bg1
	this.instance_10 = new lib.bg1();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(300));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-800,-800,1600.1,1600);


// stage content:
(lib.biogaiainterstitialumbrella = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.instance = new lib.anim();
	this.instance.setTransform(359.5,639.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(47.5,607.5,984.7,704.7);
// library properties:
lib.properties = {
	id: '656CB5A9D5984920BC82F84A2414D442',
	width: 720,
	height: 1280,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./badania.png", id:"badania"},
		{src:"./bgu.png", id:"bgu"},
		{src:"./biogaia.png", id:"biogaia"},
		{src:"./bulletsu1.png", id:"bulletsu1"},
		{src:"./bulletsu2.png", id:"bulletsu2"},
		{src:"./claim.png", id:"claim"},
		{src:"./legalu.png", id:"legalu"},
		{src:"./patent.png", id:"patent"},
		{src:"./probiotics.jpg", id:"probiotics"},
		{src:"./Protectisdrops.png", id:"Protectisdrops"},
		{src:"./Protectistabs.png", id:"Protectistabs"},
		{src:"./serce.png", id:"serce"},
		{src:"./sprawdz.png", id:"sprawdz"},
		{src:"./znaczek.png", id:"znaczek"}
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
an.compositions['656CB5A9D5984920BC82F84A2414D442'] = {
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