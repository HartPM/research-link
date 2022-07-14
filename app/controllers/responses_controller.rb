class ResponsesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response

    def index
        responses = Response.all
        render json: responses, status: :ok
    end

    def show
        response = Response.find(params[:id])
        render json: response, status: :ok
    end

    def create
        # byebug
        response = Response.create!(response_params)
        render json: response, status: :created
    end
    # answers:params[:answers][:inputs], participant_id:params[:participant_id], survey_id:params[:survey_id]

    def update
        response = Response.find(params[:id])
        response.update!(response_params)
        render json: response, status: :ok
    end

    def destroy
        response = Response.find(params[:id])
        response.destroy
        head :no_content, status: 204
    end

    def survey_ids
        responses = Response.where(survey_id: params[:survey_id])
        participant_ids = responses.pluck(:participant_id)
        render json: participant_ids, status: :ok
    end

    private
    def response_params
        params.permit(:survey_id, :participant_id, :answers => [])
    end

    def record_not_found_response
        render json: { error: "response not found" }, status: 404
    end

    def record_invalid_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: 422
    end
end
