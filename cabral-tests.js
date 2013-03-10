
// this is the frame that "browser" cabral will manipulate
browser.setFrameName('escotilha');

describe("browser cabral should", function(){
	
	it("navigate to an url", function(){
		var done, win;
		runs(function(){
			browser.go('bar.html', function(_win){
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
			browser.go('bar.html', function(){
				console.log("Page bar is loaded");
				console.log("Now click in link foo...");
				browser.clickLink('foo', function(_win){
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
			browser.go('bar.html', function(_win){
				win = _win;
				console.log("Page bar is loaded");

				console.log("Now link with text is not found...");
				expect(function(){
					browser.clickLink('a 404 page', function(_win){});
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

});
