# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(username: "D'Angelo Thomas")

Post.create(image: "Hendrix-electric ladyland", description: "Jimi Hendrix", likes: 0, user: user)
Post.create(image: "Parachutes", description: "Cold Play", likes: 0, user: user)
Post.create(image: "", description: "Faker::Music.band", likes: 0, user: user)
Post.create(image: "Man on The Moon", description: "Kid-Cudi", likes: 0, user: user)
puts "your seeds are working correctly!!"
