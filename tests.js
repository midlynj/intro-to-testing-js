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

describe("isEven", function() {
    it("should be a defined function", function () {
        expect(typeof isEven).toBe("function");
    });

    it("isEven returns a boolean no matter the input", function() {
        expect(typeof isEven()).toBe("boolean")
    });

    it("isEven should return true when executed with isEven(2)", function() {
        expect(isEven(2)).toBe(true)
    });

    it("isEven should return true when executed with isEven(-4)", function() {
        expect(isEven(-4)).toBe(true)
    });

    it("isEven should return true when executed with isEven(3)", function() {
        expect(isEven(3)).toBe(false)
    });

    it("should return 'false' when called with isEven(banana)", function() {
        expect(isEven("banana")).toBe(false);
    });

    it("should return 'true' when called with isEven(8)", function() {
        expect(isEven("8")).toBe(true);
    });

    it("should return 'false' when called with a boolean isEven(true) or isEven(false)", function() {
        expect(isEven(true)).toBe(false);
    });


    it("should return 'false' when called without an argument boolean isEven()", function() {
        expect(isEven()).toBe(false);
    });

});

describe("isVowel", function() {

    it("should always return a boolean", function() {
        expect(typeof isVowel("a")).toBe("boolean");
    });

    it("should  return true when called with isVowel(a)", function() {
        expect(isVowel("a")).toBe(true);
    });

    it("should return true when called with isVowel(A)", function() {
        expect(isVowel("A")).toBe(true);
    });

    it("should return false when called with isVowel(y)", function() {
        expect(isVowel("y")).toBe(false);
    });

    it("should return false when called with isVowel(4)", function() {
        expect(isVowel(4)).toBe(false);
    });

    it("should return false when called with isVowel(true) or isVowel(false)", function() {
        expect(isVowel(true)).toBe(false);
    });

    it("should return false when called with isVowel(banana)", function() {
        expect(isVowel("banana")).toBe(false);
    });

    it("should return false when called with an empty argument isVowel()", function() {
        expect(isVowel()).toBe(false);
    });




});