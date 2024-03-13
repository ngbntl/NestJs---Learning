import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

import { NoteModule } from './note/note.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,

    NoteModule,
    PrismaModule,
    ConfigModule,
  ],
  controllers: [],
})
export class AppModule {}
