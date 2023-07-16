const ajv = require('ajv')
const schema = {
    "type": "string",
    "minLength": 10
}
const validate = new ajv().compile(schema)

const valid = validate(123)

if (!valid) {
    console.log('errors = ',validate.errors)
}

const workerSchema = {
    "type": "object",
    "properties": {
        name: {
            "type": "string",
            "minLength": 10
        },
        age: {
            "type": "number",
        },
        pets: {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        isWorker: {
            type: "boolean"
        }
    },
}
const workerajv = new ajv()

workerajv.addFormat('test',(data) => {
    console.log('-----------data----------')
    return data === 'test'
})

const workerValidate = workerajv.compile(workerSchema)
const workerValid = workerValidate({
    name: '123',
    age: 18,
    pets: ['cat', 'dog'],
    isWorker: true
})

if (!workerValid) {
    console.log('errors = ',workerValidate.errors)
}