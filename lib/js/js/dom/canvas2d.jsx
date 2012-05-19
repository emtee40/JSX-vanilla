// CanvasRenderingContext2D

// http://www.w3.org/TR/2dcontext/

import "js/dom.jsx";
import "typedarray.jsx";

// generated from http://www.w3.org/TR/2dcontext/
native class CanvasRenderingContext2D  implements CanvasRenderingContext {
	// FIXME: delete function constructor();
	// back-reference to the canvas
	__readonly__ var canvas : HTMLCanvasElement;
	// state
	function save() : void;
	// push state on state stack
	function restore() : void;
	// pop state stack and restore state
	// compositing
	var globalAlpha : number/*double*/;
	// (default 1.0)
	var globalCompositeOperation : string/*DOMString*/;
	// (default source-over)
	// colors and styles (see also the CanvasLineStyles interface)
	var strokeStyle : variant/*any*/;
	// (default black)
	var fillStyle : variant/*any*/;
	// (default black)
	function createLinearGradient(
		x0 : number/*double*/,
		y0 : number/*double*/,
		x1 : number/*double*/,
		y1 : number/*double*/
	) : CanvasGradient;
	function createRadialGradient(
		x0 : number/*double*/,
		y0 : number/*double*/,
		r0 : number/*double*/,
		x1 : number/*double*/,
		y1 : number/*double*/,
		r1 : number/*double*/
	) : CanvasGradient;
	function createPattern(
		image : HTMLVideoElement,
		repetition : string/*DOMString*/
	) : CanvasPattern;
	function createPattern(
		image : HTMLCanvasElement,
		repetition : string/*DOMString*/
	) : CanvasPattern;
	function createPattern(
		image : HTMLImageElement,
		repetition : string/*DOMString*/
	) : CanvasPattern;
	// shadows
	var shadowOffsetX : number/*double*/;
	// (default 0)
	var shadowOffsetY : number/*double*/;
	// (default 0)
	var shadowBlur : number/*double*/;
	// (default 0)
	var shadowColor : string/*DOMString*/;
	// (default transparent black)
	// rects
	function clearRect(
		x : number/*double*/,
		y : number/*double*/,
		w : number/*double*/,
		h : number/*double*/
	) : void;
	function fillRect(
		x : number/*double*/,
		y : number/*double*/,
		w : number/*double*/,
		h : number/*double*/
	) : void;
	function strokeRect(
		x : number/*double*/,
		y : number/*double*/,
		w : number/*double*/,
		h : number/*double*/
	) : void;
	// current default path API (see also CanvasPathMethods)
	function beginPath() : void;
	function fill() : void;
	function stroke() : void;
	function drawSystemFocusRing(element : Element) : void;
	function drawCustomFocusRing(element : Element) : boolean;
	function scrollPathIntoView() : void;
	function clip() : void;
	function isPointInPath(
		x : number/*double*/,
		y : number/*double*/
	) : boolean;
	// text (see also the CanvasText interface)
	function fillText(
		text : string/*DOMString*/,
		x : number/*double*/,
		y : number/*double*/
	) : void;
	function fillText(
		text : string/*DOMString*/,
		x : number/*double*/,
		y : number/*double*/,
		maxWidth : number/*double*/
	) : void;
	function strokeText(
		text : string/*DOMString*/,
		x : number/*double*/,
		y : number/*double*/
	) : void;
	function strokeText(
		text : string/*DOMString*/,
		x : number/*double*/,
		y : number/*double*/,
		maxWidth : number/*double*/
	) : void;
	function measureText(text : string/*DOMString*/) : TextMetrics;
	// drawing images
	function drawImage(
		image : HTMLVideoElement,
		dx : number/*double*/,
		dy : number/*double*/
	) : void;
	function drawImage(
		image : HTMLCanvasElement,
		dx : number/*double*/,
		dy : number/*double*/
	) : void;
	function drawImage(
		image : HTMLImageElement,
		dx : number/*double*/,
		dy : number/*double*/
	) : void;
	function drawImage(
		image : HTMLVideoElement,
		dx : number/*double*/,
		dy : number/*double*/,
		dw : number/*double*/,
		dh : number/*double*/
	) : void;
	function drawImage(
		image : HTMLCanvasElement,
		dx : number/*double*/,
		dy : number/*double*/,
		dw : number/*double*/,
		dh : number/*double*/
	) : void;
	function drawImage(
		image : HTMLImageElement,
		dx : number/*double*/,
		dy : number/*double*/,
		dw : number/*double*/,
		dh : number/*double*/
	) : void;
	function drawImage(
		image : HTMLVideoElement,
		sx : number/*double*/,
		sy : number/*double*/,
		sw : number/*double*/,
		sh : number/*double*/,
		dx : number/*double*/,
		dy : number/*double*/,
		dw : number/*double*/,
		dh : number/*double*/
	) : void;
	function drawImage(
		image : HTMLCanvasElement,
		sx : number/*double*/,
		sy : number/*double*/,
		sw : number/*double*/,
		sh : number/*double*/,
		dx : number/*double*/,
		dy : number/*double*/,
		dw : number/*double*/,
		dh : number/*double*/
	) : void;
	function drawImage(
		image : HTMLImageElement,
		sx : number/*double*/,
		sy : number/*double*/,
		sw : number/*double*/,
		sh : number/*double*/,
		dx : number/*double*/,
		dy : number/*double*/,
		dw : number/*double*/,
		dh : number/*double*/
	) : void;
	// pixel manipulation
	function createImageData(
		sw : number/*double*/,
		sh : number/*double*/
	) : ImageData;
	function createImageData(imagedata : ImageData) : ImageData;
	function getImageData(
		sx : number/*double*/,
		sy : number/*double*/,
		sw : number/*double*/,
		sh : number/*double*/
	) : ImageData;
	function putImageData(
		imagedata : ImageData,
		dx : number/*double*/,
		dy : number/*double*/
	) : void;
	function putImageData(
		imagedata : ImageData,
		dx : number/*double*/,
		dy : number/*double*/,
		dirtyX : number/*double*/,
		dirtyY : number/*double*/,
		dirtyWidth : number/*double*/,
		dirtyHeight : number/*double*/
	) : void;


	// CanvasRenderingContext2D implements CanvasTransformation;
	// transformations (default transform is the identity matrix)
	function scale(x : number/*double*/, y : number/*double*/) : void;
	function rotate(angle : number/*double*/) : void;
	function translate(
		x : number/*double*/,
		y : number/*double*/
	) : void;
	function transform(
		a : number/*double*/,
		b : number/*double*/,
		c : number/*double*/,
		d : number/*double*/,
		e : number/*double*/,
		f : number/*double*/
	) : void;
	function setTransform(
		a : number/*double*/,
		b : number/*double*/,
		c : number/*double*/,
		d : number/*double*/,
		e : number/*double*/,
		f : number/*double*/
	) : void;

	// CanvasRenderingContext2D implements CanvasLineStyles;
	// line caps/joins
	var lineWidth : number/*double*/;
	// (default 1)
	var lineCap : string/*DOMString*/;
	// "butt", "round", "square" (default "butt")
	var lineJoin : string/*DOMString*/;
	// "round", "bevel", "miter" (default "miter")
	var miterLimit : number/*double*/;
	// (default 10)

	// CanvasRenderingContext2D implements CanvasPathMethods;
	// shared path API methods
	function closePath() : void;
	function moveTo(x : number/*double*/, y : number/*double*/) : void;
	function lineTo(x : number/*double*/, y : number/*double*/) : void;
	function quadraticCurveTo(
		cpx : number/*double*/,
		cpy : number/*double*/,
		x : number/*double*/,
		y : number/*double*/
	) : void;
	function bezierCurveTo(
		cp1x : number/*double*/,
		cp1y : number/*double*/,
		cp2x : number/*double*/,
		cp2y : number/*double*/,
		x : number/*double*/,
		y : number/*double*/
	) : void;
	function arcTo(
		x1 : number/*double*/,
		y1 : number/*double*/,
		x2 : number/*double*/,
		y2 : number/*double*/,
		radius : number/*double*/
	) : void;
	function rect(
		x : number/*double*/,
		y : number/*double*/,
		w : number/*double*/,
		h : number/*double*/
	) : void;
	function arc(
		x : number/*double*/,
		y : number/*double*/,
		radius : number/*double*/,
		startAngle : number/*double*/,
		endAngle : number/*double*/
	) : void;
	function arc(
		x : number/*double*/,
		y : number/*double*/,
		radius : number/*double*/,
		startAngle : number/*double*/,
		endAngle : number/*double*/,
		anticlockwise : boolean
	) : void;

	// CanvasRenderingContext2D implements CanvasText;
	// text
	var font : string/*DOMString*/;
	// (default 10px sans-serif)
	var textAlign : string/*DOMString*/;
	// "start", "end", "left", "right", "center" (default: "start")
	var textBaseline : string/*DOMString*/;
	// "top", "hanging", "middle", "alphabetic", "ideographic", "bottom" (default: "alphabetic")
}

native class CanvasGradient {
	// FIXME: delete function constructor();
	// opaque object
	function addColorStop(
		offset : number/*double*/,
		color : string/*DOMString*/
	) : void;
}

native class CanvasPattern {
	// FIXME: delete function constructor();
	// opaque object
}

native class TextMetrics {
	// FIXME: delete function constructor();
	__readonly__ var width : number/*double*/;
}

native class ImageData {
	// FIXME: delete function constructor();
	__readonly__ var width : int/*unsigned long*/;
	__readonly__ var height : int/*unsigned long*/;
	__readonly__ var data : Uint8ClampedArray;
}

