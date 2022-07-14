class SurveysController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response

    def index
        surveys = Survey.all
        render json: surveys, status: :ok
    end

    def show
        survey = Survey.find(params[:id])
        render json: survey, status: :ok
    end

    def create
        survey = Survey.create!(survey_params)
        render json: survey, status: :created
    end

    def update
        survey = Survey.find(params[:id])
        survey.update!(survey_params)
        render json: survey, status: :ok
    end

    def destroy
        survey = Survey.find(params[:id])
        survey.destroy
        head :no_content, status: 204
    end

    private
    def survey_params
        params.permit(:title, :trial_id, :questions => [])
    end

    def record_not_found_response
        render json: { error: "survey not found" }, status: 404
    end

    def record_invalid_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: 422
    end
end
