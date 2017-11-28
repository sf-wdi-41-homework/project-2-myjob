class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.string :progress
      t.string :company_name
      t.string :postitions_reference
      t.string :contact1
      t.string :contact2
      t.string :contact3
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
