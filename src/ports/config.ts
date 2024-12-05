export interface Config {
  databaseUser(): string;
  databasePassword(): string;
  databaseName(): string;
  databaseHost(): string;
}
