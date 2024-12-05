import { Config } from "../../../ports/config";
import mysql from "mysql2";

export class MysqlStorage {
  private _conn: mysql.Connection;

  /**
   * conn
   */
  public conn() {
    return this._conn;
  }
  


  constructor(private config: Config) {}

  Connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      // create connection
      const conn = mysql.createConnection({
        host: this.config.databaseHost(),
        user: this.config.databaseUser(),
        password: this.config.databasePassword(),
        database:this.config.databaseName(),
      });
      this._conn = conn;

      // complete connection
      this._conn.connect((err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }
}
