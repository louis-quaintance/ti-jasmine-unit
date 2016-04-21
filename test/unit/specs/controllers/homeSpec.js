var homeController, tiUISpy, timekeeper;

var proxyquire = require('proxyquire').noCallThru();

var moment = require("moment");

describe("Tests of home controller", function() {

    beforeEach(function() {

      //mock the time
      timekeeper = require("timekeeper");

      jasmine.clock().install();

      _ = require("underscore");

      mockTitaniumViewElementsInController();

      spyOn(console, ["log"]);

      homeController = proxyquire('../../../../app/controllers/home', {
          "alloy/moment": moment
      });
    });

    afterEach(function() {
        //make sure we clean up global scope for test
        delete _;
        delete $;
        delete Ti;
        timekeeper.reset();
        jasmine.clock().uninstall();
    });

    it("should construct controller, add a view and log the time", function() {

        //make test work on any day it runs
        timekeeper.freeze(moment.utc("2016-04-21").toDate());

        var viewSpy = require('../../lib/spies/ti/viewSpy')();

        Ti.UI.createView.and.returnValue(viewSpy);

        $.construct();

        expect(Ti.UI.createView).toHaveBeenCalledWith({ width: 100, height: 100, backgroundColor: 'red' })

        expect($.window.add).toHaveBeenCalledWith(viewSpy);

        expect($.window.addEventListener.calls.argsFor(0)[0]).toEqual("click");

        //simulate click handler
        $.window.addEventListener.calls.argsFor(0)[1]();

        expect(console.log).toHaveBeenCalledWith('hello, the time is 2016-04-21');
    });

    it("should log to console after timeout", function() {

        $.showAlertAfterASetTimeout();

        expect(console.log).not.toHaveBeenCalled();

        jasmine.clock().tick(3001);

        expect(console.log).toHaveBeenCalledWith("hello");
    });

    function mockTitaniumViewElementsInController(){

        $ = require('../../lib/spies/alloyDollarSpy')();

        $.window = require('../../lib/spies/ti/viewSpy')();

        tiUISpy = require('../../lib/spies/ti/uiSpy')();

        Ti = {
            UI: tiUISpy
        };
    }
});
