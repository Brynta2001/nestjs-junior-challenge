import { Controller, Post, Body } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { ValidateAccountDto } from './dto/validate-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post('validate-state')
  validateState(@Body() validateAccountDto: ValidateAccountDto) {
    return this.accountsService.validateState(validateAccountDto);
  }

  @Post('validate-account')
  validateBalance(@Body() validateAccountDto: ValidateAccountDto) {
    return this.accountsService.validateAccount(validateAccountDto);
  }
}
