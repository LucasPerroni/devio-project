import { Food } from "@prisma/client"
import joi from "joi"

export type Order = {
  name: string
  code: number
  food: Pick<Food, "id">[]
}

export const orderSchema = joi.object({
  name: joi.string().required(),
  code: joi.number().integer().min(0).required(),
  food: joi
    .array()
    .items(
      joi
        .object({
          id: joi.number().required(),
        })
        .required()
    )
    .required(),
})
