class Api::ShoesController < ApplicationController
    def new
        @shoes = Shoe.new
        render :new
    end

    def index 
        @shoes = Shoe.all
        @materials = Material.all 
        @shoe_materials = ShoeMaterial.all
        @colors = Color.all
        @shoe_colors = ShoeColor.all
        #implicit render index
        
    end

    def show 
        @shoe = Shoe.find_by(id: params[:id])

        if @shoe
            render :show
        else
            render json: ["Birds not found"], status: 404
        end
    end

    def create
        @shoe = Shoe.new(shoe_params)

        if @shoe.save
            render :show
        else
            render json: ["Birds don't exist"], status: 404
        end
    end

    private
    def shoe_params
        params.require(:shoe).permit(:model, :gender)
    end
end

