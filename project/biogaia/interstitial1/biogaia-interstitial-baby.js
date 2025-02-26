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


(lib.bgb = function() {
	this.initialize(img.bgb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1921,1921);


(lib.biogaia = function() {
	this.initialize(img.biogaia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,654,227);


(lib.bulletsb1 = function() {
	this.initialize(img.bulletsb1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,410,179);


(lib.bulletsb2 = function() {
	this.initialize(img.bulletsb2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,349,306);


(lib.claim = function() {
	this.initialize(img.claim);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,930,180);


(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1097,20);


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


(lib.serce = function() {
	this.initialize(img.serce);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,195,204);


(lib.sprawdz = function() {
	this.initialize(img.sprawdz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,709,216);


(lib.sygnaturab = function() {
	this.initialize(img.sygnaturab);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,14);// helper functions:

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
	this.instance = new lib.Protectisdrops();
	this.instance.setTransform(-116,-165,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.packs, new cjs.Rectangle(-116,-165,232.4,331.1), null);


(lib.legal_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_2___kopia (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnaACMIAAkXMBO1AAAIAAEXg");
	mask.setTransform(-0.025,1.025);

	// Warstwa_1___kopia
	this.instance = new lib.legal();
	this.instance.setTransform(-251,-10);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Warstwa_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EguIACMIAAkXMBcRAAAIAAEXg");
	mask_1.setTransform(0,24.025);

	// Warstwa_1
	this.instance_1 = new lib.legal();
	this.instance_1.setTransform(-802,15);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(-295.3,-10,590.3,45), null);


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
	this.instance = new lib.bgb();
	this.instance.setTransform(-672,-672,0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg1, new cjs.Rectangle(-672,-672,1344.7,1344.7), null);


(lib.serca = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1___kopia___kopia___kopia
	this.instance = new lib.serce_1();
	this.instance.setTransform(208.05,99.9,0.6989,0.6989,45,0,0,0.2,-0.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({regX:0.1,regY:-0.4,scaleX:1.4977,scaleY:1.4977,x:208.15,y:99.95,alpha:1},24,cjs.Ease.backOut).wait(62));

	// Warstwa_1___kopia___kopia
	this.instance_1 = new lib.serce_1();
	this.instance_1.setTransform(68,-100.1,0.699,0.699,15.0001,0,0,0.1,-0.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regY:-0.4,scaleX:1.4978,scaleY:1.4978,rotation:15.0009,x:68.2,alpha:1},24,cjs.Ease.backOut).wait(72));

	// Warstwa_1___kopia
	this.instance_2 = new lib.serce_1();
	this.instance_2.setTransform(152.1,-0.05,0.9986,0.9986,30.0476,0,0,0.1,-0.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({regY:-0.3,scaleX:1.9971,scaleY:1.9971,x:152.15,y:0,alpha:1},24,cjs.Ease.backOut).wait(82));

	// Warstwa_1
	this.instance_3 = new lib.serce_1();
	this.instance_3.setTransform(0.1,0.05,1.4978,1.4978,30.0484,0,0,0.1,-0.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:2.4999,scaleY:2.4999,rotation:30.0004,alpha:1},24,cjs.Ease.backOut).wait(92));

	// Warstwa_1___kopia
	this.instance_4 = new lib.serce_1();
	this.instance_4.setTransform(80.05,120,1.4978,1.4978,45,0,0,0.1,-0.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:2.4998,scaleY:2.4998,rotation:44.9993,x:80.1,alpha:1},24,cjs.Ease.backOut).wait(101));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.7,-149.9,358.3,366);


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
	this.instance.setTransform(-170.05,-18.65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Warstwa_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3MImIgKxLMAukAAAIAKRLg");
	mask.setTransform(13.7,11.9);

	// bullets_u1_png
	this.instance_1 = new lib.bulletsb1();
	this.instance_1.setTransform(-128,-88,0.7,0.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bullets22, new cjs.Rectangle(-197,-46.2,356,83.5), null);


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
	mask.setTransform(0.5,-98.1);

	// bullets_u1_png
	this.instance_1 = new lib.bulletsb1();
	this.instance_1.setTransform(-128,-88,0.7,0.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bullets21, new cjs.Rectangle(-197,-103.1,347.1,59.99999999999999), null);


(lib.bullets14 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(-170.05,100.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Warstwa_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3RFUIAAqnMAujAAAIAAKng");
	mask.setTransform(0,112.9);

	// bullets_u1_png
	this.instance_1 = new lib.bulletsb2();
	this.instance_1.setTransform(-128,-87,0.7,0.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bullets14, new cjs.Rectangle(-197,73.3,313.3,54.8), null);


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
	mask.graphics.p("A3RFUIAAqnMAujAAAIAAKng");
	mask.setTransform(0,49.15);

	// bullets_u1_png
	this.instance_1 = new lib.bulletsb2();
	this.instance_1.setTransform(-128,-87,0.7,0.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bullets13, new cjs.Rectangle(-197,12.9,313.3,70.3), null);


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
	this.instance_1 = new lib.bulletsb2();
	this.instance_1.setTransform(-128,-87,0.7,0.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bullets12, new cjs.Rectangle(-197,-47.1,313.3,58.3), null);


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
	this.instance_1 = new lib.bulletsb2();
	this.instance_1.setTransform(-128,-87,0.7,0.7);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bullets11, new cjs.Rectangle(-197,-107.1,313.3,58.3), null);


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

	// Warstwa_1___kopia___kopia___kopia
	this.instance = new lib.bullets14();
	this.instance.setTransform(80,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({x:0,alpha:1},24,cjs.Ease.quartOut).wait(16).to({_off:true},1).wait(39).to({_off:false},0).wait(1));

	// Warstwa_1___kopia___kopia
	this.instance_1 = new lib.bullets13();
	this.instance_1.setTransform(80,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({x:0,alpha:1},24,cjs.Ease.quartOut).wait(31).to({_off:true},1).wait(39).to({_off:false},0).wait(1));

	// Warstwa_1___kopia
	this.instance_2 = new lib.bullets12();
	this.instance_2.setTransform(80,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({x:0,alpha:1},24,cjs.Ease.quartOut).wait(46).to({_off:true},1).wait(39).to({_off:false},0).wait(1));

	// Warstwa_1
	this.instance_3 = new lib.bullets11();
	this.instance_3.setTransform(80,0);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:0,alpha:1},24,cjs.Ease.quartOut).wait(60).to({_off:true},1).wait(39).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197,-107.1,426.1,254);


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

	// Warstwa_1___kopia
	this.instance = new lib.bullets22();
	this.instance.setTransform(80,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:0,alpha:1},24,cjs.Ease.quartOut).wait(56).to({_off:true},1).wait(24).to({_off:false},0).wait(1));

	// Warstwa_1
	this.instance_1 = new lib.bullets21();
	this.instance_1.setTransform(80,0);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:0,alpha:1},24,cjs.Ease.quartOut).wait(75).to({_off:true},1).wait(24).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197,-153.1,440.3,220);


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
	this.frame_299 = function() {
		this.gotoAndPlay("go");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(299).call(this.frame_299).wait(26));

	// bullets2
	this.instance = new lib.bullets2("synched",0,false);
	this.instance.setTransform(-108.45,-350.55,1.1,1.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).wait(85).to({mode:"single",startPosition:124},0).to({alpha:0},15).to({_off:true},1).wait(85));

	// bullets1
	this.instance_1 = new lib.bullets1("synched",0,false);
	this.instance_1.setTransform(-108.45,-310.55,1.1,1.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(100).to({mode:"single",startPosition:124},0).to({alpha:0},15).to({_off:true},1).wait(99).to({_off:false,alpha:1,mode:"synched",startPosition:0,loop:false},0).wait(86));

	// stamp
	this.instance_2 = new lib.stamp();
	this.instance_2.setTransform(259.15,-468.85,2,2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},24,cjs.Ease.backOut).wait(116).to({alpha:0},15).wait(86));

	// circle
	this.instance_3 = new lib.circle();
	this.instance_3.setTransform(199,-340.95,1.5,1.5,0,0,0,0.1,-0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(74).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,y:-341,alpha:1},24,cjs.Ease.cubicOut).wait(126).to({alpha:0},15).wait(86));

	// packs
	this.instance_4 = new lib.packs();
	this.instance_4.setTransform(-2.75,-0.15,1.3,1.3,0,0,0,-0.4,-0.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:-0.1,regY:-0.1,scaleX:1.1,scaleY:1.1,x:-2.8,y:-0.25,alpha:1},49,cjs.Ease.quartOut).wait(75).to({scaleX:1.0999,scaleY:1.0999,x:-2.75,y:-0.2},0).to({regY:-0.2,scaleX:1,scaleY:1,x:-2.8,y:-0.25},10,cjs.Ease.cubicInOut).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:-2.75},15,cjs.Ease.cubicOut).wait(75).to({regX:-0.1,regY:-0.2,x:-2.7,y:-0.2},0).to({regX:-0.2,scaleX:1,scaleY:1,x:-2.8},10,cjs.Ease.cubicInOut).to({regX:-0.1,regY:-0.1,scaleX:1.1,scaleY:1.1,y:-0.25},15,cjs.Ease.cubicOut).wait(76));

	// claim
	this.instance_5 = new lib.claim_1();
	this.instance_5.setTransform(0.85,280.35,0.8,0.8);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(1).to({scaleX:0.8376,scaleY:0.8376,x:0.8485,y:280.3485,alpha:0.0417},0).wait(1).to({scaleX:0.8674,scaleY:0.8674,x:0.8475,y:280.3475,alpha:0.0833},0).wait(1).to({scaleX:0.8913,scaleY:0.8913,x:0.8467,y:280.3467,alpha:0.125},0).wait(1).to({scaleX:0.9107,scaleY:0.9107,x:0.8461,y:280.3461,alpha:0.1667},0).wait(1).to({scaleX:0.9266,scaleY:0.9266,x:0.8458,y:280.3458,alpha:0.2083},0).wait(1).to({scaleX:0.9396,scaleY:0.9396,x:0.8455,y:280.3455,alpha:0.25},0).wait(1).to({scaleX:0.9505,scaleY:0.9505,x:0.8454,y:280.3454,alpha:0.2917},0).wait(1).to({scaleX:0.9595,scaleY:0.9595,alpha:0.3333},0).wait(1).to({scaleX:0.967,scaleY:0.967,alpha:0.375},0).wait(1).to({scaleX:0.9733,scaleY:0.9733,x:0.8455,y:280.3455,alpha:0.4167},0).wait(1).to({scaleX:0.9785,scaleY:0.9785,x:0.8457,y:280.3457,alpha:0.4583},0).wait(1).to({scaleX:0.9829,scaleY:0.9829,x:0.8459,y:280.3459,alpha:0.5},0).wait(1).to({scaleX:0.9866,scaleY:0.9866,x:0.8461,y:280.3461,alpha:0.5417},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:0.8464,y:280.3464,alpha:0.5833},0).wait(1).to({scaleX:0.9921,scaleY:0.9921,x:0.8466,y:280.3466,alpha:0.625},0).wait(1).to({scaleX:0.9941,scaleY:0.9941,x:0.847,y:280.347,alpha:0.6667},0).wait(1).to({scaleX:0.9957,scaleY:0.9957,x:0.8473,y:280.3473,alpha:0.7083},0).wait(1).to({scaleX:0.9971,scaleY:0.9971,x:0.8476,y:280.3476,alpha:0.75},0).wait(1).to({scaleX:0.9981,scaleY:0.9981,x:0.848,y:280.348,alpha:0.7917},0).wait(1).to({scaleX:0.9988,scaleY:0.9988,x:0.8484,y:280.3484,alpha:0.8333},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,x:0.8488,y:280.3488,alpha:0.875},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,x:0.8492,y:280.3492,alpha:0.9167},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,x:0.8496,y:280.3496,alpha:0.9583},0).wait(1).to({scaleX:1,scaleY:1,x:0.9,y:280.4,alpha:1},0).wait(297));

	// cta
	this.instance_6 = new lib.cta();
	this.instance_6.setTransform(-0.15,440.15,0.8,0.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).wait(1).to({scaleX:0.8376,scaleY:0.8376,x:-0.1485,y:440.1485,alpha:0.0417},0).wait(1).to({scaleX:0.8674,scaleY:0.8674,x:-0.1475,y:440.1475,alpha:0.0833},0).wait(1).to({scaleX:0.8913,scaleY:0.8913,x:-0.1467,y:440.1467,alpha:0.125},0).wait(1).to({scaleX:0.9107,scaleY:0.9107,x:-0.1461,y:440.1461,alpha:0.1667},0).wait(1).to({scaleX:0.9266,scaleY:0.9266,x:-0.1458,y:440.1458,alpha:0.2083},0).wait(1).to({scaleX:0.9396,scaleY:0.9396,x:-0.1455,y:440.1455,alpha:0.25},0).wait(1).to({scaleX:0.9505,scaleY:0.9505,x:-0.1454,y:440.1454,alpha:0.2917},0).wait(1).to({scaleX:0.9595,scaleY:0.9595,alpha:0.3333},0).wait(1).to({scaleX:0.967,scaleY:0.967,alpha:0.375},0).wait(1).to({scaleX:0.9733,scaleY:0.9733,x:-0.1455,y:440.1455,alpha:0.4167},0).wait(1).to({scaleX:0.9785,scaleY:0.9785,x:-0.1457,y:440.1457,alpha:0.4583},0).wait(1).to({scaleX:0.9829,scaleY:0.9829,x:-0.1459,y:440.1459,alpha:0.5},0).wait(1).to({scaleX:0.9866,scaleY:0.9866,x:-0.1461,y:440.1461,alpha:0.5417},0).wait(1).to({scaleX:0.9896,scaleY:0.9896,x:-0.1464,y:440.1464,alpha:0.5833},0).wait(1).to({scaleX:0.9921,scaleY:0.9921,x:-0.1466,y:440.1466,alpha:0.625},0).wait(1).to({scaleX:0.9941,scaleY:0.9941,x:-0.147,y:440.147,alpha:0.6667},0).wait(1).to({scaleX:0.9957,scaleY:0.9957,x:-0.1473,y:440.1473,alpha:0.7083},0).wait(1).to({scaleX:0.9971,scaleY:0.9971,x:-0.1476,y:440.1476,alpha:0.75},0).wait(1).to({scaleX:0.9981,scaleY:0.9981,x:-0.148,y:440.148,alpha:0.7917},0).wait(1).to({scaleX:0.9988,scaleY:0.9988,x:-0.1484,y:440.1484,alpha:0.8333},0).wait(1).to({scaleX:0.9994,scaleY:0.9994,x:-0.1488,y:440.1488,alpha:0.875},0).wait(1).to({scaleX:0.9997,scaleY:0.9997,x:-0.1492,y:440.1492,alpha:0.9167},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,x:-0.1496,y:440.1496,alpha:0.9583},0).wait(1).to({scaleX:1,scaleY:1,x:-0.2,y:440.2,alpha:1},0).wait(292));

	// biogaia
	this.instance_7 = new lib.biogaia();
	this.instance_7.setTransform(-318,-598,0.33,0.33);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(325));

	// legal
	this.instance_8 = new lib.sygnaturab();
	this.instance_8.setTransform(-61,601,0.8,0.8);

	this.instance_9 = new lib.legal_1();
	this.instance_9.setTransform(0,560,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(325));

	// bg
	this.instance_10 = new lib.bg();
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(134).to({_off:false},0).to({alpha:1},15).wait(75).to({alpha:0},15).to({_off:true},11).wait(75));

	// serca
	this.instance_11 = new lib.serca("synched",0,false);
	this.instance_11.setTransform(33.65,-179.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},224).wait(15).to({_off:false},0).wait(86));

	// bg1
	this.instance_12 = new lib.bg1();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(325));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-800,-800,1600.1,1600);


// stage content:
(lib.biogaiainterstitialbaby = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = new cjs.Rectangle(47.5,607.5,988.8,704.7);
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
		{src:"./bgb.png", id:"bgb"},
		{src:"./biogaia.png", id:"biogaia"},
		{src:"./bulletsb1.png", id:"bulletsb1"},
		{src:"./bulletsb2.png", id:"bulletsb2"},
		{src:"./claim.png", id:"claim"},
		{src:"./legal.png", id:"legal"},
		{src:"./patent.png", id:"patent"},
		{src:"./probiotics.jpg", id:"probiotics"},
		{src:"./Protectisdrops.png", id:"Protectisdrops"},
		{src:"./serce.png", id:"serce"},
		{src:"./sprawdz.png", id:"sprawdz"},
		{src:"./sygnaturab.png", id:"sygnaturab"}
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