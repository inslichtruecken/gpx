(function() {
  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';
      var resultsString = (results.length > 1) ? 'Results' : 'Result';
      searchResults.insertAdjacentHTML('beforebegin', '<span>' + results.length + ' ' + resultsString + '</span>');

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<li><div class="search-meta"><a href="' + item.url + '">' + item.title + '</a>';

        if (item.collection) {
          appendString += '<p>In <b>'+ item.collection + '</b><br>';
        } else {
          appendString += '';
        }

        appendString += '<small>' + item.content.substring(0, 150) + '...</small><p></li>';

      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.insertAdjacentHTML('beforebegin', '<span>Keine Suchergnisse gefunden</span>');
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute('value', searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title');
      this.field('content');
      this.field('subtitle');
	  
	  // Define additional properties specific to GPX tracks which you can search for 
      this.field('tags');
      this.field('description');
      this.field('region');
      this.field('startlocation');
	  
      // Add the data to lunr
      for (var key in window.store) { 
        this.add({
          'id': key,
          'title': window.store[key].title,
          'content': window.store[key].content,
          'description': window.store[key].subtitle, 
		  
		  // Add additional properties specific to GPX tracks 
		  'tags': window.store[key].tags,
          'description': window.store[key].description,
		  'region': window.store[key].region,
		  'startlocation': window.store[key].startlocation
		  });
      }
    });

    var results = idx.search(searchTerm); // Get lunr to perform a search
    displaySearchResults(results, window.store); // We'll write this in the next section
  }
})();
