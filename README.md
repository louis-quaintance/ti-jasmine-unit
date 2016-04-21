###ti-jasmine-unit

Ever wanted to write unit tests that run quickly for Titanium and properly isolate controllers, utils, helpers and models for unit testing instead of loading up every dependency under the sun in the simulator (which in fact is more of an integration test).
<br/>
Look no further people!
<br/>

This simple framework uses jasmine to write unit tests, jasmine to mock and set expectations and when working with dates it uses timekeeper to make things deterministic. It is all run using Node.

###Proxyquire

Allows us to override dependencies and fake their behaviour. If we wanted to override a hypothetical dateHelper used in our home controller, then we could load in a spy rather than the real module

```
homeController = proxyquire('../../../../app/controllers/home', {
    "helper/dateHelper": dateHelperSpy
});
```

###How to setup

```
npm install
npm test
```

###An example test

See test/unit/specs/controllers/homeSpec.js which tests app/controllers/home.js

###Developing spies

Spies allow us to fake behaviour on objects. When I get time I may add some more spies for Titanium objects but you can add to the ones I have created in test/unit/lib/spies/

###Running a single test at a time

```
./node_modules/.bin/jasmine test/unit/specs/controllers/homeSpec.js
```

###Running coverage

This will create you a nice coverage report in the coverage folder. What i've checked will show 100% coverage

```
npm run cover
```

###Presentation

I gave a presentation on this using an older version of Jasmine way back when, see https://skillsmatter.com/skillscasts/5097-unit-testing-titanium-apps-with-jasmine-node
