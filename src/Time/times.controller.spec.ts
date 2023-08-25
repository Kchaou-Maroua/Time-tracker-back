import { Test, TestingModule } from '@nestjs/testing';
import { timesController } from './times.controller';

describe('timesController', () => {
  let controller: timesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [timesController],
    }).compile();

    controller = module.get<timesController>(timesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
