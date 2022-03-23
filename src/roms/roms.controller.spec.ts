import { Test, TestingModule } from '@nestjs/testing';
import { RomsController } from './roms.controller';

describe('RomsController', () => {
  let controller: RomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RomsController],
    }).compile();

    controller = module.get<RomsController>(RomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
