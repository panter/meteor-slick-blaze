# meteor-slick-blaze

Adds a template helper for [slick](http://kenwheeler.github.io/slick)


## Usage

`meteor add panter:slick-blaze`

`````
{{#slick}}
	{{#each slides}}
		<div>
			{{>mySlideTemplate}}
		</div>
	{{/each}}
{{/slick}}
````

