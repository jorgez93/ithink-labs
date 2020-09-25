import { Controller, Get , Response} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/consultorias')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('home')
  getHome(@Response() res){
    return res.render('home')
  }
  @Get('services')
  getServices(@Response() res){
    return res.render('services')
  }
  @Get('contacts')
  getContacts(@Response() res){
    return res.render('contacts')
  }
}
