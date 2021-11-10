class PostsController < ApplicationController

    def index 
        posts = Post.all
        render json: posts
    end

    def create
        post = Post.create(post_params)
        render json: post
    end

    def post_params
        params.require(:post).permit(:image, :description, :user_id, :likes)
        # byebug
    end
end
