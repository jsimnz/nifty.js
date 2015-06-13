Nifty.js - v0.1
==========

A JQuery plugin to create modal window effects based on [codrops](http://tympanus.net/Development/ModalWindowEffects/)

## What is it

Nifty.js is a simply jquery library designed to create modals with stunning css animations. This library and animations are based on the amazing work from [codrops](http://tympanus.net/Development/ModalWindowEffects). Nifty.js is very simple to the [Bootstrap Modal JS](http://getbootstrap.com/javascript/#modals) system.

## Install

Nifty.js requires jQuery (>= 1.8.0) (for now, will remove jQuery dependencies later).
Other then that, simply add the nifty.js (minified coming) to your project wherever you place your js

## Usage

Like mentioned above, Nifty.js works similar to [Bootstrap Modal JS](http://getbootstrap.com/javascript/#modals)

##### Button Trigger
Using `data-trigger` attributes and `data-target` on a button or anchor.
```
  <button data-trigger='modal' data-target='#modalID'>Show Modal</button>
```

##### Show Modal
```
  $("#modalID").nifty("show")
```

##### Hide Modal
```
  $("#modalID").nifty("hide")
```

##### Events
* `show.nifty.modal` - This event is fired immediately when the `show` method is called or when a button is clicked with a data-trigger attribute.
* `shown.nifty.modal` - This event is fired after the modal is finished showing. This waits for all the animations/transitions to finish.
* `hide.nifty.modal` - This event is fired immediately when the `hide` method is called, or when the `close` button on a modal is clicked.
* `hidden.nifty.modal` - This event is fired when the modal is finished being hidden and all animations/transitions are complete.


## Structure
The structure of the modal HTML is specific

```
<div class="nifty-modal [animation-class]" id="modal-1">
	<div class="md-content">
		<div class='md-title'>
			<h3>Modal Dialog</h3>
		</div>
		<div class='md-body'>
			<p>This is a modal window. You can do the following things with it:</p>
			<ul>
				<li><strong>Read:</strong> Modal windows will probably tell you something important so don't forget to read what it says.</li>
				<li><strong>Look:</strong> modal windows enjoy a certain kind of attention; just look at it and appreciate its presence.</li>
				<li><strong>Close:</strong> click on the button below to close the modal.</li>
			</ul>
			<button class="btn btn-primary md-close">Close me!</button>
		</div>
	</div>
</div>
```

An addition div is required (preferably at the bottom) to render the div into.
```
  <div class='md-overlay'></div>
```

## Animations

To specify the modal animation, you just add the desired animation class to the modal along with the `nifty-modal` class.

Animation Name | CSS Class
--- | ---
Fade In and Scale Up | `.fade-in-scale`
Slide from the Right | `.slide-in-right`
Slide from the Bottom | `.slide-in-bottom`
Newspaper | `.newspaper`
Fall In | `.fall`
Side Fall In | `.slide-fall-in`
Slide in and Stick to Top | `.slide-in-top-stick`
3D Flip Horizontal | `.flip-horizontal-3d`
3D Flip Veritcal | `.flip-vertical-3d`
3D Sign | `.sign-3d`
3D Slit | `.slit-3d`
3D Rotate from Bottom | `.rotate-bottom-3d`
3D Rotate in from Left | `.rotate-in-left-3d`
Super Scaled | `.super-scaled`
Just Me | `.just-me`
Blur | `.blur`
Slide in from Bottom (w/Perspective) | `.slide-in-bottom-perspective`
Slide from Right (w/Perspective) | `.slide-in-right-prespective`
Slip in from Top (w/Perspective) | `.slip-in-top-perspective`


## TODO
* Remove dependancy on jQuery

## Authors
**John-Alan Simmons** [iamjsimnz](https://github.com/jsimnz), [@iamjsimnz](https://twitter.com/iamjsimnz)

## LICESNCE
```
The MIT License (MIT)

Copyright (c) 2015 John-Alan Simmons

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
