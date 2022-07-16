// import User from "../models/User"
// import mockingoose from "mockingoose"

const mockingoose = require('mockingoose').default
const User = require("../../models/User")

describe ('mockingoose', () => {
    beforeEach(() => {
        mockingoose.resetAll(),
        jest.clearAllMocks()
    })

    describe("Explicit Tests", () => {
        it('Validate Model', async () => {
            const todo = new User({
                name: "Ben",
                email: "ben10@gmail.com",
                password: "password"
            });

            const result = await todo.validateSync()

            expect(result).toBe(undefined)

        });

        it('Should error when no name', async () => {
            const user = new User({name: ""});

            const result = await user.validateSync();

            expect(result.errors['name'].message).toBe("Path `name` is required.");

        });

        it('Should error when no password', async () => {
            const user = new User({password: ""});

            const result = await user.validateSync();

            expect(result.errors['password'].message).toBe("Path `password` is required.");

        });


    })
})