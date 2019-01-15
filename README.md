# Kraken-Sass

This is a SASS fork of Kraken it is very similar to the original with the added power of SASS.

Kraken is a lightweight, mobile-first boilerplate for front-end web developers. It includes just the essentials:

* A CSS reset to ensure cross-browser compatibility.
* A responsive, mobile-first grid.
* A well-designed, fluid typographic scale.
* CSS3 buttons.
* Basic form styling.
* Optional add-ons for more functionality.

## Extras for Kraken-Sass

* Mixins for the grid and more (have a look)
* A Settings file where you can easily adjust any project variable
* Modular setup of partials so that you can include just the modules you care to use.
* Most of the addons will be available in the `/addons` dir as well as _imports for them in `scss/lib/addons`

## How It Works
Getting started with Kraken-Sass is really easy. [View the online tutorial](http://jwebcat.github.com/kraken-sass/).

## Get Involved
Make sure you read the how-to from the CSS version of Kraken below.

- create an issue
- make a branch (e.g. "feature")
- hack on it
- submit a PR (from "feature" branch, NOT from "master")

Kraken is an open-source project. [Learn how you can get involved.](http://cferdinandi.github.io/kraken/get-involved.html)

## Version Numbers
Kraken-Sass follows the Major versions of Kraken and its own extra Minor version for features and bugfixes.

## Changelog (Kraken-Sass)
* v2.1.8 (June, 28, 2013)
  * add sassmatic as an addon for epic Sass image filters
* v2.1.7 (June, 28, 2013)
  * Change media query variables to be more logical and added customized css-wizardry grids as an addon
* v2.1.6 (June, 22, 2013)
  * Update Apple and Microsoft touch icons and `img/readme.md`.
* v2.1.5 (June, 22, 2013)
  * added addons as subtrees and _partials for each one in `scss/lib/addons` and update directory structure.
* v2.1.4 (June, 13, 2013)
  * moved `%cfix` to _grid.scss and update `grid()` and `container()` mixins to @extend `%cfix`
* v2.1.3 (June, 12, 2013)
  * Updated `row` and `container` mixins to use @extend
* v2.1.2 (June, 12, 2013)
  * Moved `grid()` mixins to _grid.scss and changed it to use @extend with %placeholders
* v2.1.1 (June, 11, 2013)
  * Inception

## Changelog (Kraken)
* v2.1 (June 7, 2013)
  * Switched to MIT license.
* v2.1 (June 2, 2013)
  * Added version numbering.
* v2.1 (March 19,2013)
  * Changed `.screen-reader` class to ems.
* v2.0 (March 18, 2013)
  * Removed gradients on buttons.
  * Changed `.btn-color` to `.btn-blue`, breaking previous pattern.
* v2.0 March 15, 2013)
  * Changed `.unstyled` to `.list-unstyled`, breaking previous pattern.
* v1.1 March 14, 2013)
  * Added print styling.
* v1.0 (Mary 7, 2013)
  * Initial release.

## TODO
[] adjust gh-pages for mixins
[] convert the rest of the add-ons to SASS and have them in a subdir
[] finish creating sub-trees for each add-on

## License
Kraken is free to use under the [MIT License](http://gomakethings.com/mit/).
