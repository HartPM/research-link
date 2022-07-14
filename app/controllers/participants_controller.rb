class ParticipantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response

    def index
        participants = Participant.all
        render json: participants, status: :ok
    end

    def show
        participant = Participant.find(params[:id])
        render json: participant, status: :ok
    end

    def create
        participant = Participant.create!(participant_params)
        render json: participant, status: :created
    end

    def update
        participant = Participant.find(params[:id])
        participant.update!(participant_params)
        render json: participant, status: :ok
    end

    def destroy
        participant = Participant.find(params[:id])
        participant.destroy
        head :no_content, status: 204
    end

    def trial_list
        participant = Participant.find(params[:id])
        trials = participant.get_participant_trials
        render json: trials, status: :ok
    end

    private
    def participant_params
        params.permit(:first_name, :last_name, :sex, :dob, :city, :state, :email, :user_id)
    end

    def record_not_found_response
        render json: { error: "Participant not found" }, status: 404
    end

    def record_invalid_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: 422
    end
end
