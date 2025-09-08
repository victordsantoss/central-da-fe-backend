import { IPasswordService } from './password.interface';
export declare class PasswordService implements IPasswordService {
    private readonly logger;
    private readonly saltRounds;
    createHash(password: string): Promise<string>;
    validatePassword(password: string, hashedPassword: string): Promise<boolean>;
}
