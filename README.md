Cabral
======

Javascript page navigation

<a href="http://en.wikipedia.org/wiki/Pedro_%C3%81lvares_Cabral">About name</a>

Code example inside cabral-tests.js

```javascript
cabral.navigateTo('bar.html', function(){
    console.log("Page bar is loaded");

    console.log("Now click in link foo...");
    cabral.clickLink('foo', function(jQuery){
        console.log("Page foo is loaded");
        //jQuery is an reference of $ from page foo.html
    });
});

```
