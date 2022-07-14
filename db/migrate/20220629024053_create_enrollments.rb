class CreateEnrollments < ActiveRecord::Migration[7.0]
  def change
    create_table :enrollments do |t|
      t.integer :trial_id
      t.integer :participant_id

      t.timestamps
    end
  end
end
