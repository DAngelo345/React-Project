class PostShowSerializer < ActiveModel::Serializer
  attributes :id, :image, :description, :likes, :username, :user_id, :bio, :category, 
  :followers, :following


  def username
    self.object.user.username
  end

  def bio
    self.object.user.bio
  end

  def category
    self.object.user.category
  end

  def followers
    self.object.user.followers
  end

  def following
    self.object.user.following
  end
  
end
