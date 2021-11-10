class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :description, :likes
end
