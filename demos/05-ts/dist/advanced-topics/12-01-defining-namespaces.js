"use strict";
/**
 * Namespaces are an alternative to modules. They support declaration merging - so you can split the definition of a namespace into different files.
 *
 * Advantage: They are simple to understand and use - they eliminate the need for module loaders as they result in a shared global variable created for the module.
 *
 * Disadvantage: The fact that they create global variables. Also they make dependencies implicit. Since modules specify dependencies explicitly they can be used by tools to strip out dead code etc. (tree-shaking)
 *
 * Tip: Prefer modules over namespaces
 */
var Logger;
(function (Logger) {
    // export a sub-namespace so that it gets added under the parent namespace (as Logger.Analytics)
    let Analytics;
    (function (Analytics) {
        // export variables, function, classes, sub-modules etc. defined within a namespace so they can be used outside the namespace
        function sendTimeToLoadAboveTheFold() {
            console.log('sendTimeToLoadAboveTheFold');
        }
        Analytics.sendTimeToLoadAboveTheFold = sendTimeToLoadAboveTheFold;
        function sendTimeToLoad() {
            console.log('sendTimeToLoad');
        }
        Analytics.sendTimeToLoad = sendTimeToLoad;
    })(Analytics = Logger.Analytics || (Logger.Analytics = {}));
})(Logger || (Logger = {}));