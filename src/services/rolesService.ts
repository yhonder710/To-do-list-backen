import { IRolesRepository, IRolesService, Roles } from "types/rolesTypes"

export class RolesService implements IRolesService {
  private RolesRepository: IRolesRepository

  constructor(RolesRepository: IRolesRepository) {
    this.RolesRepository = RolesRepository
  }

  async createRoles(Roles: Roles): Promise<Roles> {
    return this.RolesRepository.create(Roles)
  }
  async findRoles(): Promise<Roles[]> {
    return this.RolesRepository.find()
  }

  async findRolesById(id: string): Promise<Roles | null> {
    return this.RolesRepository.findById(id)
  }

  async updateRoles(id: string, Roles: Partial<Roles>): Promise<Roles | null> {
    return this.RolesRepository.update(id, Roles)
  }

  async deleteRoles(id: string): Promise<boolean> {
    return this.RolesRepository.delete(id)
  }
}
