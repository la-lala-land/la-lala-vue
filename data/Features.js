export default [
    {
        name: "string",
        keyType: "genString",
        description: "Generate a random alphanumeric string.",
        args: [
            {
                type: "number",
                default: 10,
                description: "Enter the length of the string!"
            }
        ]
    },
    {
        name: "name",
        keyType: "genName",
        description: "Generate a random name that can (probably) be pronounced.",
        args: [
            {
                type: "number",
                default: 10,
                description: "Enter the length of the name!"
            }
        ]
    },
    {
        name: "email",
        keyType: "genEmail",
        description: "Generate a random email ID (uses the name generator too).",
        args: [
            {
                type: "boolean",
                default: false,
                description: "Use a common email service name?"
            }
        ]
    },
    {
        name: "character",
        keyType: "genCharacter",
        description: "Generate a random weird fantasy character.",
        args: []
    },
    {
        name: "fantasy-name",
        keyType: "genMonster",
        description: "Generate a random fantasy name.",
        args: []
    },
    {
        name: "story",
        keyType: "genStory",
        description: "Generate a random fantasy story!",
        args: [
            {
                type: "text",
                default: null,
                description: "Enter the name of the protagonist!"
            }
        ]
    },
    {
        name: "chain",
        keyType: "genChain",
        description: "Generate a random creepy chain mail!",
        args: [
            {
                type: "text",
                default: null,
                description: "Enter the name of the spirit!"
            }
        ]
    },
]