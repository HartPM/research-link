class Trial < ApplicationRecord
    belongs_to :user
    has_one :survey, dependent: :destroy
    has_many :responses, through: :survey
    has_many :enrollments, dependent: :destroy
    has_many :participants, through: :enrollments
end
