class Api::ColorsController < ApplicationController
    def new
        @hue = Color.new
        render :new
    end

    def index
        @hue = Color.all
    end

    def show
        @hue = Color.find_by(id: params[:id])

        if @hue
            render :show
        else
            render json: @hue.errors.full_messages, status: 422
        end
    end

    private
    def hue_params
        params.require(:hue).permit()
    end
end