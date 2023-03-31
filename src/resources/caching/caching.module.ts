import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CachingService } from './caching.service';
import * as redisStore from 'cache-manager-ioredis';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get<string>('REDIS_HOST'),
        port: +configService.get<number>('REDIS_PORT'),
        ttl: +configService.get<number>('REDIS_TTL'),
      }),
    }),
  ],
  providers: [CachingService],
  exports: [CachingService],
})
export class CachingModule {}
