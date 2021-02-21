export type Roles = 'Contestador' | 'Verificador' | 'Admin';

export interface User {
    uid: string;
    email: string;
    displayName?: string;
    password?: string;
    role?: Roles;
}
