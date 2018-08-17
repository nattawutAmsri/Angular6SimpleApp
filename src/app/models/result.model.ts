import {Deserializable} from '../interfaces/deserializable.interface';

export class ResultModel implements Deserializable {
    code: number; // 200 == success 401=unauthurise 404=not found 500=servcer error
    message: string; // 200=> "success"
    responseId: string; // Id from database

    deseialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}