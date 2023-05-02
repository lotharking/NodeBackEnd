import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpStatus,
    InternalServerErrorException,
  } from '@nestjs/common';
import { error } from 'console';
  import { MongoError } from 'mongodb';
   
  @Catch(MongoError)
  export class MongoExceptionFilter implements ExceptionFilter {
    catch(exception: MongoError, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest<Request>();
      let status;
   
      switch (exception.code) {
        case 11000:
          status = HttpStatus.BAD_REQUEST;
          response.status(status).json({
            statusCode: status,
            message: `Data exist in db ${JSON.stringify(request.body)}`,
          });
        default:
            console.log(error)
            throw new InternalServerErrorException(`check server log`)
      }
    }
  }