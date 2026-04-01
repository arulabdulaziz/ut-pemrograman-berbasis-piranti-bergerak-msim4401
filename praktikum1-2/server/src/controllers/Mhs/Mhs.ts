import { Request, Response } from 'express';
import { CrudController } from '../CrudController';
import dataMhsJson from '../../resources/dataMhs.json';

// import * as path from 'path';
// import * as fs from 'fs';

// const dataMhsPath = path.join(__dirname, '../../resources/dataMhs.json');
// const dataMhsJson = JSON.parse(fs.readFileSync(dataMhsPath, 'utf-8'));

export class MhsController extends CrudController {
  public read(req: Request, res: Response): void {
    res.json(dataMhsJson);
  }
}
