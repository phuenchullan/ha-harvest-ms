import { Test, TestingModule } from '@nestjs/testing';
import { HarvestersController } from './harvesters.controller.js';
import { HarvestersService } from './harvesters.service.js';

describe('HarvestersController', () => {
  let controller: HarvestersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HarvestersController],
      providers: [
        {
          provide: HarvestersService,
          useValue: {
            create: vi.fn(),
            findAll: vi.fn(),
            findById: vi.fn(),
            update: vi.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<HarvestersController>(HarvestersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
