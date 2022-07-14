class UserSerializer < ActiveModel::Serializer
  attributes :id, :admin, :username, :participant, :trials

  has_one :participant
  has_many :trials
end
