import swaggerJSDoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Vuze API Docs",
      version: "1.0.0",
      description: "Vuze의 API 문서",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local",
      },
    ],
  },
  apis: ["./app/api/**/*.ts"], // API 문서 주석 작성 위치
});
