class CreateResponses < ActiveRecord::Migration[7.0]
  def change
    create_table :responses do |t|
      t.text :answers, array: true, default: []
      t.integer :survey_id
      t.integer :participant_id

      t.timestamps
    end
  end
end
