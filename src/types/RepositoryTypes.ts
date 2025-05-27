export interface Repository<T = unknown> {
  create(data: T): Promise<T>
  find(): Promise<T[]>
  findById(id: number): Promise<T | null>
  update(id: number, data: Partial<T>): Promise<T | null>
  delete(id: number): Promise<boolean>
}
