class PostSerializer < ActiveModel::Serializer
  attributes :id, :image, :description, :likes, :username, :user_id


  def username
    self.object.user.username
  end
end
