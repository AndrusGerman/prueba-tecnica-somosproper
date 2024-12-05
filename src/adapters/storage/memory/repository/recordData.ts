import { RecordData } from "../../../../domain/recordData";
import { MemoryStorage } from "../memory";

export class RecordDataMemoryRepository {
  private dbName = 'recordData';
  constructor(private storage: MemoryStorage) {}

  async GetAll(): Promise<RecordData[]> {
    return this.storage.Get(this.dbName);
  }

  async Save(recordData: RecordData): Promise<void> {
    let index= 1;
    const allElements = this.storage.Get(this.dbName) as RecordData[];
    if (allElements.length>0) {
      index = allElements[allElements.length-1].id??0+1;
    }

    recordData.id = index;
    allElements.push(recordData);
    this.storage.Set(this.dbName,allElements)
  }
}
