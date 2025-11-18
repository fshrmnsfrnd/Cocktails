import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const category = await prisma.category.create({ data: { name: "Classic" } });

  const gin = await prisma.ingredient.create({ data: { name: "Gin" } });
  const tonic = await prisma.ingredient.create({ data: { name: "Tonic" } });

  const cocktail = await prisma.cocktail.create({
    data: {
      name: "Gin & Tonic",
      instructions: "Mix gin and tonic over ice.",
      categoryId: category.id,
    },
  });

  await prisma.cocktailIngredient.create({
    data: { cocktailId: cocktail.id, ingredientId: gin.id, amount: "50ml" },
  });

  await prisma.cocktailIngredient.create({
    data: { cocktailId: cocktail.id, ingredientId: tonic.id, amount: "150ml" },
  });

  console.log("Seed finished");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
