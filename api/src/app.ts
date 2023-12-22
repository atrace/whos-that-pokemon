import express, {
  Request as ExRequest,
  Response as ExResponse,
  NextFunction,
  json,
  urlencoded
} from "express";
import swaggerUi from "swagger-ui-express";
import { ValidateError } from "tsoa";
import { RegisterRoutes } from "../build/routes";
import { AxiosError } from "axios";

export const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true
  })
);
app.use(json());

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});

RegisterRoutes(app);

app.use(function notFoundHandler(_req, res: ExResponse) {
  res.status(404).send({
    message: "Not Found"
  });
});

app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(422).json({
      message: "Validation Failed",
      details: err?.fields
    });
  }
  if (err instanceof AxiosError) {
    switch (err.response?.status) {
      case 404:
        return res.status(404).send({
          message: "Not Found"
        });
    }
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }

  next();
});
