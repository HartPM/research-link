class Enrollment < ApplicationRecord
    belongs_to :trial
    belongs_to :participant

    validates :participant_id, uniqueness: { scope: :trial_id }
end
