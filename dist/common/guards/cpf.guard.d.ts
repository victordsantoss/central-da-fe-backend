import { CanActivate, ExecutionContext } from '@nestjs/common';
import { CpfValidator } from '../core/utils/cpf.utils';
export declare class CpfGuard implements CanActivate {
    private readonly cpfValidator;
    constructor(cpfValidator: CpfValidator);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
