class CreateProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.string :full_name
      t.string :phone_number
      t.string :email
      t.string :address
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
