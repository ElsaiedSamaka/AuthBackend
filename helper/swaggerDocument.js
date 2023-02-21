const swaggerDocumention = {
  openapi: "3.0.0",
  info: {
    title: "Auth API Documentation",
    version: "1.0.0",
    description: "Documentation of Qtech Auth API",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Local server",
    },
    {
      url: "https://qtech-auth.herokuapp.com",
      description: "TODO: Production server",
    },
  ],

  paths: {
    "/api/auth/signup": {
      post: {
        tags: ["Auth"],
        description: "Create new user",
        requestBody: {
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  firstname: {
                    type: "string",
                    example: "lorem",
                  },
                  lastname: {
                    type: "string",
                    example: "ipsum",
                  },
                  phonenumber: {
                    type: "string",
                    example: "0123456789",
                  },
                  email: {
                    type: "string",
                    example: "loremipsumdlr@ada.sa",
                  },
                  password: {
                    type: "string",
                    example: "asdasdasd",
                  },
                  passwordConfirmation: {
                    type: "string",
                    example: "asdasdasd",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "User created successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    user: {
                      type: "object",
                      example: {
                        id: 00,
                        firstname: "firstname",
                        lastname: "lastname",
                        phonenumber: "123456789",
                        email: "email.example@yahoo.xo",
                        password:
                          "$2a$10$PWZqohI5er5Al2q9F9OG0uLXy1CE0gQhCrLbXWdvkOopgdZveC0L6",
                        updatedAt: "2023-02-21T08:55:04.574Z",
                        createdAt: "2023-02-21T08:55:04.574Z",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },

    //TODO: add other paths
  },
};
module.exports = swaggerDocumention;
