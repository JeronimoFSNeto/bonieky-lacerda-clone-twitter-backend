import express from "express";
import { urlencoded } from "body-parser";
import helmet from "helmet";
import cors from "cors";
import { mainRouter } from "./routes/main";

const server = express();
server.use(helmet());
server.use(cors());
server.use(urlencoded({ extended: true }));

// rotas
server.use("/", mainRouter);

server.listen(process.env.PORT || 3000, () => {
  console.log(`servidor rodando em ${process.env.BASE_URL}`);
});
