class Profile < ApplicationRecord
  belongs_to :user
  has_many :documents
  validates :full_name,:linkin_url,  presence:true
  validates_email_format_of :email, :message => 'Please enter an appropriate email'
  validates :phone_number, phony_plausible: true
  validates :email, uniqueness: {case_sensitive:false}
end
