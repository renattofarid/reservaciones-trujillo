import { api, SUCURSAL } from "@/lib/config";
import {
  TipoHabitacionResponse,
  TipoHabitacionShowResponse,
} from "./tipohabitacion.interface";
import { HabitacionesDisponibleResponse } from "./habitacionesdisponible.interface";
import { HabitacionDisponibleResponse } from "./habitaciondisponible.interface";

export async function getTiposHabitacion(): Promise<TipoHabitacionResponse> {
  const { data } = await api.get<TipoHabitacionResponse>(
    `/tipohabitacion/${SUCURSAL}`
  );
  return data;
}

export async function getTipoHabitacion(
  idTipoHabitacion: string
): Promise<TipoHabitacionShowResponse> {
  const { data } = await api.get<TipoHabitacionShowResponse>(
    `/tipohabitacion/detalle/${idTipoHabitacion}`
  );
  return data;
}

export async function getHabitacionesDisponible({
  fechaDesde,
  fechaHasta,
  idTipoHabitacion,
}: {
  fechaDesde: string;
  fechaHasta?: string;
  idTipoHabitacion?: number;
}): Promise<HabitacionesDisponibleResponse> {
  const { data } = await api.get<HabitacionesDisponibleResponse>(
    `/habitaciones/disponibles/${fechaDesde}/${SUCURSAL}`
  );
  return data;
}

export async function getHabitacionDisponible({
  fechaDesde,
  fechaHasta,
  idTipoHabitacion,
}: {
  fechaDesde: string;
  fechaHasta?: string;
  idTipoHabitacion?: number;
}): Promise<HabitacionDisponibleResponse> {
  console.log("fechaDesde", fechaDesde);
  console.log("fechaHasta", fechaHasta);
  console.log("idTipoHabitacion", idTipoHabitacion);
  const { data } = await api.get<HabitacionDisponibleResponse>(
    `/habitaciones/disponibles/${fechaDesde}/${SUCURSAL}/${idTipoHabitacion}`
  );
  console.log(data);
  return data;
}
