import joi from "joi"

export type UpdateOrder = {
  id: number
  name: string
  status: boolean
}

export const updateOrderSchema = joi.object({
  id: joi.number().required(),
  name: joi.string().required(),
  status: joi.bool().required(),
})
