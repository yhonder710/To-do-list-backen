import { Repository } from "./RepositoryTypes";

export interface Roles {
  name: string
}

export interface IRolesRepository extends Repository<Roles> { }

export interface IRolesService {
  createRoles(Roles: Roles): Promise<Roles>
  findRoles(): Promise<Roles[]>
  findRolesById(id: string): Promise<Roles | null>
  updateRoles(id: string, Roles: Partial<Roles>): Promise<Roles | null>
  deleteRoles(id: string): Promise<boolean>
}
