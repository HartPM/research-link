class ParticipantSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :sex, :dob, :city, :state, :email, :enrollments, :responses, :format_dob, :age

  has_many :enrollments
  has_many :responses

  def format_dob
    object.dob.strftime("%m/%d/%Y")
  end

  def age
    now = Time.now.utc.to_date
    now.year - object.dob.year - ((now.month > object.dob.month || (now.month == object.dob.month && now.day >= object.dob.day)) ? 0 : 1)
  end

end
