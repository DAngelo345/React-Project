class PostsController < ApplicationController

    def index 
        posts = Post.all
        render json: posts
    end

    def create
        # byebug
        post = Post.create(post_params)
        render json: post
    end

    def show 
        post = Post.find(params[:id])
        render json: post, serializer: PostShowSerializer
    end

    def update
        post = Post.find(params[:id])
        post.update(post_params)
        render json: post
    end

    def destroy
        # byebug
        Post.find(params[:id]).destroy
    end

    def post_params
        params.require(:post).permit(:image, :description, :user_id)
        # byebug
    end

end
