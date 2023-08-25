import { Test, TestingModule } from '@nestjs/testing';
import { timesService } from './times.service';

describe('timesService', () => {
  let service: timesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [timesService],
    }).compile();

    service = module.get<timesService>(timesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
