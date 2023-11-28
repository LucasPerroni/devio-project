import { prisma } from "../src/config/database.js"

async function main() {
  await prisma.food.upsert({
    where: { name: "Smash da casa" },
    update: {},
    create: {
      name: "Smash da casa",
      description: "2x hamburger 200g",
      ingredients: "queijo, cheddar, tomate, alface, picles.",
      price: 3050,
      image:
        "https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600w-2282033179.jpg",
      type: "combos",
    },
  })

  await prisma.food.upsert({
    where: { name: "Smash da casa 2" },
    update: {},
    create: {
      name: "Smash da casa 2",
      description: "2x hamburger 300g",
      ingredients: "queijo, cheddar, tomate, alface, picles.",
      price: 3550,
      image:
        "https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600w-2282033179.jpg",
      type: "combos",
    },
  })

  await prisma.food.upsert({
    where: { name: "Smash da casa 3" },
    update: {},
    create: {
      name: "Smash da casa 3",
      description: "2x hamburger 400g",
      ingredients: "queijo, cheddar, tomate, alface, picles.",
      price: 4050,
      image:
        "https://www.shutterstock.com/image-photo/classic-hamburger-stock-photo-isolated-600w-2282033179.jpg",
      type: "combos",
    },
  })

  await prisma.food.upsert({
    where: { name: "Acompanhamento da casa" },
    update: {},
    create: {
      name: "Acompanhamento da casa",
      description: "2x batatinhas 50g",
      ingredients: "batatinhas.",
      price: 550,
      image: "https://img.estadao.com.br/resources/jpg/2/1/1487193579312.jpg",
      type: "acompanhamentos",
    },
  })

  await prisma.food.upsert({
    where: { name: "Acompanhamento da casa 2" },
    update: {},
    create: {
      name: "Acompanhamento da casa 2",
      description: "2x batatinhas 75g",
      ingredients: "batatinhas.",
      price: 750,
      image: "https://img.estadao.com.br/resources/jpg/2/1/1487193579312.jpg",
      type: "acompanhamentos",
    },
  })

  await prisma.food.upsert({
    where: { name: "Acompanhamento da casa 3" },
    update: {},
    create: {
      name: "Acompanhamento da casa 3",
      description: "2x batatinhas 100g",
      ingredients: "batatinhas.",
      price: 1050,
      image: "https://img.estadao.com.br/resources/jpg/2/1/1487193579312.jpg",
      type: "acompanhamentos",
    },
  })

  await prisma.food.upsert({
    where: { name: "Bebida da casa" },
    update: {},
    create: {
      name: "Bebida da casa",
      description: "1x guaraná 200ml",
      ingredients: "guaraná.",
      price: 500,
      image:
        "https://www.cantinacheirodepizza.com.br/content/images/thumbs/0000505_guarana-antarctica-1l_800.jpeg",
      type: "bebidas",
    },
  })

  await prisma.food.upsert({
    where: { name: "Bebida da casa 2" },
    update: {},
    create: {
      name: "Bebida da casa 2",
      description: "1x guaraná 400ml",
      ingredients: "guaraná.",
      price: 750,
      image:
        "https://www.cantinacheirodepizza.com.br/content/images/thumbs/0000505_guarana-antarctica-1l_800.jpeg",
      type: "bebidas",
    },
  })

  await prisma.food.upsert({
    where: { name: "Bebida da casa 3" },
    update: {},
    create: {
      name: "Bebida da casa 3",
      description: "1x guaraná 750ml",
      ingredients: "guaraná.",
      price: 1250,
      image:
        "https://www.cantinacheirodepizza.com.br/content/images/thumbs/0000505_guarana-antarctica-1l_800.jpeg",
      type: "bebidas",
    },
  })

  await prisma.food.upsert({
    where: { name: "Sobremesa da casa" },
    update: {},
    create: {
      name: "Sobremesa da casa",
      description: "1x pudim 50g",
      ingredients: "pudim de leite.",
      price: 1000,
      image: "https://vovopalmirinha.com.br/wp-content/uploads/2016/06/pudim-1.jpg",
      type: "sobremesas",
    },
  })

  await prisma.food.upsert({
    where: { name: "Sobremesa da casa 2" },
    update: {},
    create: {
      name: "Sobremesa da casa 2",
      description: "1x pudim 75g",
      ingredients: "pudim de leite.",
      price: 1450,
      image: "https://vovopalmirinha.com.br/wp-content/uploads/2016/06/pudim-1.jpg",
      type: "sobremesas",
    },
  })

  await prisma.food.upsert({
    where: { name: "Sobremesa da casa 3" },
    update: {},
    create: {
      name: "Sobremesa da casa 3",
      description: "1x pudim 100g",
      ingredients: "pudim de leite.",
      price: 1850,
      image: "https://vovopalmirinha.com.br/wp-content/uploads/2016/06/pudim-1.jpg",
      type: "sobremesas",
    },
  })
}

main()
  .catch((e) => {
    console.log(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
