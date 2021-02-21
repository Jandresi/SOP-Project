import { User } from 'src/app/Models/user.interface';

export class RoleValidator {
    isContestador(user: User): boolean {
        return user.role === 'Contestador';
    }

    isVerificador(user: User): boolean {
        return user.role === 'Verificador';
    }

    isAdmin(user: User): boolean {
        return user.role === 'Admin';
    }
}
