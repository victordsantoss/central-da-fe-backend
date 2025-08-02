import { CpfValidator } from '../core/utils/cpf.utils';

describe('CPF Utils', () => {
  let cpfValidator: CpfValidator;

  beforeEach(() => {
    cpfValidator = new CpfValidator();
  });

  describe('validateCpf', () => {
    it('should validate a valid CPF', () => {
      const validCPF = '12345678909';
      expect(cpfValidator.validateCpf(validCPF)).toBe(true);
    });

    it('should invalidate an invalid CPF', () => {
      const invalidCPF = '12345678900';
      expect(cpfValidator.validateCpf(invalidCPF)).toBe(false);
    });

    it('should handle CPF with dots and dashes', () => {
      const cpfWithFormatting = '123.456.789-09';
      expect(cpfValidator.validateCpf(cpfWithFormatting)).toBe(true);
    });

    it('should return false for empty string', () => {
      expect(cpfValidator.validateCpf('')).toBe(false);
    });

    it('should return false for CPF with all same digits', () => {
      expect(cpfValidator.validateCpf('11111111111')).toBe(false);
    });
  });
});
