import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { RescuesModule } from './rescues/rescues.module';
import { HospitalsModule } from './hospitals/hospitals.module';
import { VolunteersModule } from './volunteers/volunteers.module';
import { NotificationsModule } from './notifications/notifications.module';
import { UploadsModule } from './uploads/uploads.module';
import { MapsModule } from './maps/maps.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    ReportsModule,
    RescuesModule,
    HospitalsModule,
    VolunteersModule,
    NotificationsModule,
    UploadsModule,
    MapsModule,
    AdminModule,
  ],
})
export class AppModule {}
