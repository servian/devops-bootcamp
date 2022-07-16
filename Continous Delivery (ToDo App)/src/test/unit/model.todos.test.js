// import User from "../models/Todo"
// import mockingoose from "mockingoose"

const mockingoose = require('mockingoose').default
const Todo = require("../../models/Todo")

describe ('mockingoose', () => {
    beforeEach(() => {
        mockingoose.resetAll(),
        jest.clearAllMocks()
    })

    describe("Explicit Tests", () => {
        it('Validate Model', async () => {
            const todo = new Todo({
                title: "Task Title",
                details: "Details of the task",
                user: "password",
                dueDate: "Tomorrow"
            });

            const result = await todo.validateSync();

            expect(result).toBe(undefined);

        });

        it('Should error when no title', async () => {
            const todo = new Todo({name: ""});

            const result = await todo.validateSync();

            expect(result.errors['title'].message).toBe("Path `title` is required.");

        });
    })
})
