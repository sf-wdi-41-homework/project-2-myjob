class Profile < ApplicationRecord
  belongs_to :user
  has_many :documents
  validates :full_name,:linkin_url,  presence:true
  validates_email_format_of :email, :message => 'Please enter an appropriate email'
  validates_plausible_phone :phone_number, country_code: 'US'
  validates :email, uniqueness: {case_sensitive:false}
end
