import { Test, TestingModule } from '@nestjs/testing';
import { HarvestersService } from './harvesters.service.js';
import { HarvestersRepository } from '../../database/domain/repositories/harvesters.repository.js';

describe('HarvestersService', () => {
  let service: HarvestersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HarvestersService,
        {
          provide: HarvestersRepository,
          useValue: {
            create: vi.fn(),
            findAll: vi.fn(),
            findById: vi.fn(),
            updateById: vi.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<HarvestersService>(HarvestersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
