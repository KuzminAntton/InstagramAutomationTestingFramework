exports.config = {

    runner: 'local',

    specs: ["./spec/*.ts"],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
    }],
    logLevel: 'info',

    bail: 0,

    baseUrl: 'http://localhost',

    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    services: ['chromedriver'],

    framework: 'mocha',
    reporters: ['dot',
    ['junit', {
        outputDir: './results/',
        outputFileFormat: function(options) { // optional
            return `results-${options.cid}.${options.capabilities}.xml`
        }
    }]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: function (capabilities, specs) {
        require("ts-node").register({ files: true });
    },
    onPrepare: function () {
        // eslint-disable-next-line
        console.log('let\'s go')
    },
    onComplete: function () {
        // eslint-disable-next-line
        console.log('that\'s it')
    }

}
