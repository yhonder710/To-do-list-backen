//esta recibiendo un objeto de tipo paran
export type Query = Record<string, unknown>

// esta es una interface q esta esperando otro tipo en la T
export interface Repository<T = unknown> {
  create(data: T): Promise<T>
  find(): Promise<T[]>
  findById(id: string): Promise<T | null>
  update(id: string, data: Partial<T>): Promise<T | null>
  delete(id: string): Promise<boolean>
}
