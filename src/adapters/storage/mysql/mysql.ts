import { Config } from "../../../ports/config";
import mysql from "mysql2/promise";

export class MysqlStorage {
  private _conn: mysql.Connection;

  /**
   * conn
   */
  public conn() {
    return this._conn;
  }

  constructor(private config: Config) {}

  async Connect(): Promise<void> {
    const conn = await mysql.createConnection({
      host: this.config.databaseHost(),
      user: this.config.databaseUser(),
      password: this.config.databasePassword(),
      database: this.config.databaseName(),
    });
    this._conn = conn;
  }
}
