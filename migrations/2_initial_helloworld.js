const helloWorld = artifacts.require("HelloWorld"); //artifacts.require specify deployment contract
    module.exports = function(deployer) {
       deployer.deploy(helloWorld); //Failed to deploy contract with parameters, please refer to FAQ
};
