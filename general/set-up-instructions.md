---
layout: default
title: Create your own Track Web Site
---


## Clone this Github repository

First you need to get your own copy of this repository.
Either Fork or clone this github repo [inslichtruecken/gpx](https://github.com/inslichtruecken/gpx).

You can do this either 

* with the Github Web UI on [github.com](https://github.com/inslichtruecken/gpx)

* or using the Github Command Line Interface
  * `git clone https://github.com/inslichtruecken/gpx`
  
* or using the [Github Desktop client](https://desktop.github.com/).


## Make changes to your your own clone

This Site is made using Jekyll and hosted on Github pages. 
[Jekyll](https://jekyllrb.com/) is a static site generator which creates web pages from raw text files, using the syntax specified as `markdown`. Individual pages are simple markdown files.

There are two ways to develop this site. 

* Either change files individually on the GitHub interface (the `Edit this Page` button at the top of each page should take you directly to that file on GitHub), 
* or clone the repository and edit the files locally.

## Get a local environment on your computer

### Install Ruby and Git

To *run the site locally*, you will need:

* `ruby` (version 2.5.x with DevKit) ([get it from here](https://rubyinstaller.org/)) and run `ridk install` with all install options at the end of the install procedure.
* `git` ([get it from here](https://git-scm.com/downloads)) to be installed. 

*Note:* Have a look at the full [Jekyll installation procedure](https://jekyllrb.com/docs/installation/) for more details.


### Install the necessary prerequisites

`cd` into the local directory of the repo you have just cloned.

Install the `Jekyll` and `Bundler` ruby gems to install the site specific gems:

```
gem install jekyll bundler
bundle update
```

## Use your local environment to display your Track Web Site

Finally you can run Jekyll which provides the web pages on local web server at `localhost:4000` to view your local changes.
```
bundle exec jekyll serve
```

Jekyll will immediately update the web pages when changes are made in the work directory of your repository clone. 
Its easy and fast to make your changes and test them locally until you are happy.

From this point make any changes you want, and follow normal git procedure to commit the changes back to the repository.

# Understanding the site configuration

The file `_config.yml` includes the overall settings of the Track Web Site.
Parameters include:

* Properties provided by the Minimal Theme
  * selection of the theme:                                    theme
  * true/false to indicate whether to provide a download URL:  show_downloads 
  * used Github repository:                                    repository
  * Your Google Analytics tracking ID:                         google_analytics
* Properties used by the Jekyll SEO Tag
  * The title of your site:                                    title              
  * title tagd of the home page like 'title | tagline':        tagline 
  * The full URL to your site:                                 url 
  * A short description of your site's purpose:                description
  * Location of the logo file:                                 logo
  * for verifying ownership via Google webmaster tools:        google_site_verification
  * The locale these tags are marked up in:                    lang 
* Custom properties for this GPX Track Repository Web Site
  * A link to the impressum you want to reference:             impressum (Note: if not specified: the page ./general/impressum will be displayed)
  * A link to the gdpr-notice you want to reference:           gdpr-notice (Note: if not specified: the page ./general/gdpr-notice will be displayed)
  * A link to the legal you want to reference:                 legal (Note: if not specified: the page ./general/legal will be displayed)
  * Link to your Homepage:                                     my link


## Understanding Layouts
Every page you visit should have an underlying `markdown` file accompanying it. Generally the content of that file is mostly plain text, with some styling elements (refer to the [cheatsheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) to see what styling elements exist), and the layout of that file is specified by a corresponding layout file.
A layout file for a page is specified by the following content at the top of a file:

```
---
layout: ...
---
```

The value of the layout has to match a path to a html file under `_layouts/`. 


For instance, a page describing a GPX track uses
```
layout: track
```
That page will use the `_layouts/track.html` layout file. 

Consider the layout as a kind of template, which arranges the information to be shown on the page nicely. Once you have specified a layout, the contents of your file is placed into the `{{ contents }}` tag inside the layout file.
Furthermore, each layout can provide a set of properties, which a page can specify. The layout will arrange and display those properties during the page rendering.
 **Note** that layout files can also have a layout property, meaning you can have a nest of layouts.

The key layouts provided for usage on this GPX Track Web Site are:
* `track` (a template specifying how tracks are being displayed)
* `post` (a template specifying a very generic blog post)
* `main-page` (a template specifying the main "home" page of the site

As mentioned before, the styling for a page comes from the `layout` specified at the top of the file. If you want to make changes to this layout then edit the underlying layout file and your changes should be reflected all pages using that layout.
**Note** that layouts are probably going to be used by more that one page, so it makes more sense to create a new layout file with the changes you want so you don't edit other peoples posts.

## Understanding Includes
Another Jekyll concept is `includes`. This is the opposite of a layout where you can include some html on the current page. Each include must be backed up by a html file in the `_includes` directory, so for example:

```liquid
{% raw %}
{% include track-list %}
{% endraw %}
```

Inside your `markdown` file would include the `_includes/track-list.html` page at that location.

## Understanding the collection of all tracks
The list of tracks is build by looping through the *collections* of tracks.
A collection is defined by creating a directory starting with an underscore (`_`) in the root of the project. For instance, we have the `_track` collection. There are some reserved names you can't use for a collection (e.g., layouts and includes) but most names are available.
A collection also needs an entry in the `_config.yml` file in the root of the directory. For example, the `_general` collection is defined by:
```yaml
collections:
  tracks:
    output: true
```

Everything under the `collections` entry is created as a collection. The name `tracks` must match the name of the directory we created, minus the underscore, `output: true` tells Jekyll to render the pages, `permalink` tells Jekyll where to display the rendered pages and `icon` is the small icon displayed next to the collection name in the side nav.
Blog posts are also collections, but Jekyll creates that collection automatically. They are treated a bit special.

## More information


A good step by step tutorial on Jekyll and Github Pages can be found [here](https://jekyllrb.com/docs/step-by-step/01-setup/)




