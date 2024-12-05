import {
  errorDatabaseHostRequired,
  errorDatabaseNameRequired,
  errorDatabasePasswordRequired,
  errorDatabaseUserRequired,
} from "../../domain/errors";

export class Config {
  private _databaseUser: string;
  private _databasePassword: string;
  private _databaseName: string;
  private _databaseHost: string;

  public databaseUser() {
    return this._databaseUser;
  }
  public databasePassword() {
    return this._databasePassword;
  }
  public databaseName() {
    return this._databaseName;
  }
  public databaseHost() {
    return this._databaseHost;
  }

  private setValues() {
    this._databaseName = process.env.DATABASE_NAME ?? "";
    this._databaseUser = process.env.DATABASE_USER ?? "";
    this._databasePassword = process.env.DATABASE_PASSWORD ?? "";
    this._databaseHost = process.env.DATABASE_HOST ?? "";
  }

  private checkValues() {
    if (!this.databaseName()) {
      throw errorDatabaseNameRequired;
    }
    if (!this.databasePassword()) {
      throw errorDatabasePasswordRequired;
    }
    if (!this.databaseUser()) {
      throw errorDatabaseUserRequired;
    }

    if (!this.databaseHost()) {
      throw errorDatabaseHostRequired;
    }
  }

  constructor() {
    this.setValues();
    this.checkValues();
  }
}
