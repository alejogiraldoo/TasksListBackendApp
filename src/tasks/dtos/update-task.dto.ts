import { Type } from "class-transformer";
import { IsDate, IsNumber, IsString } from "class-validator";

export class UpdateTaskDto {
    @IsString()
    name?: string;

    @IsString()
    description?: string;

    @IsDate()
    @Type(() => Date)
    date?: Date;
}