class Company < ApplicationRecord
  belongs_to :user
  validates :company_name, :postitions_reference, presence:true
end
