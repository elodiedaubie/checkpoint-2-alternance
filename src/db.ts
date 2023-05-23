import { DataSource } from "typeorm";
import Country from "./entities/Country";

export default new DataSource({
  type: "sqlite",
  database: "./checkpoint2db.sqlite",
  synchronize: true,
  entities: [Country],
  logging: true,
});
