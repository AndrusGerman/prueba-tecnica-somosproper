import { RecordData } from "../../../../domain/recordData";
import { MysqlStorage } from "../mysql";

export class RecordDataMysqlRepository {
  constructor(private mysql: MysqlStorage) {}

  async GetAll(): Promise<RecordData[]> {
    const response = await this.mysql
      .conn()
      .query(`SELECT id,nombre,idPadre FROM RecordsData`);
    return (response[0] as any[]).map(
      (data) => new RecordData(data.id, data.nombre, data.idPadre)
    );
  }

  async Save(recordData: RecordData): Promise<void> {
    await this.mysql.conn().query(`INSERT INTO somosproper.RecordsData 
      (nombre,idPadre) VALUES ('${recordData.nombre}', ${recordData.idPadre});`);
    return;
  }
}
