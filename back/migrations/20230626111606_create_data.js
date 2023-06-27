/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  await knex("user").insert({
    first_name: "admin",
    last_name: "admin",
    mail: "admin",
    role: "admin",
    post: "admin",
  })

  await knex("item").insert({
    label: "mousquetons",
    quantity: 15,
  })
  await knex("item").insert({
    label: "gants intervention",
    quantity: 10,
  })
  await knex("item").insert({
    label: "ceintures de sécurité tactique",
    quantity: 20,
  })
  await knex("item").insert({
    label: "détecteurs de métaux",
    quantity: "25",
  })
  await knex("item").insert({
    label: "brassards de sécurité",
    quantity: 30,
  })
  await knex("item").insert({
    label: "lampes torches",
    quantity: 5,
  })
  await knex("item").insert({
    label: "bandeaux « Agents cynophiles »",
    quantity: 5,
  })
  await knex("item").insert({
    label: "gilets pare-balles",
    quantity: 12,
  })
  await knex("item").insert({
    label: "chemises manches courtes",
    quantity: 30,
  })
  await knex("item").insert({
    label: "blousons",
    quantity: 30,
  })
  await knex("item").insert({
    label: "coupe-vent",
    quantity: 30,
  })
  await knex("item").insert({
    label: "talkies walkies",
    quantity: 20,
  })
  await knex("item").insert({
    label: "kits oreillettes",
    quantity: 10,
  })
  await knex("item").insert({
    label: "tasers",
    quantity: 5,
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  await knex("user").truncate()
  await knex("item").truncate()
}
