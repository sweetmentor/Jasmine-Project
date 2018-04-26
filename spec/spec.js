describe("calculator test", function() {
    describe("Addition test", function() {
        it("should return 4", function() {
            expect(addition(2,2)).toBe(4);
        });
        
        it("should not return 4 for different numbers", function() {
            expect(addition(20,22)).toBe(42);
        })
        
        it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            addition("Fish", 22);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
        });
        
        it("should show an alert if we only supply one number", function() {
            spyOn(window, "alert");
            addition(42);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
        });
        
    });
    

    describe("Subtraction test", function() {
      it("should return 4", function() {
            expect(subtraction(6,2)).toBe(4);  
    });
    it("should not return 4 for different numbers", function() {
            expect(subtraction(20,15)).toBe(5);
    })
    
    it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            subtraction("Spoon", 15);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
            
         });
         
    it("should return -4", function() {
            expect(subtraction(2,6)).toBe(-4);  
    });
    it("should not return -4 for different numbers", function() {
        expect(subtraction(15,20)).toBe(-5);
    })
});

describe("Multiplication test", function() {
      it("should return 4", function() {
            expect(multiplication(2,2)).toBe(4);  
    });
    it("should not return 4 for different numbers", function() {
            expect(multiplication(2,15)).toBe(30);
    })
    
    it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            multiplication("Spoon", 15);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
            
         });
         
    it("should return -4", function() {
            expect(multiplication(-2,2)).toBe(-4);  
    });
    it("should not return -4 for different numbers", function() {
        expect(multiplication(-5,2)).toBe(-10);
    })
});

describe("Division test", function() {
      it("should return 2", function() {
            expect(division(4,2)).toBe(2);  
    });
    it("should not return 2 for different numbers", function() {
            expect(division(20,2)).toBe(10);
    })
    
    it("should show an alert for NaN", function() {
            spyOn(window, "alert");
            division("Spoon", 2);
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be numbers");
            
         });
         
    it("should return 1", function() {
            expect(division(2,2)).toBe(1);  
    });
    it("should not return 1 for different numbers", function() {
        expect(division(10,2)).toBe(5);
    })
});



});