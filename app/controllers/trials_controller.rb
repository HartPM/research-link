class TrialsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response

    def index
        trials = Trial.all
        render json: trials, status: :ok
    end

    def show
        trial = Trial.find(params[:id])
        render json: trial, status: :ok
    end

    def create
        trial = Trial.create!(trial_params)
        render json: trial, status: :created
    end

    def update
        trial = Trial.find(params[:id])
        trial.update!(trial_params)
        render json: trial, status: :ok
    end

    def destroy
        trial = Trial.find(params[:id])
        trial.destroy
        head :no_content, status: 204
    end

    private
    def trial_params
        params.permit(:title, :description, :city, :state, :count, :user_id)
    end

    def record_not_found_response
        render json: { error: "trial not found" }, status: 404
    end

    def record_invalid_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: 422
    end
end
