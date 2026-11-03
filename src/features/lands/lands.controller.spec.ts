import { Test, TestingModule } from '@nestjs/testing';
import { LandsController } from './lands.controller.js';

describe('LandsController', () => {
  let controller: LandsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LandsController],
    }).compile();

    controller = module.get<LandsController>(LandsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
