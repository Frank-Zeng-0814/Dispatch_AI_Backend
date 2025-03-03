import { Module } from '@nestjs/common';
import { DatabaseModule } from '@/modules/database/database.module';
import { HealthModule } from '@/modules/health/health.module';
@Module({
  imports: [DatabaseModule, HealthModule],
})
export class AppModule {}
