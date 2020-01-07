class Api::ProductsController < ApplicationController
    def index
        @products = Product.all
    end

    def show
        @product = Product.find_by(id: params[:id])

        if @product
            render :show
        else
            render json: ["Birds not found"], status: 404
        end
    end

    private
    def product_params
        params.require(:product).permit(:product_code, :gender_id, :color_id, :material_id, :style_id, :size_id, photos: [])
    end
end