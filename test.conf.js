exports.config = {

    specs: [
        "source/naps/addresstest.js"
    ],
    capabilities: [
        {
            browserName: "chrome"
        }
    ],
    runner: 'local',
    //server
    hostname: 'localhost',
    port: 9515,
    path: '//',

    //framework:
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }

}