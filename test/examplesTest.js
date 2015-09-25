// Dependencies
var chai = require("chai"),
    expect = chai.expect,
    should = chai.should();

// Code
var unit = require("./../examples.js").ExamplesCode;

describe(
    "# First test scenario",
    function() {
        describe (
            "## detailed test scenario",
            function() {
                it(
                    "First test",
                    function() {
                        // expect
                        expect(unit.firstMethod())
                            .to.be.an("Object")
                            .to.have.property("status")
                            .to.equal(true);
                        // should
                        unit.firstMethod()
                            .should.be.an("Object")
                            .with.property("value")
                            .with.be.above(5);
                    }
                );

                it(
                    "Second test",
                    function() {
                        expect(function() {unit.secondMethod("")})
                            .throw("Value dont't must be a empty string");

                        (function() {unit.secondMethod("")})
                            .should.Throw("Value dont't must be a empty string");
                    }
                );
            }
        );

        describe (
            "## other detailed test scenario",
            function() {
                it(
                    "First test",
                    function() {
                        expect(unit.secondMethod("testValue"))
                            .to.be.a("String")
                            .to.equal("testValue");

                        unit.secondMethod("testValue")
                            .should.be.a("String")
                            .equal("testValue");
                    }
                );
            }
        );
    }
);
