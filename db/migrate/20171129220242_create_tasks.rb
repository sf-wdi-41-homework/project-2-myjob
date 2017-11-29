class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :subject
      t.string :details
      t.string :status
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
