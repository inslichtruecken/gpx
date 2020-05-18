---
layout: post
title: How to Add Tracks
---

### Some background

This Site is made using Jekyll and hosted on Github pages. A static site generator creates web pages from raw text files, such as `markdown`, and as such individual pages are simple markdown files. 

###  Where to edit

There are two ways to create new questions and test your edits: Either change files individually on the GitHub interface (the `Edit this Page` button at the top of each page should take you directly to that file on GitHub), or clone the repository and edit the files locally.

Please refer to the [setup instructions]({{ site.url }}/set-up-instructions)


### How to add more Tracks 

For each **track** you will need to create a new **file** in the Github repository.
In the Github repo, the files are grouped within subdirectories of the directory "_tracks". Each subdirectory represents are category (type) of questions. 

> * Each single track is stored as a file in a subfolder of the directory "_tracks" with the extension *.md, e.g. "my first track.md".
>
> * The file will represent a dedicated page for your question. 
>

A page representing a track needs a **layout** associated, which ensures that all tracks look nice and consistent. The layout for a track is specified by the following property at the top of your file:

```
---
layout: track
---
```

There are further **properties**, which allow for a full structured description of a track.

Supported properties:                                    
* Title of the Track:           title                 
* Author of the Track:          author                
* Description of the Track:     description           
* Region:                       region                
* Start:                        start.location        
* Start:                        start.coordinates     
* Start:                        start.google-map-link 
* Length:                       length                
* Duration:                     duration              
* Difficulty:                   difficulty            
* Rating:                       rating                
* Image:                        image                 
* Image Alt Text:               image-text            
* Links for more informaton:    info-links            
* Map showing track as Image:   map-image             
* Map showing track as link:    map-link              
* Name of the GPX File:         gpx-file    
* Tags describing this track    tags         


Below the section specifying those properties you can add arbitrary markdown syntax to provide further details to your track. That **content** will be rendering for you by the layout template as well.
You are free to type whatever content you want into the file. You can add further images, structure longer contributions with sub-headlines, bullets, etc. [Here is a cheatsheet to get you acquianted with Git flavoured Markdown](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf). However it is possible to just write plain text and it will still be served on a page.

Once the file is committed on Github, it will represent your track as a unique **page** in the overall Github pages site and will be visible for all in the site navigation.

**As a summary: the concepts used for each provided track are:**

> * **for each track:** 
>
>   * **file** (added in the subdirectory "_tracks" with extension "*.md")
>
>   * **layout** (specify the layout "track")
>
>   * **properties** (specify the key data for your track, e.g. type)
>
>   * **content** (describe any additional helpful info in markdown syntax)
>
>   * **page** (will show up in the resulting Github Pages site)



### How to add Blog post

A Blog post has exactly the same concepts as a track description:
* A layout "post.html" provides the markup for rendering. The layout is located in the subdirectory "_layouts" (next to the layout for tracks)
* Each post is a Markdown file with the post content, specifying its type as "post". The file is located in the subdirectory "_posts"

```
---
layout: post
---
```

There are further **properties**, which allow for a full structured description of a bog post.

Supported properties:                                    
* Title of the Track:           title  
TO DO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

There is one special constraint on blog posts:
**The naming of the markdown post file must have the format `yyy-mm-dd-name`**


### Adding other pages to the Site

In addition to the tracks you can add **further pages** to the site by adding `markdown` formatted files to the directory structure. A good place to store static pages is the subdirectory "general".




