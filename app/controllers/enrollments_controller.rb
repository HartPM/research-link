class EnrollmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response

    def index
        enrollments = Enrollment.all.order(:created_at)
        render json: enrollments, status: :ok
    end

    def show
        enrollment = Enrollment.find(params[:id])
        render json: enrollment, status: :ok
    end

    def create
        enrollment = Enrollment.create!(enrollment_params)
        render json: enrollment, status: :created
    end

    def update
        enrollment = Enrollment.find(params[:id])
        enrollment.update!(enrollment_params)
        render json: enrollment, status: :ok
    end

    def destroy
        enrollment = Enrollment.find(params[:id])
        enrollment.destroy
        head :no_content, status: 204
    end

    def participant_ids
        enrollments = Enrollment.where(trial_id: params[:trial_id])
        id_list = enrollments.pluck(:participant_id)
        render json: id_list, status: :ok
    end

    def delete_by_ids
        enrollment = Enrollment.find_by!(trial_id: params[:trial_id], participant_id: params[:participant_id])
        enrollment.destroy
        head :no_content, status: 204
    end

    private
    def enrollment_params
        params.permit(:trial_id, :participant_id)
    end

    def record_not_found_response
        render json: { error: "Enrollment not found" }, status: 404
    end

    def record_invalid_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: 422
    end
end
