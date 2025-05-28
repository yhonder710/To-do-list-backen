export interface ControllerMethods {
  getAllUsers: (req: Request, res: Response) => Promise<void>
  createUsers: (req: Request, res: Response) => Promise<void>
  getByIdUsers: (req: Request, res: Response) => Promise<void>
  updateUsers: (req: Request, res: Response) => Promise<void>
  deleteUsers: (req: Request, res: Response) => Promise<void>
};
