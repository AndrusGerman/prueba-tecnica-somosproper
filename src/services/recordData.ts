import { RecordData } from "../domain/recordData";
import { RecordDataRepository } from "../ports/recordData";
export class RecordDataService {
  constructor(private repository: RecordDataRepository) {}

  async GetAll(): Promise<RecordData[]> {
    return await this.repository.GetAll();
  }

  async Save(recordData: RecordData): Promise<void> {
    return this.repository.Save(recordData);
  }

  private spaceText(size: number): string {
    return new Array(size).fill("*").join(" ");
  }

  public printData(elements: RecordData[]) {
    const elementsGroup = this.groupBy(elements, "idPadre");

    const fathers = elementsGroup["0"] || [];
    const mapElements = new Map<string, RecordData>();
    elements.map((data) => mapElements.set(String(data.id), data));

    for (let index = 0; index < fathers.length; index++) {
      const father = mapElements.get(String(fathers[index].id)) as RecordData;
      this.printDataContent(father, elementsGroup, 0);
    }
  }

  private printDataContent(
    recordData: RecordData,
    elementsGroup: any,
    depth: number
  ) {
    const space = this.spaceText(depth);
    const sonDepth = depth + 1;
    
    // print content element
    console.log(`${space + recordData.nombre}`);
    const sons = elementsGroup[String(recordData.id)] || [];

    for (let i = 0; i < sons.length; i++) {
      const son = sons[i];
      this.printDataContent(son, elementsGroup, sonDepth);
    }
  }

  private groupBy<T>(elements: T[], key: string): { [key: string]: T[] } {
    return elements.reduce((result, item) => {
      const groupKey = item[key];
      // If the key doesn't exist in the result, create an array for it
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      // Push the item into the array
      result[groupKey].push(item);
      return result;
    }, {});
  }
}
