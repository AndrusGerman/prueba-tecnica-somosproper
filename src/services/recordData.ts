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

  private getMinId(group: { [key: string]: RecordData[] }): string {
    return Object.keys(group).sort((a, b) => Number(a) - Number(b))[0];
  }

  public printData(elements: RecordData[]) {
    // declare values
    const elementsGroup = this.groupBy(elements, "idPadre");
    const fatherIdPadre = this.getMinId(elementsGroup);
    const fathers = elementsGroup[fatherIdPadre] || [];

    // declare map elements
    const mapElements = new Map<string, RecordData>();
    elements.map((data) => mapElements.set(String(data.id), data));

    for (let index = 0; index < fathers.length; index++) {
      const father = mapElements.get(String(fathers[index].id)) as RecordData;
      this.recursivePrintDataContent(father, elementsGroup, 0);
    }
  }

  private recursivePrintDataContent(
    recordData: RecordData,
    elementsGroup: { [key: string]: RecordData[] },
    depth: number
  ) {
    // declare values
    const space = this.spaceText(depth);
    const sonDepth = depth + 1;
    const sons = elementsGroup[String(recordData.id)] || [];

    // print content element
    console.log(`${space + recordData.nombre}`);

    for (let i = 0; i < sons.length; i++) {
      this.recursivePrintDataContent(sons[i], elementsGroup, sonDepth);
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
