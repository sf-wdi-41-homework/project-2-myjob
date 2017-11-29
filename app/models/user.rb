class User < ApplicationRecord
  has_many :companies
  has_many :tasks
  has_one :profile
  has_secure_password
end
