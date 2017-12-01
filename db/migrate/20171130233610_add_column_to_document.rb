class AddColumnToDocument < ActiveRecord::Migration[5.1]
  def change
    add_column :documents, :title, :string
  end
end
