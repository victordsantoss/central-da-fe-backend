export interface IUserResponseDto {
  name: string;
  email: string;
  cpf: string;
  roleId: string; // Changed from role to roleId
  provider: string | null;
  birthDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
