import { Pipe, PipeTransform } from '@angular/core';
import {IUser} from "../models";

@Pipe({
  name: 'objectTransformation'
})
export class ObjectTransformationPipe implements PipeTransform {
  transform(value: IUser, ...args: unknown[]): unknown {
    const {id, name, email} = value;

    return `${id}). ${name} - ${email}`;
  }
}
