---
layout: general-page
title: How to Add Tracks
---

### Some background

This Site is made using Jekyll and hosted on Github pages. A static site generator creates web pages from raw text files, such as `markdown`, and as such individual pages are simple markdown files. 
All set-up, install and preparation is covered in the [set-up-instructions]({{ site.url }}/general/set-up-instructions).
Let's assume now, that you have your own clone of the repository and your own set of Github Pages.


###  Where to edit

There are two ways to create new pages for tracks and test your edits: 

* Either change files individually on the GitHub interface (the `Edit this Page` button at the top of each page should take you directly to that file on GitHub), or 
* edit the files locally in your local Jekyll environment (which you have prepared using the [set-up-instructions]({{ site.url }}/general/set-up-instructions) )


### How to add more Tracks 

For each **track** you will need to create a new **file** in the Github repository. In the Github repo, all track descriptions are stored within the directory "_tracks". 

A page representing a track needs a **layout** associated, which ensures that all tracks look nice and consistent. The layout for a track is specified by the following property at the top of your file:

```
---
layout: track
---
```

There are further **properties**, which allow for a full structured description of a track with a lot of detail.

Supported properties:                                    
* Title of the Track:           title                 
* Author of the Track:          author                
* Description of the Track:     description           
* Region:                       region                
* Start Location Name:          start-location        
* Start Location Latitude N/S:  start.lat  (format: 48.60280)   
* Start Location Longitude O/W: start.long (format:  8.90339) 
* Length:                       length                
* Duration:                     duration        
* Rise in Elevation:            rise          
* Difficulty:                   difficulty            
* Rating:                       rating      (1, 2 or 3)          
* Image:                        image       (must be stored in assets/images)         
* Image Alt Text:               image-text            
* Link(s) for more informaton:  info-links  (separated by blank, include https://)  
* Link more details:            details-link (in case you have another web site with a more detailed description of that track)
* Map showing track as Image:   map-image   (must be stored in assets/maps)            
* Name of the GPX File:         gpx-file    (must be stored in assets/tracks)
* Tags describing this track    tags        (separated by blank)

Below the section specifying those properties you can add further markdown syntax to describe your track. That **content** will be rendering for you by the layout template as well.
You are free to type whatever and as much individual content you want into the file. You can add further images, structure longer contributions with sub-headlines, bullets, etc. [Here is a cheatsheet to get you acquianted with Git flavoured Markdown](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf). However it is possible to just write plain text and it will still be served on a page.

A very simple track description can look like this:

```
---
layout: track
title: Track in the Black Forest
author: Thomas Stober
region: Black Forest
start-location: Baiersbronn
description: My first Track
length: 11 km
duration: 2,5 - 3 h
rise: 1200 m
difficulty: Easy
rating: 3
image: my-nice-photo.jpg
image-text: my nicephoto 
info-links: https://www.frischluftwege.de 
details-link: https://www.frischluftwege.de/thistrack
maplink: https://www.openstreetmap.org
gpx-file: Schoenbuchtrauf.gpx
map-image: Schoenbuchtrauf-Map.png
tags: Train Forest Family

TO DO VALIDATE PROPERTIES WHEN FINALLY DONE

---
{% raw %}
## Welcome to my first track
{% endraw %}
here comes my detailed description 
with all **markdown** syntax you 
might want.
```



Once the file describing your track is committed on Github, it will represent your track as a unique **page** in your overall Github pages site and will be visible for everyone in the site navigation.


### How to add Blog post

In addition to tracks you can also create blog posts. A Blog post has exactly the same concepts as a track description:
* A layout "post.html" provides the markup for rendering. The layout is located in the subdirectory "_layouts" (next to the layout for tracks)
* Each post is a Markdown file with the post content, specifying its type as "post". The file is located in the subdirectory "_posts"

```
---
layout: post
---
```

There are further **properties**, which allow for a full structured description of a bog post.

Supported properties:                                    
* Title of the Blog post:       title  
* Author:                       Author  
* Tags describing this track    tags        (separated by blank)
* Flag if the post is archived: archived

There is one special constraint on blog posts:
**The naming of the markdown post file must have the format `yyy-mm-dd-name`**


### Adding other pages to the Site

In addition to the tracks you can add **further pages** to the site by adding `markdown` formatted files to the directory structure. A good place to store static pages is the subdirectory "allgemein". 
This page is a good example of such an additional page.
Use the layout template `general-page`, which provides the property 'title'. 

```
---
layout: general-page
---
```
Supported properties:                                    
* Title of the Track:           title       




