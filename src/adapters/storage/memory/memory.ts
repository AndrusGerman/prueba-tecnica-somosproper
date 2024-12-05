import fs from "fs/promises";

export class MemoryStorage {
  public _storage = new Map<string, any[]>();

  /**
   * Migration
   */
  public async Migration() {
    const file = await fs.readFile("./migrations/memoryInitialData.json", {
      encoding: "utf8",
    });
    const content = JSON.parse(file);

    const keys = Object.keys(content);

    keys.map((key) => {
      this._storage.set(key, content[key]);
    });
  }

  /**
   * Set
   */
  public Set(database: string, data: any[]) {
    this._storage.set(database, data);
  }

  public Get(database: string) {
    return this._storage.get(database) ?? [];
  }
}
