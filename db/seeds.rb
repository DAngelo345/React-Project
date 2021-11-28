# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(username: "D'Angelo Thomas", bio:"hello there", category:"architect", followers:0, following:0)
userbeth = User.create(username: "Bethany", bio:"im drunk", category:"red head", followers:0, following:0)

Post.create(image: "https://live.staticflickr.com/4009/4648577333_239a9f054b_b.jpg", description: "Jimi Hendrix potential home", likes: 0, user: user)
Post.create(image: "https://media.architecturaldigest.com/photos/58066f0013027a4c29105373/master/w_2554,h_1703,c_limit/modern-living-rooms-6.jpg", description: "futuristic living spaces", likes: 0, user: user)
Post.create(image: "https://www.mydomaine.com/thmb/91Dvr74wlDa9TSC0TnKjt6ScNDY=/667x500/smart/filters:no_upscale()/cdn.cliqueinc.com__cache__posts__271516__rustic-modern-home-tour-271516-1541036424396-image.700x0c-2f7c8ffbc97e48d78a9816a008d524b7.jpg", description: "rustic modern home", likes: 0, user: user)
Post.create(image: "https://www.texasrealestate.com/wp-content/uploads/LuxuryHome_640x390.jpeg", description: "luxury spaces", likes: 0, user: user)
puts "your seeds are working correctly!!"

Post.create(image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfI9gjkvNpYEtgPLARlYrHWNTbmtLft_ZTg&usqp=CAU", description: "luxury spaces", likes: 0, user: userbeth)
puts "your seeds are working correctly!!"

