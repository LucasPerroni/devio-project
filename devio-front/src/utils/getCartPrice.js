export default function getCartPrice(cart) {
  let total = 0
  cart.forEach((f) => {
    total += f.times * f.price
  })

  return total
}
