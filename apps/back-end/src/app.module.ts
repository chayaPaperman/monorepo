import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user/user.controller';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DbService } from './services/db.service';
import { ConfigModule } from '@nestjs/config';
import { TasksController } from './controller/tasks/tasks.controller';
import { CommunicationsController } from './controller/communications/communications.controller';
import { BillingController } from './controller/billing/billing.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './services/user.service';
import { User, UserModel } from './Models/user.model';
import { GoogleDriveController } from './controller/google-drive/google-drive.controller';
import { GoogleDriveService } from './services/google-drive.service';
import { CommunicationsService } from './services/communication.service';
import { Communication, communicationModel } from './Models/communication.model';
import { APP_FILTER, NestFactory } from '@nestjs/core';
import { HttpErrorFilter } from './common/filters/http-error.filter';
import { ClientController } from './controller/clients/clients.controller';
import { Client, ClientModel } from './Models/client.model';
import { ClientService } from './services/client.service';
import { Documents, DocumentsModel } from './Models/documents.model';
import { BillingsService } from './services/billing.service';
import { Billing, BillingModel } from './Models/billing.model';
import { BillingStatus, BillingStatusModel } from './Models/billingStatus.model';
import { BillingStatusService } from './services/billingStatus';
import { BillingStatusController } from './controller/billingStatus/billingStatus.controller';
//add
import * as cors from 'cors';
import { MailController } from './services/mail/mail.controller';
import { MailService } from './services/mail/mail.service';
import { TokenService } from './services/jwt.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { hashPasswordService } from './services/hash-password';
import { AuthController } from './controller/auth/auth.controller';
import { RoleService } from './services/role.service';
import { RoleController } from './controller/role/role.controller';
import { Role, RoleModel } from './Models/role.modle';

import { MeetService } from './services/meet.service';
import { Meet, MeetModel } from './Models/meet.model';
import { MeetController } from './controller/meet/meet.controller';
import { TaskService } from './services/task.service';
import { Task, TaskModel } from './Models/task.model';
import { Tag, TagModel } from './Models/tag.model';
import { TagController } from './controller/tag/tag.controller';
import { TagService } from './services/tag.service';


// @Module({ imports: [ MongooseModule.forRootAsync({ imports: [ ConfigModule ], inject: [ConfigService], useClass: MongoService }) })


@Module({
//add
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGODB_URI),

  MongooseModule.forFeature([{ name: User.name, schema: UserModel }]),

  MongooseModule.forFeature([{ name: Client.name, schema: ClientModel }]),
  MongooseModule.forFeature([{ name: Billing.name, schema: BillingModel }]),
  MongooseModule.forFeature([{ name: BillingStatus.name, schema: BillingStatusModel }]),
  MongooseModule.forFeature([{ name: Communication.name, schema: communicationModel }]),
  MongooseModule.forFeature([{ name: Role.name, schema: RoleModel }]),
  MongooseModule.forFeature([{ name: Documents.name, schema: DocumentsModel }]),
  MongooseModule.forFeature([{ name: Task.name, schema: TaskModel }]),
  MongooseModule.forFeature([{ name: Tag.name, schema: TagModel }]),
 MongooseModule.forFeature([{ name: Meet.name, schema: MeetModel }]),
  JwtModule
  ],
  controllers: [AppController, UserController, ClientController, TasksController, CommunicationsController, BillingController, BillingStatusController,MailController, GoogleDriveController, AuthController,RoleController,TasksController,TagController, MeetController],  


  providers: [
    AppService,
    DbService,
    UserService,MailService,TokenService, hashPasswordService,JwtService,
    ClientService,
    TaskService,
    TagService,
    CommunicationsService,
    GoogleDriveService,
    BillingsService,
    BillingStatusService,
    RoleService,
    MeetService,
    {
      provide: APP_FILTER,
      useClass: HttpErrorFilter,
    },],
  exports: [DbService],
})
export class AppModule { }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Your API Title')
    .setDescription('API description')
    .setVersion('1.0')
    .addBearerAuth()  // הוספת BearerAuth
    .addTag('yourTag')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // app.use(cors())
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true,
  });
  await app.listen(8080);
}
bootstrap();
