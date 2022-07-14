class CreateSurveys < ActiveRecord::Migration[7.0]
  def change
    create_table :surveys do |t|
      t.string :title
      t.text :questions, array: true, default: []
      t.integer :trial_id

      t.timestamps
    end
  end
end
