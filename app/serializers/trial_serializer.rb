class TrialSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :enrollments, :survey, :city, :state, :count

  has_one :survey
  has_many :enrollments
end
