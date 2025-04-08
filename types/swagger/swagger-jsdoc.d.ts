// types/swagger-jsdoc.d.ts
declare module "swagger-jsdoc" {
  import { OpenAPIObject } from "openapi3-ts";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function swaggerJSDoc(options: any): OpenAPIObject;
  export = swaggerJSDoc;
}
