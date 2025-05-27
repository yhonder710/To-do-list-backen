import { Repository } from "./RepositoryTypes";
import type { UUIDTypes } from 'uuid'

export interface User {
  id_user: number
  name: string
  username: string
  password: string
  email: string
  type_user: Type_User
  type_use: Type_Use
}

export interface IUserRepository extends Repository<User> { }

export interface IUserService {
  createUser(user: User): Promise<User>
  findUser(): Promise<User[]>
  findUserById(id: number): Promise<User | null>
  updateUser(id: number, user: Partial<User>): Promise<User | null>
  deleteUser(id: number): Promise<boolean>
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
