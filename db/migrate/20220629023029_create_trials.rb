class CreateTrials < ActiveRecord::Migration[7.0]
  def change
    create_table :trials do |t|
      t.string :title
      t.text :description
      t.string :city
      t.string :state
      t.integer :count
      t.integer :user_id

      t.timestamps
    end
  end
end
