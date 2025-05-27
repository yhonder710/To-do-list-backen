import { IUserRepository, IUserService, User } from "types/UsersTypes";

export class UserService implements IUserService {
  private userRepository: IUserRepository

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.create(user)
  }
  async findUser(): Promise<User[]> {
    return this.userRepository.find()
  }

  async findUserById(id: number): Promise<User | null> {
    return this.userRepository.findById(id)
  }

  async updateUser(id: number, user: Partial<User>): Promise<User | null> {
    return this.userRepository.update(id, user)
  }

  async deleteUser(id: number): Promise<boolean> {
    return this.userRepository.delete(id)
  }
}
