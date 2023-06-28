/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  await knex.schema.createTable("user", function (table) {
    table.increments("id")
    table.string("first_name", 255).notNullable()
    table.string("last_name", 255).notNullable()
    table.string("mail", 255).notNullable()
    table.binary("picture_face", 1000)
    table.string("role", 255)
    table.string("post", 255)
  })

  await knex.schema.createTable("item", (table) => {
    table.increments("id").notNullable()
    table.text("label").notNullable()
    table.integer("quantity").notNullable()
  })

  await knex.schema.createTable("user_item", (table) => {
    table.increments("id").notNullable()
    table.integer("id_user").notNullable()
    table.integer("id_item").notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  await knex.schema.dropTable("user")
  await knex.schema.dropTable("item")
  await knex.schema.dropTable("user_item")
}
