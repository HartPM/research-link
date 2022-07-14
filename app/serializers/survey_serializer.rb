class SurveySerializer < ActiveModel::Serializer
  attributes :id, :title, :questions, :trial_id, :format_updated_at, :format_created_at

  def format_updated_at
    object.updated_at.strftime("%D")
  end

  def format_created_at
    object.created_at.strftime("%D")
  end

  has_one :trial
end
