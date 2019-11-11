# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all

Shoe.destroy_all

demoLogin = User.create!(first_name: "user", last_name: "name", email: 'user@gmail.com', password: "password")

shoe_1 = Shoe.create!(model: wool, gender: male)
shoe_2 = Shoe.create!(model: tree, gender: female)


