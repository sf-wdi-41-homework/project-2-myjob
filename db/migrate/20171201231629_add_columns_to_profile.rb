class AddColumnsToProfile < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :github, :string
    add_column :profiles, :personalweb, :string
    add_column :profiles, :twitter, :string
  end
end
