class CreateDocuments < ActiveRecord::Migration[5.1]
  def change
    create_table :documents do |t|
      t.string :filename
      t.text :content_type
      t.binary :file_contents
      t.belongs_to :profile, foreign_key: true

      t.timestamps
    end
  end
end
