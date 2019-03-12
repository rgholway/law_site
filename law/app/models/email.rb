class Email < ApplicationRecord
  validates_presence_of :message, :first_name, :last_name, :email
end
