import { Document } from "mongoose";
import { Query, Repository } from "./RepositoryTypes";


export interface User extends Document {
  name: string
  username: string
  password: string
  email: string
  type_user: Type_User
  type_use: Type_Use
  comparePassword(password: string): Promise<boolean>
}

export interface IUserRepository extends Repository<User> {
  findOne(query: Query): Promise<User | null>
}

export interface IUserService {
  createUser(user: User): Promise<User>
  findUser(): Promise<User[]>
  findUserById(id: string): Promise<User | null>
  findUserByEmail(email: string): Promise<User | null>
  updateUser(id: string, user: Partial<User>): Promise<User | null>
  deleteUser(id: string): Promise<boolean>
}

export enum Type_User {
  user = "USER",
  admin = "ADMIN"
}

export enum Type_Use {
  GestionPersonal = "Gestión de tareas personales",
  OrganizacionLaboral = "Organización de tareas del trabajo",
  PlanificacionEstudios = "Planificación de estudios",
  ListaDeCompras = "Lista de la compra",
  GestionProyectos = "Gestión de proyectos",
  SeguimientoHabitos = "Seguimiento de hábitos",
  MetasPersonales = "Establecimiento de metas",
  PlanificacionEventos = "Planificación de eventos",
  TrabajoEnEquipo = "Colaboración en equipo",
  PriorizacionTareas = "Priorización de tareas importantes",
  Recordatorios = "Recordatorios",
  RutinaDiaria = "Organizar el día a día",
  PlanificacionContenido = "Planificación de contenido",
  Viajes = "Preparación de viajes",
  ListaDeLectura = "Libros, películas o series por ver",
  ListaDeDeseos = "Lista de deseos",
  AgendaReuniones = "Preparar reuniones",
  ObjetivosFitness = "Seguimiento de ejercicio y dieta",
  PlanComidas = "Planificación de comidas semanales",
  LluviaDeIdeas = "Anotar ideas rápidamente",
  ProyectosDomesticos = "Tareas del hogar"
}
