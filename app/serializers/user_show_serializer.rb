class UserShowSerializer < ActiveModel::Serializer
  attributes :id, :bio, :username, :category, :followers, :following
  has_many :posts
  # def posts
  #   self.object.posts
  # end
end
