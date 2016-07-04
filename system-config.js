/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    '@angular2-material': 'vendor/@angular2-material',
    'firebase': 'vendor/firebase/firebase.js',
    'angularfire2': 'vendor/angularfire2',
    'highlight': 'vendor/highlightjs'
};
/** User packages configuration. */
var packages = {
    highlight: {
        format: 'amd',
        main: 'highlight.pack.js'
    },
    angularfire2: {
        defaultExtension: 'js',
        main: 'angularfire2.js'
    }
};
var materialPackages = [
    'button',
    'card',
    'core',
    'icon',
    'input',
    'list',
    'progress-circle',
    'sidenav',
    'toolbar'
];
materialPackages.forEach(function (pkg) {
    packages[("@angular2-material/" + pkg)] = { main: pkg + ".js" };
});
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/navigation',
    'app/auth',
    'app/+home',
    'app/+admin',
    'app/+admin/language-admin',
    'app/+snippets',
    'app/+snippets/+list',
    'app/+snippets/+detail',
    'app/+snippets/+edit',
    'app/+snippets/+add',
    'app/+login',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map