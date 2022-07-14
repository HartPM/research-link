class User < ApplicationRecord
    has_many :trials
    has_one :participant

end
