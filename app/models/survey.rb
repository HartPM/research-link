class Survey < ApplicationRecord
    belongs_to :trial
    has_many :responses
    has_many :participants, through: :responses

    validates :trial_id, uniqueness: true
end
