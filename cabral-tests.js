
// this is the frame that cabral will manipulate
cabral.setFrameName('escotilha');

describe("cabral should", function(){
	
	it("navigate to an url", function(){
		var done, win;
		runs(function(){
			cabral.navigateTo('bar.html', function(_win){
				console.log("Page bar is loaded");
				win = _win;
				done = true;
			});
		});

		waitsFor(function() {
			return done;
		}, "The Value should be incremented", 750);

		runs(function(){
			expect(win.document.title).toBe('Cabral Test Page - Bar');
		});
	});

	it("click link by text", function(){
		var done, win;
		runs(function(){
			cabral.navigateTo('bar.html', function(){
				console.log("Page bar is loaded");

				console.log("Now click in link foo...");
				cabral.clickLink('foo', function(_win){
					console.log("Page foo is loaded");

					win = _win;
					done = true;
				});
			});
		});

		waitsFor(function() {
			return done;
		}, "The Value should be incremented", 1000);

		runs(function(){
			expect(win.document.title).toBe('Cabral Test Page - Foo');
		});
	});

	it("throw an exception if link isnt present", function(){
		var done, win;
		runs(function(){
			cabral.navigateTo('bar.html', function(_win){
				win = _win;
				console.log("Page bar is loaded");

				console.log("Now link with text is not found...");
				expect(function(){
					cabral.clickLink('a 404 page', function(_win){});
				}).toThrow(new Error("Link not found with text 'a 404 page'."));
				
				done = true
			});
		});

		waitsFor(function() {
			return done;
		}, "The Value should be incremented", 1000);

		runs(function(){
			expect(win.document.title).toBe('Cabral Test Page - Bar');
		});
	});

	it("should change an angular model", function(){
		var done, $;
		runs(function(){
			cabral.navigateTo('angular.html', function(jq){
				$ = jq;
				console.log("Page angular is loaded");
				cabral.set('#userName', 'Sr. Oshiro');
				cabral.checkbox('.chkBox', true);
				done = true
			});
		});

		waitsFor(function() {
			return done;
		}, "The Value should be incremented", 1000);

		runs(function(){
			expect($('#msg').text()).toBe('Hello Sr. Oshiro!');
			expect($('#chkBoolean').text()).toBe('true');
		});
	});

});
