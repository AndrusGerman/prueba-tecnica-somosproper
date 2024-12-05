import { RecordData } from "../domain/recordData";

export interface RecordDataRepository {
  GetAll(): Promise<RecordData[]>;
  Save(recordData: RecordData): Promise<void>;
}


export interface RecordDataService {
    GetAll(): Promise<RecordData[]>;
    Save(recordData: RecordData): Promise<void>;
    printData(elements: RecordData[]): void
  }
  