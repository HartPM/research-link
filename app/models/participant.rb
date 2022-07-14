class Participant < ApplicationRecord
    belongs_to :user
    has_many :responses
    has_many :surveys, through: :responses
    has_many :enrollments
    has_many :trials, through: :enrollments


    def get_participant_trials
        self.responses.map {|r| r.survey.trial}
    end

    #use this method to show a participant all of the trials they've applied for but haven't been enrolled in. Returns an array of trial ids
    def exclude_already_enrolled
        surveyed_trials = self.responses.map {|r| r.survey.trial.id}
        enrolled_trials = self.enrollments.map {|e| e.trial_id}
        surveyed_trials - enrolled_trials
    end

end
