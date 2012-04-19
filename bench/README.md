benchrunner is a standalone UI on top of benchmark.js.
It will run your benchmarks thru
[benchmark.js](https://github.com/bestiejs/benchmark.js)
and display the result in a webpage such as
[this one](http://jeromeetienne.github.com/benchrunner/#runall).

The UI is widely inspired from [mocha](visionmedia.github.com/mocha/)
by [TJ Holowaychuk](https://github.com/visionmedia).

It is add ```#runall``` to the runner url. The benchmarks will start as soon
as the page is loaded.

You add your own suite
at the end of the
[index.html](https://github.com/jeromeetienne/benchrunner/blob/master/index.html)
so around
[here](https://github.com/jeromeetienne/benchrunner/blob/master/index.html#L46).
Here is a sample benchmark
[bench-example](https://github.com/jeromeetienne/benchrunner/blob/master/bench-example.js).
Here is an bench suite.

```javascript
benchsuite('current time in ms', function(){
    bench('Date.now()', function() {
        Date.now()
    });
    bench('new Date().getTime()', function() {
        new Date().getTime();
    });
});
```

