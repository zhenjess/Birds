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
Material.destroy_all
ShoeMaterial.destroy_all

demoLogin = User.create!(first_name: "user", last_name: "name", email: 'user@gmail.com', password: "password")
debugger
wool = Material.create!(material: 'wool');
tree = Material.create!(material: 'tree');

shoe_1 = Shoe.create!(gender: 'Male', model: 'Runners')
shoe_1.material_ids = [wool.id];

shoe_2 = Shoe.create!(gender: 'Male', model: 'Runners')
shoe_2.material_ids = [tree.id];

shoe_3 = Shoe.create!(gender: 'Male', model: 'Loungers')
shoe_3.material_ids = [wool.id];

shoe_4 = Shoe.create!(gender: 'Male', model: 'Loungers')
shoe_4.material_ids = [tree.id];

shoe_5 = Shoe.create!(gender: 'Male', model: 'Skippers')
shoe_5.material_ids = [wool.id];

shoe_6 = Shoe.create!(gender: 'Male', model: 'Skippers')
shoe_6.material_ids = [tree.id];

shoe_7 = Shoe.create!(gender: 'Male', model: 'Toppers')
shoe_7.material_ids = [wool.id];

shoe_8 = Shoe.create!(gender: 'Male', model: 'Toppers')
shoe_8.material_ids = [tree.id];
