


export class MemoryStorage {
    public _storage = new Map<string,any[]>();




    /**
     * Set
     */
    public Set(database:string,data:any[]) {
        this._storage.set(database,data);
    }

    public Get(database:string) {
        return this._storage.get(database)??[]
    }

}
  