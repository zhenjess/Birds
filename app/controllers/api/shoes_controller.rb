class Api::ShoesController < ApplicationController
    def new
        @shoe = Shoe.new
        render :new
    end

    def index 
        @shoe = Shoe.all
    end

    def show 
        @shoe = Shoe.find_by(id: params[:id])

        if @shoe
            render :show
        else
            render json: @shoe.errors.full_messages, status: 422
        end
    end

    def create
        @shoe = Shoe.new(shoe_params)

        if @shoe.save
            render :show
        else
            render json: @shoe.errors.full_messages, status: 422
        end
    end

    private
    def shoe_params
        params.require(:shoe).permit(:model, :gender)
    end
end

