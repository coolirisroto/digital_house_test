import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export const formatDate = (date: string) =>
    format(new Date(date), "dd 'de' MMMM , yyyy", { locale: es })