class Company < ApplicationRecord
  belongs_to :user
  validates :company_name, :postitions_reference, presence:true
  validates :company_name, uniqueness: {case_sensitive:false, message: "is already in your list"}
end
