import { Controller, Get } from '@nestjs/common';
import { HealthService } from '@/modules/health/health.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('health')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @ApiOperation({ summary: 'Health Check', description: 'Check if the API is running' })
  @ApiResponse({ status: 200, description: 'API is healthy' })
  @Get()
  check() {
    return this.healthService.check();
  }

  @ApiOperation({ summary: 'Database Health Check', description: 'Check if the database connection is working' })
  @ApiResponse({ status: 200, description: 'Database connection is healthy' })
  @ApiResponse({ status: 503, description: 'Database connection failed' })
  @Get('db')
  async checkDatabase() {
    return this.healthService.checkDatabase();
  }
}
