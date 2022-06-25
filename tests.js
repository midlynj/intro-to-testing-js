// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("foo", function() {
            it("should return true if 2 === 2", function() {
                let expectedResult = 2;
                let actualResult = 2;
                expect(actualResult).toBe(expectedResult);
             });
});

describe("sayHello", function() {
            it("sayHello should return a string when called.", function() {
                    expect(typeof sayHello()).toBe("string")
            });
            it("sayHello(Jane) should returns Hello, Jane!", function () {
                    expect(sayHello("Jane")).toBe("Hello, Jane!")
            });
            it("sayHello(Alex) should returns Hello, Alex!", function () {
                    expect(sayHello("Alex")).toBe("Hello, Alex!")
             });
             it("sayHello(Pat) should returns Hello, Pat!", function () {
                    expect(sayHello("Pat")).toBe("Hello, Pat!")
             });
            it("sayHello(World) should returns Hello, World!", function () {
                     expect(sayHello()).toBe("Hello, World!")
            });
            it("sayHello() should returns Hello, World!", function () {
                    expect(sayHello(true)).toBe("Hello, World!")
            });
            it("sayHello() should returns Hello, World!", function () {
                expect(sayHello(false)).toBe("Hello, World!")
            });

});

describe("isFive", function() {
    it("should be a defined function", function() {
        expect(typeof isFive).toBe("function");
    });

    it("isFive returns a boolean no matter what the input", function() {
        expect(typeof isFive()).toBe("boolean")
    });

    it("isFive should return true when passed 5", function() {
        expect(isFive(5)).toBe(true)
    });
});