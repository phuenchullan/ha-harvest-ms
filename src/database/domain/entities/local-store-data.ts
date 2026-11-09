import { Block } from './block.js';
import { Plantation } from './plantation.js';
import { Take } from './take.js';
import { Tray } from './tray.js';
import { Harvester } from './harvester.js';

export interface LocalStoreData {
  blocks: Partial<Block>[];
  plantations: Partial<Plantation>[];
  takes: Partial<Take>[];
  trays: Partial<Tray>[];
  harvesters: Partial<Harvester>[];
}
