import { Test, TestingModule } from '@nestjs/testing';

describe('AppModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [],
    }).compile();

    module = moduleFixture;
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should have testing module configured', () => {
    expect(module).toBeDefined();
  });
});
