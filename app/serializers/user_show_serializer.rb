class UserShowSerializer < ActiveModel::Serializer
  attributes :id, :posts, :likes
end

def posts
  self.user.posts
end
