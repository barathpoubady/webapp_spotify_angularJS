requirejs.config({
    baseUrl: 'app',
    paths: {
        "aboutCtrl":"scripts\controllers\about",
        "mainCtrl":"scripts\controllers\main",

    }
});

require(['app/scripts/app']);