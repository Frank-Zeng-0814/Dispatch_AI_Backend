import { Controller, Get } from '@nestjs/common';
import { HealthService } from '@/modules/health/health.service';
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  check() {
    return this.healthService.check();
  }

  @Get('db')
  async checkDatabase() {
    return this.healthService.checkDatabase();
  }
}
