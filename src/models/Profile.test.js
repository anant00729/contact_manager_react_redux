const Profile = require("./Profile")

// @ponicode
describe("displayAllData", () => {
    let inst

    beforeEach(() => {
        inst = new Profile.default(12, "George", "user123")
    })

    test("0", () => {
        let callFunction = () => {
            inst.displayAllData()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getTheLastName", () => {
    let inst

    beforeEach(() => {
        inst = new Profile.default(12345, "George", "user_name")
    })

    test("0", () => {
        let callFunction = () => {
            inst.getTheLastName()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getTheFirstName", () => {
    let inst

    beforeEach(() => {
        inst = new Profile.default(987650, "George", "user name")
    })

    test("0", () => {
        let callFunction = () => {
            inst.getTheFirstName()
        }
    
        expect(callFunction).not.toThrow()
    })
})
